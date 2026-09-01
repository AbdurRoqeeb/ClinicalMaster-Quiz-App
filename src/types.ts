export type OptionId = 'A' | 'B' | 'C' | 'D' | 'E';

export interface Option {
  id: OptionId;
  text: string;
  explanation?: string;
}

export interface Question {
  id: string;
  topicId: string;
  topicTitle: string;
  questionNumber: number;
  clinicalVignette: string;
  options: Option[];
  correctOption: OptionId;
  correctAnswerText: string;
  explanation: string;
  optionRationales: Record<string, string>;
  keyTakeaway: string;
  sourcePageRef: string;
  difficulty: 'High Yield' | 'Core Clinical' | 'Advanced';
  tags: string[];
}

export type ClinicalCategory =
  | 'Emergency & Critical Care'
  | 'Endocrinology & Metabolism'
  | 'Nephrology & Acid-Base'
  | 'Cardiovascular Medicine'
  | 'Gastroenterology & Hepatology'
  | 'Infectious Diseases & Toxicology'
  | 'Diagnostics & Therapeutics';

export interface Topic {
  id: string;
  title: string;
  category: ClinicalCategory;
  description: string;
  questionCount: number;
  pageRange: string;
  colorTheme: string;
  iconName: string;
  highYieldConcepts: string[];
}

export type QuizMode = 'study' | 'exam' | 'practice' | 'timed_exam' | 'topic_drill' | 'weak_areas' | 'bookmarked';

export interface QuizStats {
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
  accuracyRate: number;
  bookmarkedCount: number;
  topicBreakdown: Record<string, { total: number; answered: number; correct: number }>;
}

export interface FilterOptions {
  category?: string;
  topicId?: string;
  status?: 'all' | 'bookmarked' | 'incorrect' | 'unanswered' | 'high_yield';
  searchQuery?: string;
}

export interface UserAnswerRecord {
  questionId: string;
  selectedOption: OptionId;
  isCorrect: boolean;
  timestamp: number;
  timeSpentSec: number;
}

export interface StoredProgress {
  answeredQuestions: Record<string, {
    selectedOption: OptionId;
    isCorrect: boolean;
    attempts: number;
    lastAttemptTime: number;
  }>;
  bookmarks: string[];
  notes: Record<string, string>;
  examHistory: {
    id: string;
    date: number;
    mode: QuizMode;
    totalQuestions: number;
    score: number;
    timeTakenSeconds: number;
    topicScores: Record<string, { total: number; correct: number }>;
  }[];
  activeSession?: {
    mode: QuizMode;
    topicId?: string;
    questionIds: string[];
    currentIdx: number;
    answers: Record<string, OptionId>;
    flags: Record<string, boolean>;
    timeRemainingSec: number;
    isFinished: boolean;
  };
}
