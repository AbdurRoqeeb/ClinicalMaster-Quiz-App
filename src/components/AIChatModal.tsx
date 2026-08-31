import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { 
  Bot, 
  Send, 
  X, 
  RotateCcw, 
  Sparkles, 
  HelpCircle, 
  Check, 
  Layers, 
  ChevronDown,
  Minimize2,
  Maximize2,
  Stethoscope,
  Lightbulb,
  ExternalLink
} from 'lucide-react';
import { Question, ChatMessage, QuestionContextPayload } from '../types';

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentQuestion?: Question | null;
  initialPrompt?: string | null;
  onClearInitialPrompt?: () => void;
}

const STORAGE_KEY = 'xm3_quiz_ai_chat_history_v1';

const INITIAL_WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome-msg',
  role: 'model',
  text: `Hello! I am your **xM3 Clinical Mentor**. 🩺

I'm here to help you master all **143 clinical medicine questions** from the Batch 2 Tutorial. You can ask me:
- **Pathophysiology & Mechanisms**: Why a disease process causes specific symptoms or lab abnormalities.
- **Option Analysis**: Why a specific distractor was incorrect or what classic scenario would make it the right choice.
- **Diagnostic & Treatment Algorithms**: First-line vs. gold-standard tests, next steps in management.
- **Mnemonics & Board Pearls**: High-yield memory aids for your exams.

Feel free to type your question below or click any of the suggested prompts!`,
  timestamp: Date.now(),
};

const SUGGESTED_PROMPTS = [
  'Why is the correct answer the gold standard in this case?',
  'Explain why the other options are incorrect distractors.',
  'What is the underlying pathophysiology in simple terms?',
  'What is the next best diagnostic step or treatment algorithm?',
  'Give me a high-yield clinical mnemonic for this topic.',
];

