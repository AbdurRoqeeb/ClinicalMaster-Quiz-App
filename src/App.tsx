/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BookOpen, 
  Layers, 
  Search, 
  Sparkles, 
  Flame, 
  CheckCircle2, 
  Bookmark, 
  RotateCcw, 
  ChevronRight, 
  Filter,
  Play,
  Grid,
  AlertCircle
} from 'lucide-react';
import { useQuizState } from './hooks/useQuizState';
import { Header } from './components/Header';
import { TopicDirectory } from './components/TopicDirectory';
import { QuestionCard } from './components/QuestionCard';
import { QuestionMatrix } from './components/QuestionMatrix';
import { HighYieldModal } from './components/HighYieldModal';
import { ExamResultsModal } from './components/ExamResultsModal';
import { ResetProgressModal } from './components/ResetProgressModal';
import { AIChatModal } from './components/AIChatModal';
import { CLINICAL_TOPICS } from './data/topics';

export default function App() {
  const {
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
  } = useQuizState();

  const [activeTab, setActiveTab] = useState<'practice' | 'directory'>('directory');
  const [isResetModalOpen, setIsResetModalOpen] = useState<boolean>(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState<boolean>(false);
  const [aiChatInitialPrompt, setAiChatInitialPrompt] = useState<string | null>(null);

  const activeTopic = CLINICAL_TOPICS.find((t) => t.id === activeTopicId);
  const activeTopicBreakdown = activeTopicId ? stats.topicBreakdown[activeTopicId] : null;

  const handleReturnToTopics = () => {
    setActiveTab('directory');
  };

  const handleOpenAIChat = (prompt?: string) => {
    if (prompt) {
      setAiChatInitialPrompt(prompt);
    }
    setIsAIChatOpen(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleConfirmReset = (options: { resetAll: boolean; topicId?: string | null; resetBookmarks: boolean; resetNotes: boolean }) => {
    if (options.resetAll || !options.topicId) {
      handleResetProgress({
        resetBookmarks: options.resetBookmarks,
        resetNotes: options.resetNotes,
      });
    } else if (options.topicId) {
      handleClearTopicProgress(options.topicId, {
        resetBookmarks: options.resetBookmarks,
        resetNotes: options.resetNotes,
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100/70 flex flex-col font-sans text-slate-900 selection:bg-indigo-600 selection:text-white">
      {/* Top Navigation Header */}
      <Header
        stats={stats}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
        onOpenAIChat={() => handleOpenAIChat()}
        onResetProgress={() => setIsResetModalOpen(true)}
        onViewStats={() => setIsResultsModalOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeTopicTitle={activeTopic ? activeTopic.title : null}
        onClearTopic={() => handleSelectTopic(null)}
        activeTab={activeTab}
        onReturnToTopics={handleReturnToTopics}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1 flex flex-col gap-6">
        {/* Navigation Tabs & Search Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Main View Tabs */}
          <div className="inline-flex items-center gap-1 p-0.5 bg-slate-200/80 border border-slate-300 rounded-xs text-xs font-bold uppercase tracking-wider">
            <button
              id="tab-practice-btn"
              onClick={() => setActiveTab('practice')}
              className={`px-3.5 py-1.5 rounded-xs transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'practice'
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Questions & Vignettes ({filteredQuestions.length})</span>
            </button>

            <button
              id="tab-directory-btn"
              onClick={() => setActiveTab('directory')}
              className={`px-3.5 py-1.5 rounded-xs transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'directory'
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Topics ({CLINICAL_TOPICS.length})</span>
            </button>
          </div>

          {/* Quick Search Bar */}
          <div className="relative min-w-[280px] sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search clinical vignettes, drugs, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-xs text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-indigo-600 shadow-2xs placeholder:text-slate-400 font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-800 text-xs font-bold cursor-pointer"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* View Switch: Directory vs Practice Question View */}
        {activeTab === 'directory' ? (
          <TopicDirectory
            stats={stats}
            onSelectTopic={(tId) => {
              handleSelectTopic(tId);
              setActiveTab('practice');
            }}
            onSelectAllTopics={() => {
              handleSelectTopic(null);
              setActiveTab('practice');
            }}
            onClearTopicProgress={(tId) => {
              handleClearTopicProgress(tId);
            }}
            activeTopicId={activeTopicId}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left/Center Column: Question Card (8 cols on lg) */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {currentQuestion ? (
                <QuestionCard
                  question={currentQuestion}
                  currentIndex={currentQuestionIndex}
                  totalQuestions={filteredQuestions.length}
                  selectedOption={userAnswers[currentQuestion.id]}
                  isSubmitted={Boolean(submittedQuestions[currentQuestion.id])}
                  isBookmarked={bookmarks.includes(currentQuestion.id)}
                  userNote={notes[currentQuestion.id]}
                  onSelectOption={(optId) => handleSelectOption(currentQuestion.id, optId)}
                  onRetryQuestion={() => handleClearQuestionAnswer(currentQuestion.id)}
                  onAskAI={(prompt) => handleOpenAIChat(prompt)}
                  onToggleBookmark={() => handleToggleBookmark(currentQuestion.id)}
                  onSaveNote={(note) => handleSaveNote(currentQuestion.id, note)}
                  onPreviousQuestion={handlePrev}
                  onNextQuestion={handleNext}
                  onReturnToTopics={handleReturnToTopics}
                  hasPrevious={currentQuestionIndex > 0}
                  hasNext={currentQuestionIndex < filteredQuestions.length - 1}
                />
              ) : (
                /* Empty state when filters return 0 questions */
                <div className="bg-white rounded-xs border border-slate-200 p-12 text-center shadow-xs">
                  <div className="w-12 h-12 rounded-xs bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">No Questions Match Filter</h3>
                  <p className="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-5">
                    {searchQuery
                      ? `No clinical scenarios found matching "${searchQuery}".`
                      : 'There are no questions in this specific filter category.'}
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveFilter('all');
                      handleSelectTopic(null);
                    }}
                    className="px-4 py-2 bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset All Filters</span>
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Quick Jump by Topic & Question Matrix (4 cols on lg) */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              {/* High-Yield Domain Quick Switcher Card */}
              <div className="bg-white rounded-xs border border-slate-200 p-5 shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Quick Jump by Topic</h4>
                  </div>
                  {activeTopicId && (
                    <button
                      onClick={() => handleSelectTopic(null)}
                      className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 hover:text-indigo-950 cursor-pointer"
                    >
                      Show All ({CLINICAL_TOPICS.length})
                    </button>
                  )}
                </div>

                <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                  {CLINICAL_TOPICS.map((topic) => {
                    const isSelected = activeTopicId === topic.id;
                    const breakdown = stats.topicBreakdown[topic.id] || { total: topic.questionCount, answered: 0, correct: 0 };

                    return (
                      <button
                        key={topic.id}
                        onClick={() => handleSelectTopic(isSelected ? null : topic.id)}
                        className={`w-full text-left p-2 rounded-none border text-xs flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-50/80 border-indigo-600 border-l-4 text-indigo-950 font-bold shadow-2xs'
                            : 'bg-slate-50/70 border-slate-200 hover:bg-white hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <span className="truncate max-w-[200px]">{topic.title}</span>
                        <span className="text-[11px] font-mono text-slate-400 shrink-0 font-bold">
                          {breakdown.answered}/{breakdown.total}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={handleReturnToTopics}
                    className="w-full py-1.5 px-2 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 border border-slate-200 rounded-xs text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Layers className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Browse All Topics Directory</span>
                  </button>
                </div>
              </div>

              {/* Question Navigation Matrix */}
              <QuestionMatrix
                questions={filteredQuestions}
                currentIndex={currentQuestionIndex}
                userAnswers={userAnswers}
                bookmarks={bookmarks}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                onSelectIndex={(idx) => setCurrentQuestionIndex(idx)}
              />
            </div>
          </div>
        )}
      </main>

      {/* High Yield Pearls Cheat Sheet Modal */}
      <HighYieldModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
        onSelectTopic={(tId) => {
          handleSelectTopic(tId);
          setActiveTab('practice');
        }}
      />

      {/* Clinical Performance Score Summary Modal */}
      <ExamResultsModal
        isOpen={isResultsModalOpen}
        onClose={() => setIsResultsModalOpen(false)}
        stats={stats}
        onReviewMissed={() => {
          setActiveFilter('incorrect');
          setActiveTab('practice');
        }}
        onClearAndRestart={() => setIsResetModalOpen(true)}
      />

      {/* Reset & Clear Practice Progress Modal */}
      <ResetProgressModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirmReset={handleConfirmReset}
        activeTopicId={activeTopicId}
        activeTopicTitle={activeTopic?.title}
        totalAnswered={stats.answeredCount}
        topicAnsweredCount={activeTopicBreakdown?.answered || 0}
      />

      {/* Floating Ask AI Mentor Action Button */}
      <button
        id="floating-ai-mentor-btn"
        onClick={() => handleOpenAIChat()}
        className="fixed bottom-5 right-5 z-40 bg-slate-900 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xs shadow-xl border border-slate-700 hover:border-indigo-500 transition-all flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer group hover:scale-105 active:scale-95"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
        <span>Ask AI Mentor</span>
      </button>

      {/* Gemini AI Clinical Mentor Chatbot Modal */}
      <AIChatModal
        isOpen={isAIChatOpen}
        onClose={() => setIsAIChatOpen(false)}
        currentQuestion={currentQuestion}
        initialPrompt={aiChatInitialPrompt}
        onClearInitialPrompt={() => setAiChatInitialPrompt(null)}
      />
    </div>
  );
}
