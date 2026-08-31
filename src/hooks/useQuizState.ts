import { useState, useEffect, useMemo, useCallback } from 'react';
import { ALL_QUESTIONS } from '../data/questions';
import { CLINICAL_TOPICS } from '../data/topics';
import { Question, FilterOptions, QuizStats, QuizMode } from '../types';

const STORAGE_KEY = 'm3_quiz_app_state_v2';
const OLD_STORAGE_KEY = 'xm3_quiz_app_state_v1';

function getStoredItem<T>(suffix: string, fallback: T): T {
  try {
    const saved = localStorage.getItem(`${STORAGE_KEY}_${suffix}`) || localStorage.getItem(`${OLD_STORAGE_KEY}_${suffix}`);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

export function useQuizState() {
  // Persistent state
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>(() => getStoredItem('answers', {}));
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<string, boolean>>(() => getStoredItem('submitted', {}));
  const [bookmarks, setBookmarks] = useState<string[]>(() => getStoredItem('bookmarks', []));
  const [notes, setNotes] = useState<Record<string, string>>(() => getStoredItem('notes', {}));

  // Ephemeral navigation & UI state
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'bookmarked' | 'incorrect' | 'unanswered' | 'high_yield'>('all');
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState<boolean>(false);
  const [isResultsModalOpen, setIsResultsModalOpen] = useState<boolean>(false);

  // Sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_answers`, JSON.stringify(userAnswers));
    } catch (e) {
      console.error(e);
    }
  }, [userAnswers]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_submitted`, JSON.stringify(submittedQuestions));
    } catch (e) {
      console.error(e);
    }
  }, [submittedQuestions]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_bookmarks`, JSON.stringify(bookmarks));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarks]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_notes`, JSON.stringify(notes));
    } catch (e) {
      console.error(e);
    }
  }, [notes]);

  // Filtered questions computation
  const filteredQuestions = useMemo(() => {
    let list: Question[] = ALL_QUESTIONS;

    // Filter by active topic if selected
    if (activeTopicId) {
      list = list.filter((q) => q.topicId === activeTopicId);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      list = list.filter(
        (q) =>
          q.clinicalVignette.toLowerCase().includes(query) ||
          q.explanation.toLowerCase().includes(query) ||
          q.keyTakeaway.toLowerCase().includes(query) ||
          q.topicTitle.toLowerCase().includes(query) ||
          q.tags.some((t) => t.toLowerCase().includes(query)) ||
          q.options.some((o) => o.text.toLowerCase().includes(query))
      );
    }

    // Filter by status filter
    if (activeFilter === 'bookmarked') {
      list = list.filter((q) => bookmarks.includes(q.id));
    } else if (activeFilter === 'incorrect') {
      list = list.filter((q) => {
        const answered = userAnswers[q.id];
        return answered && answered !== q.correctOption;
      });
    } else if (activeFilter === 'unanswered') {
      list = list.filter((q) => !userAnswers[q.id]);
    } else if (activeFilter === 'high_yield') {
      list = list.filter((q) => q.difficulty === 'High Yield');
    }

    return list;
  }, [activeTopicId, searchQuery, activeFilter, bookmarks, userAnswers]);

  // Current Question
  const currentQuestion = useMemo(() => {
    if (filteredQuestions.length === 0) return null;
    const safeIndex = Math.min(Math.max(0, currentQuestionIndex), filteredQuestions.length - 1);
    return filteredQuestions[safeIndex];
  }, [filteredQuestions, currentQuestionIndex]);

  // Global Statistics
  const stats: QuizStats = useMemo(() => {
    const totalQuestions = ALL_QUESTIONS.length;
    const answeredCount = Object.keys(userAnswers).length;
    let correctCount = 0;
    let incorrectCount = 0;

    ALL_QUESTIONS.forEach((q) => {
      const answer = userAnswers[q.id];
      if (answer) {
        if (answer === q.correctOption) {
          correctCount++;
        } else {
          incorrectCount++;
        }
      }
    });

    const accuracyRate = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

    const topicBreakdown: Record<string, { total: number; answered: number; correct: number }> = {};
    CLINICAL_TOPICS.forEach((t) => {
      const topicQs = ALL_QUESTIONS.filter((q) => q.topicId === t.id);
      const total = topicQs.length;
      let answered = 0;
      let correct = 0;

      topicQs.forEach((q) => {
        const a = userAnswers[q.id];
        if (a) {
          answered++;
          if (a === q.correctOption) correct++;
        }
      });

      topicBreakdown[t.id] = { total, answered, correct };
    });

    return {
      totalQuestions,
      answeredCount,
      correctCount,
      incorrectCount,
      accuracyRate,
      bookmarkedCount: bookmarks.length,
      topicBreakdown,
    };
  }, [userAnswers, bookmarks]);

  // Handlers
  const handleSelectOption = useCallback((questionId: string, optionId: string) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    setSubmittedQuestions((prev) => ({ ...prev, [questionId]: true }));
  }, []);

  const handleToggleBookmark = useCallback((questionId: string) => {
    setBookmarks((prev) => (prev.includes(questionId) ? prev.filter((id) => id !== questionId) : [...prev, questionId]));
  }, []);

  const handleSaveNote = useCallback((questionId: string, noteText: string) => {
    setNotes((prev) => ({ ...prev, [questionId]: noteText }));
  }, []);

  const handleResetProgress = useCallback((options?: { resetBookmarks?: boolean; resetNotes?: boolean }) => {
    setUserAnswers({});
    setSubmittedQuestions({});
    setCurrentQuestionIndex(0);
    if (options?.resetBookmarks) {
      setBookmarks([]);
    }
    if (options?.resetNotes) {
      setNotes({});
    }
  }, []);

  const handleClearTopicProgress = useCallback((topicId: string, options?: { resetBookmarks?: boolean; resetNotes?: boolean }) => {
    const topicQuestionIds = ALL_QUESTIONS.filter((q) => q.topicId === topicId).map((q) => q.id);
    
    setUserAnswers((prev) => {
      const next = { ...prev };
      topicQuestionIds.forEach((id) => delete next[id]);
      return next;
    });

    setSubmittedQuestions((prev) => {
      const next = { ...prev };
      topicQuestionIds.forEach((id) => delete next[id]);
      return next;
    });

    if (options?.resetBookmarks) {
      setBookmarks((prev) => prev.filter((id) => !topicQuestionIds.includes(id)));
    }

    if (options?.resetNotes) {
      setNotes((prev) => {
        const next = { ...prev };
        topicQuestionIds.forEach((id) => delete next[id]);
        return next;
      });
    }

    setCurrentQuestionIndex(0);
  }, []);

  const handleClearQuestionAnswer = useCallback((questionId: string) => {
    setUserAnswers((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
    setSubmittedQuestions((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
  }, []);

  const handleSelectTopic = useCallback((topicId: string | null) => {
    setActiveTopicId(topicId);
    setCurrentQuestionIndex(0);
  }, []);

  return {
    userAnswers,
    submittedQuestions,
    bookmarks,
    notes,
    activeTopicId,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    searchQuery,
    setSearchQuery,
    activeFilter,
    setActiveFilter,
    filteredQuestions,
    currentQuestion,
    stats,
    isCheatSheetOpen,
    setIsCheatSheetOpen,
    isResultsModalOpen,
    setIsResultsModalOpen,
    handleSelectOption,
    handleToggleBookmark,
    handleSaveNote,
    handleResetProgress,
    handleClearTopicProgress,
    handleClearQuestionAnswer,
    handleSelectTopic,
  };
}