export const AIChatModal: React.FC<AIChatModalProps> = ({
  isOpen,
  onClose,
  currentQuestion,
  initialPrompt,
  onClearInitialPrompt,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore error
    }
    return [INITIAL_WELCOME_MESSAGE];
  });

  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [includeQuestionContext, setIncludeQuestionContext] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Save conversation history to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // ignore
    }
  }, [messages]);

  // Scroll to bottom when new messages arrive or loading changes
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // Handle incoming initial prompt from question card or elsewhere
  useEffect(() => {
    if (isOpen && initialPrompt) {
      handleSendMessage(initialPrompt);
      if (onClearInitialPrompt) {
        onClearInitialPrompt();
      }
    }
  }, [isOpen, initialPrompt]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen]);

  const handleClearHistory = () => {
    if (window.confirm('Clear your chat history with the AI Clinical Mentor?')) {
      const freshMessages = [INITIAL_WELCOME_MESSAGE];
      setMessages(freshMessages);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // ignore
      }
    }
  };

  const getQuestionContextPayload = (): QuestionContextPayload | undefined => {
    if (!includeQuestionContext || !currentQuestion) return undefined;
    return {
      id: currentQuestion.id,
      topicTitle: currentQuestion.topicTitle,
      vignette: currentQuestion.clinicalVignette,
      question: `Question #${currentQuestion.questionNumber}`,
      options: currentQuestion.options.map((o) => ({ id: o.id, text: o.text })),
      correctOption: currentQuestion.correctOption,
      correctAnswerText: currentQuestion.correctAnswerText,
      rationale: currentQuestion.explanation,
      takeaway: currentQuestion.keyTakeaway,
    };
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query || isLoading) return;

    const userMessageId = `user-${Date.now()}`;
    const userMessage: ChatMessage = {
      id: userMessageId,
      role: 'user',
      text: query,
      timestamp: Date.now(),
      questionIdContext: includeQuestionContext && currentQuestion ? currentQuestion.id : undefined,
    };

    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setInputQuery('');
    setIsLoading(true);

    const botMessageId = `bot-${Date.now()}`;
    const initialBotMessage: ChatMessage = {
      id: botMessageId,
      role: 'model',
      text: '',
      timestamp: Date.now(),
      isStreaming: true,
    };

    setMessages((prev) => [...prev, initialBotMessage]);

    try {
      const questionContext = getQuestionContextPayload();

      // Format messages history for the API (strip client metadata)
      const apiMessages = newHistory.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: apiMessages,
          questionContext,
          stream: true,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with ${response.status}`);
      }

      // Read SSE stream
      const reader = response.body?.getReader();
      const decoder = new TextDecoder('utf-8');
      let accumulatedText = '';

      if (reader) {
        let buffer = '';
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed.startsWith('data: ')) {
              const dataContent = trimmed.substring(6);
              if (dataContent === '[DONE]') {
                break;
              }
              try {
                const parsed = JSON.parse(dataContent);
                if (parsed.text) {
                  accumulatedText += parsed.text;
                  setMessages((prev) =>
                    prev.map((msg) =>
                      msg.id === botMessageId
                        ? { ...msg, text: accumulatedText, isStreaming: true }
                        : msg
                    )
                  );
                } else if (parsed.error) {
                  throw new Error(parsed.error);
                }
              } catch (e: any) {
                if (e.message && e.message !== 'Unexpected end of JSON input') {
                  throw e;
                }
              }
            }
          }
        }
      }

      // Mark streaming as done
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId
            ? { ...msg, text: accumulatedText || 'I processed your question.', isStreaming: false }
            : msg
        )
      );
    } catch (err: any) {
      console.error('Chat error:', err);
      const fallbackErrorMessage =
        err?.message || 'Unable to connect to AI Clinical Mentor. Please verify your GEMINI_API_KEY in Settings > Secrets.';

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId
            ? {
                ...msg,
                text: `⚠️ **AI Mentor Error**: ${fallbackErrorMessage}\n\n*If you are running in preview, ensure your Gemini API key is active.*`,
                isStreaming: false,
                error: true,
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className={`bg-white h-full sm:h-[90vh] flex flex-col border border-slate-200 shadow-2xl transition-all duration-300 rounded-none sm:rounded-xs overflow-hidden ${
          isExpanded ? 'w-full sm:w-[85vw] max-w-5xl' : 'w-full sm:w-[540px] max-w-full'
        }`}
      >
        {/* Chat Header */}
        <div className="bg-slate-900 px-4 py-3 text-white flex items-center justify-between shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xs bg-indigo-600 flex items-center justify-center text-white shadow-xs">
              <Stethoscope className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold tracking-tight uppercase flex items-center gap-1.5">
                  <span>xM3 Clinical Mentor</span>
                  <span className="inline-flex items-center px-1.5 py-0.2 rounded-2xs text-[10px] font-semibold bg-indigo-500/30 text-indigo-300 border border-indigo-500/40">
                    AI Tutor
                  </span>
                </h3>
              </div>
              <p className="text-[11px] text-slate-300">
                Medical reasoning & pathophysiology Q&A assistant
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleClearHistory}
              title="Clear Conversation History"
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xs transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              title={isExpanded ? 'Collapse width' : 'Expand width'}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xs transition-colors hidden sm:block cursor-pointer"
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              title="Close Chat"
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xs transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Question Context Banner */}
        {currentQuestion && (
          <div className="bg-indigo-50 border-b border-indigo-100 px-4 py-2 text-xs flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2 truncate pr-2">
              <Layers className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <div className="truncate text-slate-800">
                <span className="font-bold text-indigo-900">Current Question:</span>{' '}
                <span className="font-medium text-slate-700">
                  Q{currentQuestion.questionNumber} &bull; {currentQuestion.topicTitle}
                </span>
              </div>
            </div>

            <label className="flex items-center gap-1.5 text-[11px] font-semibold text-indigo-800 cursor-pointer shrink-0">
              <input
                type="checkbox"
                checked={includeQuestionContext}
                onChange={(e) => setIncludeQuestionContext(e.target.checked)}
                className="rounded-2xs text-indigo-600 focus:ring-indigo-500"
              />
              <span>Attach Context</span>
            </label>
          </div>
        )}

        {/* Message Thread Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((message) => {
            const isUser = message.role === 'user';
            return (
              <div
                key={message.id}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-7 h-7 rounded-xs bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-xs p-3.5 text-xs sm:text-sm leading-relaxed shadow-2xs border ${
                    isUser
                      ? 'bg-indigo-600 text-white border-indigo-700'
                      : message.error
                      ? 'bg-rose-50 text-rose-950 border-rose-200'
                      : 'bg-white text-slate-900 border-slate-200'
                  }`}
                >
                  {isUser ? (
                    <div className="whitespace-pre-wrap font-medium">{message.text}</div>
                  ) : (
                    <div className="prose prose-xs sm:prose-sm max-w-none text-slate-800 space-y-2 prose-headings:font-bold prose-headings:text-slate-900 prose-strong:font-bold prose-strong:text-indigo-950 prose-ul:my-1 prose-li:my-0.5">
                      <ReactMarkdown>{message.text || 'Thinking...'}</ReactMarkdown>
                      {message.isStreaming && (
                        <span className="inline-block w-2 h-4 bg-indigo-600 animate-pulse ml-1 align-middle" />
                      )}
                    </div>
                  )}
                  <div
                    className={`text-[10px] mt-1.5 flex items-center justify-end gap-1 ${
                      isUser ? 'text-indigo-200' : 'text-slate-400'
                    }`}
                  >
                    <span>
                      {new Date(message.timestamp).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Action Prompts */}
        <div className="px-4 py-2 bg-white border-t border-slate-200 shrink-0">
          <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
            <Lightbulb className="w-3 h-3 text-amber-500" />
            <span>High-Yield Prompts:</span>
          </div>
          <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-1 max-h-20">
            {SUGGESTED_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(prompt)}
                disabled={isLoading}
                className="px-2.5 py-1 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 text-slate-700 text-[11px] rounded-xs border border-slate-200 font-medium transition-colors text-left cursor-pointer disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Input Bar */}
        <div className="p-3 bg-white border-t border-slate-200 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-end gap-2"
          >
            <div className="relative flex-1">
              <textarea
                ref={inputRef}
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about mechanisms, distractors, differentials, or mnemonics... (Shift+Enter for new line)"
                rows={2}
                disabled={isLoading}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xs border border-slate-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none resize-none bg-slate-50 focus:bg-white transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={!inputQuery.trim() || isLoading}
              className="p-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white rounded-xs transition-colors flex items-center justify-center shrink-0 cursor-pointer shadow-xs"
              title="Send message (Enter)"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </form>
          <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1 px-1">
            <span>Powered by Gemini 3.5 &bull; Medical Attending Role</span>
            <span>Press Enter to send</span>
          </div>
        </div>
      </div>
    </div>
  );
};
