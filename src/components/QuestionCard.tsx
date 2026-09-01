import React, { useState, useEffect, useRef } from 'react';
import { 
  Bookmark, 
  BookmarkCheck, 
  Check, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Lightbulb, 
  Sparkles, 
  StickyNote, 
  AlertCircle, 
  CheckCircle2, 
  BookOpen, 
  HelpCircle,
  Stethoscope,
  RotateCcw
} from 'lucide-react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedOption: string | undefined;
  isSubmitted: boolean;
  isBookmarked: boolean;
  userNote: string | undefined;
  onSelectOption: (optionId: string) => void;
  onRetryQuestion?: () => void;
  onToggleBookmark: () => void;
  onSaveNote: (note: string) => void;
  onPreviousQuestion: () => void;
  onNextQuestion: () => void;
  onReturnToTopics?: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  isSubmitted,
  isBookmarked,
  userNote,
  onSelectOption,
  onRetryQuestion,
  onToggleBookmark,
  onSaveNote,
  onPreviousQuestion,
  onNextQuestion,
  onReturnToTopics,
  hasPrevious,
  hasNext,
}) => {
  const [showNoteEditor, setShowNoteEditor] = useState<boolean>(false);
  const [localNote, setLocalNote] = useState<string>(userNote || '');
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setLocalNote(userNote || '');
  }, [userNote]);

  // Smoothly scroll the next question card to the center of the viewport
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }, 60);

    return () => clearTimeout(timer);
  }, [question.id]);

  // Keyboard shortcut listener for options (A, B, C, D, E or 1, 2, 3, 4, 5) and navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in textarea or input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      const key = e.key.toUpperCase();
      const optionMap: Record<string, string> = {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        E: 'E',
        '1': 'A',
        '2': 'B',
        '3': 'C',
        '4': 'D',
        '5': 'E',
      };

      if (optionMap[key]) {
        const matchingOpt = question.options.find((o) => o.id === optionMap[key]);
        if (matchingOpt) {
          onSelectOption(matchingOpt.id);
        }
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNextQuestion();
      } else if (e.key === 'ArrowLeft' && hasPrevious) {
        onPreviousQuestion();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [question, onSelectOption, hasNext, hasPrevious, onNextQuestion, onPreviousQuestion]);

  const isCorrect = selectedOption === question.correctOption;

  return (
    <article 
      ref={cardRef} 
      id={`question-card-${question.id}`}
      className="bg-white rounded-xs border border-slate-200 shadow-xs overflow-hidden"
    >
      {/* Top Meta Bar */}
      <div className="bg-slate-50 px-4 sm:px-6 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center flex-wrap gap-2">
          {/* Return to Topic Selection Menu Button */}
          {onReturnToTopics && (
            <button
              type="button"
              onClick={onReturnToTopics}
              className="flex items-center gap-1 px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-300 rounded-xs font-bold uppercase tracking-wider text-[10px] transition-colors cursor-pointer shadow-2xs group"
              title="Return to Topics Selection Menu"
            >
              <ChevronLeft className="w-3 h-3 text-indigo-600 group-hover:-translate-x-0.5 transition-transform" />
              <span>Topics</span>
            </button>
          )}

          {/* Question Index Badge */}
          <span className="font-mono font-bold text-xs bg-slate-900 text-white px-2.5 py-1 rounded-xs uppercase tracking-wider">
            Q {currentIndex + 1} of {totalQuestions}
          </span>

          {/* Topic Title Pill */}
          <span className="font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-xs uppercase tracking-wider text-[11px]">
            {question.topicTitle}
          </span>

          {/* Difficulty Badge */}
          <span
            className={`font-bold px-2 py-0.5 rounded-xs text-[10px] uppercase tracking-wider border ${
              question.difficulty === 'High Yield'
                ? 'bg-amber-50 text-amber-900 border-amber-300'
                : 'bg-indigo-50 text-indigo-800 border-indigo-200'
            }`}
          >
            {question.difficulty}
          </span>
        </div>

        {/* Action icons (Bookmark & Personal Note Toggle) */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowNoteEditor(!showNoteEditor)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xs font-semibold text-xs transition-colors cursor-pointer border ${
              userNote || showNoteEditor
                ? 'bg-indigo-50 text-indigo-700 border-indigo-300'
                : 'text-slate-500 border-slate-200 hover:text-slate-900 hover:bg-slate-100'
            }`}
            title="Add Clinical Note"
          >
            <StickyNote className="w-3.5 h-3.5" />
            <span className="hidden sm:inline uppercase tracking-wider text-[11px]">{userNote ? 'Edit Note' : 'Add Note'}</span>
          </button>

          <button
            type="button"
            onClick={onToggleBookmark}
            className={`p-1.5 rounded-xs border transition-colors cursor-pointer ${
              isBookmarked
                ? 'text-amber-600 bg-amber-50 border-amber-300'
                : 'text-slate-400 border-slate-200 hover:text-amber-600 hover:bg-amber-50'
            }`}
            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-4 h-4 fill-amber-500 text-amber-600" />
            ) : (
              <Bookmark className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Note Editor Drawer */}
      {showNoteEditor && (
        <div className="p-4 bg-indigo-50/60 border-b border-indigo-200">
          <label className="block text-xs font-bold uppercase tracking-wider text-indigo-950 mb-1.5 flex items-center gap-1.5">
            <StickyNote className="w-3.5 h-3.5 text-indigo-600" />
            <span>Clinical Study Notes for Question #{currentIndex + 1}:</span>
          </label>
          <textarea
            rows={2}
            value={localNote}
            onChange={(e) => setLocalNote(e.target.value)}
            onBlur={() => onSaveNote(localNote)}
            placeholder="Type clinical mnemonics, differential pearls, or textbook cross-references..."
            className="w-full text-xs p-2.5 bg-white border border-indigo-300 rounded-xs text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-indigo-600 shadow-2xs"
          />
          <div className="flex justify-between items-center mt-1.5 text-[11px] text-indigo-800 font-semibold">
            <span>Notes auto-save locally.</span>
            <button
              onClick={() => {
                onSaveNote(localNote);
                setShowNoteEditor(false);
              }}
              className="px-2.5 py-1 bg-indigo-600 text-white rounded-xs font-bold uppercase tracking-wider text-[10px] hover:bg-indigo-700 cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Main Question Body */}
      <div className="p-5 sm:p-7 md:p-8 space-y-6">
        {/* Clinical Scenario Vignette */}
        <div className="space-y-2.5">
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Clinical Vignette & Patient Presentation
          </div>
          <div className="text-slate-900 text-base sm:text-lg leading-relaxed font-normal">
            {question.clinicalVignette}
          </div>
        </div>

        {/* Options List */}
        <div className="space-y-3 pt-2">
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
            Answer Choices (Select One)
          </div>
          {question.options.map((option) => {
            const isSelected = selectedOption === option.id;
            const isAnswerKey = option.id === question.correctOption;
            const showFeedback = isSubmitted;

            let optionClasses = 'border-slate-200 hover:border-indigo-600 hover:bg-slate-50/60 text-slate-800 bg-white';
            let badgeClasses = 'bg-slate-50 text-slate-700 border-slate-200';
            let iconElement = null;

            if (showFeedback) {
              if (isAnswerKey) {
                // Correct answer is always highlighted in green
                optionClasses = 'border-2 border-emerald-600 bg-emerald-50/40 text-emerald-950 font-medium shadow-2xs';
                badgeClasses = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                iconElement = <Check className="w-4 h-4 text-emerald-600 font-bold ml-auto shrink-0" />;
              } else if (isSelected && !isAnswerKey) {
                // Wrong selected answer highlighted in red
                optionClasses = 'border-2 border-rose-600 bg-rose-50/40 text-rose-950 shadow-2xs';
                badgeClasses = 'bg-rose-600 text-white border-rose-600 font-bold';
                iconElement = <X className="w-4 h-4 text-rose-600 font-bold ml-auto shrink-0" />;
              } else {
                optionClasses = 'border border-slate-200 bg-slate-50/40 opacity-70 text-slate-600';
              }
            } else if (isSelected) {
              optionClasses = 'border-2 border-indigo-600 bg-indigo-50/50 text-indigo-950 font-medium shadow-2xs';
              badgeClasses = 'bg-indigo-600 text-white border-indigo-600 font-bold';
            }

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => onSelectOption(option.id)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xs border transition-all flex items-start gap-3.5 group cursor-pointer ${optionClasses}`}
              >
                {/* Option Letter Badge (Square Monospace) */}
                <span
                  className={`w-8 h-8 rounded-none flex items-center justify-center font-mono font-bold text-xs shrink-0 border transition-all ${badgeClasses}`}
                >
                  {option.id}
                </span>

                {/* Option Text */}
                <span className="text-xs sm:text-sm leading-relaxed pt-1 flex-1 font-medium">
                  {option.text}
                </span>

                {iconElement}
              </button>
            );
          })}
        </div>

        {/* Comprehensive Clinical Explanation Section (Revealed immediately upon selecting an answer) */}
        {isSubmitted && (
          <section className="mt-8 pt-6 border-t border-slate-200 space-y-6">
            {/* Feedback Verdict Banner */}
            <div
              className={`p-4 rounded-xs flex flex-wrap sm:flex-nowrap items-start justify-between gap-3.5 border ${
                isCorrect
                  ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                  : 'bg-rose-50/70 border-rose-300 text-rose-950'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div
                  className={`w-8 h-8 rounded-xs flex items-center justify-center shrink-0 ${
                    isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                  }`}
                >
                  {isCorrect ? <Check className="w-5 h-5 stroke-[2.5]" /> : <X className="w-5 h-5 stroke-[2.5]" />}
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider">
                    {isCorrect ? 'Correct Diagnostic Formulation' : 'Incorrect Choice'}
                  </h4>
                  <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                    <strong>Correct Option: {question.correctOption}</strong> — {question.correctAnswerText}
                  </p>
                </div>
              </div>

              {onRetryQuestion && (
                <button
                  type="button"
                  onClick={onRetryQuestion}
                  title="Clear this answer and try again"
                  className="shrink-0 px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-xs text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer ml-auto"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Retry Question</span>
                </button>
              )}
            </div>

            {/* Core Medical Explanation with Left Accent */}
            <div className="border-l-4 border-indigo-600 bg-slate-50/50 p-4 sm:p-5 border border-slate-200 rounded-xs shadow-2xs">
              <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs uppercase tracking-wider mb-2">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>Clinical Pathophysiology & Evidence Basis</span>
              </div>
              <p className="text-slate-800 text-xs sm:text-sm leading-relaxed">
                {question.explanation}
              </p>
            </div>

            {/* Option-by-Option Rationale Breakdown */}
            <div className="space-y-2.5">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Option Breakdown & Rationales
              </div>
              {question.options.map((opt) => {
                const isThisCorrect = opt.id === question.correctOption;
                const rationale = question.optionRationales[opt.id];
                if (!rationale) return null;

                return (
                  <div
                    key={opt.id}
                    className={`p-3 rounded-xs border text-xs leading-relaxed ${
                      isThisCorrect
                        ? 'bg-emerald-50/40 border-emerald-300 text-emerald-950'
                        : 'bg-slate-50/60 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span
                        className={`font-mono font-bold px-1.5 py-0.5 rounded-none text-[11px] shrink-0 ${
                          isThisCorrect
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-200 text-slate-800'
                        }`}
                      >
                        Option {opt.id}
                      </span>
                      <div>
                        <strong className="text-slate-900 font-semibold">{opt.text}: </strong>
                        <span className="text-slate-700">{rationale}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* High-Yield Key Takeaway Callout (Dark Geometric Module) */}
            <div className="bg-slate-900 text-white rounded-xs p-4 sm:p-5 border border-slate-800 flex items-start gap-3 shadow-xs">
              <div className="w-8 h-8 rounded-xs bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  High-Yield Clinical Takeaway
                </h5>
                <p className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5 leading-relaxed">
                  {question.keyTakeaway}
                </p>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Footer Navigation Controls */}
      <div className="bg-slate-50 px-4 sm:px-6 py-3 border-t border-slate-200 flex items-center justify-between gap-3 text-xs">
        <button
          type="button"
          onClick={onPreviousQuestion}
          disabled={!hasPrevious}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xs font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer border ${
            hasPrevious
              ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200 shadow-2xs'
              : 'text-slate-400 bg-slate-100 border-slate-200 cursor-not-allowed opacity-50'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        {/* Keyboard shortcut hint */}
        <span className="text-[11px] text-slate-400 hidden md:inline-block font-mono">
          Keys: <kbd className="bg-slate-200 px-1 rounded-none text-slate-800">A-E</kbd> / <kbd className="bg-slate-200 px-1 rounded-none text-slate-800">1-5</kbd> select • <kbd className="bg-slate-200 px-1 rounded-none text-slate-800">←</kbd> <kbd className="bg-slate-200 px-1 rounded-none text-slate-800">→</kbd> nav
        </span>

        <button
          type="button"
          onClick={onNextQuestion}
          disabled={!hasNext}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xs font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer ${
            hasNext
              ? 'bg-slate-900 hover:bg-indigo-600 text-white shadow-xs'
              : 'text-slate-400 bg-slate-100 border border-slate-200 cursor-not-allowed opacity-50'
          }`}
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
};
