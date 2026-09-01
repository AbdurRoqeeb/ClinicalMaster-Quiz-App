import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Lazy initialize Gemini client
function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is not configured. Please add your API key in Settings > Secrets.');
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

const MEDICAL_TUTOR_SYSTEM_INSTRUCTION = `You are "M3 Clinical Mentor", an expert clinical medicine tutor, attending physician educator, and board preparation specialist.
You are assisting medical students who are studying clinical medicine and practicing board-style vignettes from the M3 Batch 2 Tutorial (August 2026).

Your objectives:
1. Explain clinical concepts, pathophysiology, diagnostic reasoning, clinical guidelines, pharmacology, and management algorithms clearly and accurately.
2. When the user asks about a specific question or scenario:
   - Break down WHY the correct option is the most accurate/standard of care.
   - Explain WHY each incorrect option/distractor is wrong, under what alternate clinical presentation it would be correct, and what trap it represents.
   - Highlight high-yield clinical pearls, classic buzzwords vs. real-world presentations, and diagnostic decision rules.
3. Structure your explanations with clear headings, concise bullet points, and **bold key medical terms** for rapid comprehension.
4. If appropriate, share memorable clinical mnemonics, pathophysiological flowcharts (using ascii or bullet steps), or key differentiator tables.
5. Maintain an encouraging, intellectual, and professional tone suitable for medical students and clinicians.`;

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Chat endpoint (supports streaming SSE)
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, questionContext, stream = true } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const ai = getGeminiClient();

    // Prepare system instruction with question context if provided
    let dynamicSystemInstruction = MEDICAL_TUTOR_SYSTEM_INSTRUCTION;
    if (questionContext) {
      dynamicSystemInstruction += `\n\n--- CURRENT QUESTION CONTEXT BEING DISCUSSED ---
Topic: ${questionContext.topicTitle || 'Clinical Medicine'}
Vignette / Scenario: ${questionContext.vignette || ''}
Lead-in Question: ${questionContext.question || ''}
Options:
${(questionContext.options || []).map((o: { id: string; text: string }) => `  - [${o.id}] ${o.text}`).join('\n')}
Correct Answer: Option ${questionContext.correctOption}: ${questionContext.correctAnswerText || ''}
Curriculum Explanation: ${questionContext.rationale || ''}
Key Clinical Takeaway: ${questionContext.takeaway || ''}
------------------------------------------------`;
    }

    // Format conversation history for Gemini API
    const formattedContents = messages.map((m: { role: string; text: string }) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }],
    }));

    if (stream) {
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');

      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-3.7-flash',
        contents: formattedContents,
        config: {
          systemInstruction: dynamicSystemInstruction,
          temperature: 0.7,
        },
      });

      for await (const chunk of responseStream) {
        if (chunk.text) {
          res.write(`data: ${JSON.stringify({ text: chunk.text })}\n\n`);
        }
      }

      res.write(`data: [DONE]\n\n`);
      res.end();
    } else {
      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: formattedContents,
        config: {
          systemInstruction: dynamicSystemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ text: response.text || '' });
    }
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    const errorMessage = error?.message || 'Failed to process request with AI mentor';
    
    if (res.headersSent) {
      res.write(`data: ${JSON.stringify({ error: errorMessage })}\n\n`);
      res.end();
    } else {
      res.status(500).json({ error: errorMessage });
    }
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`M3 Clinical Medicine server listening on port ${PORT}`);
  });
}

startServer();
