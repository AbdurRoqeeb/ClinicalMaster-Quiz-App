import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Bookmark, 
  HelpCircle, 
  Grid, 
  Filter,
  Flame
} from 'lucide-react';
import { Question } from '../types';

interface QuestionMatrixProps {
  questions: Question[];
  currentIndex: number;
  userAnswers: Record<string, string>;
  bookmarks: string[];
  activeFilter: 'all' | 'bookmarked' | 'incorrect' | 'unanswered' | 'high_yield';
  setActiveFilter: (filter: 'all' | 'bookmarked' | 'incorrect' | 'unanswered' | 'high_yield') => void;
  onSelectIndex: (index: number) => void;
}

export const QuestionMatrix: React.FC<QuestionMatrixProps> = ({
  questions,
  currentIndex,
  userAnswers,
  bookmarks,
  activeFilter,
  setActiveFilter,
  onSelectIndex,
}) => {
  return (
    <aside className="bg-white rounded-xs border border-slate-200 p-5 shadow-xs">
      {/* Header & Filter Tabs */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <Grid className="w-4 h-4 text-indigo-600" />
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Question Matrix</h3>
          </div>
          <span className="text-[11px] text-slate-500 font-mono font-bold">
            {questions.length} Items
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1 text-[10px]">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-2 py-1 rounded-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All ({questions.length})
          </button>
          <button
            onClick={() => setActiveFilter('bookmarked')}
            className={`px-2 py-1 rounded-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer ${
              activeFilter === 'bookmarked'
                ? 'bg-amber-600 text-white shadow-2xs'
                : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200'
            }`}
          >
            <Bookmark className="w-2.5 h-2.5" />
            Saved
          </button>
          <button
            onClick={() => setActiveFilter('incorrect')}
            className={`px-2 py-1 rounded-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer ${
              activeFilter === 'incorrect'
                ? 'bg-rose-600 text-white shadow-2xs'
                : 'bg-rose-50 text-rose-800 hover:bg-rose-100 border border-rose-200'
            }`}
          >
            <XCircle className="w-2.5 h-2.5" />
            Missed
          </button>
          <button
            onClick={() => setActiveFilter('unanswered')}
            className={`px-2 py-1 rounded-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'unanswered'
                ? 'bg-indigo-600 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setActiveFilter('high_yield')}
            className={`px-2 py-1 rounded-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer ${
              activeFilter === 'high_yield'
                ? 'bg-indigo-900 text-white shadow-2xs'
                : 'bg-indigo-50 text-indigo-800 hover:bg-indigo-100 border border-indigo-200'
            }`}
          >
            <Flame className="w-2.5 h-2.5 text-amber-500" />
            High Yield
          </button>
        </div>
      </div>

      {/* Numbered Tiles Grid */}
      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 gap-1.5 pt-4 max-h-[380px] overflow-y-auto pr-1">
        {questions.map((q, idx) => {
          const answer = userAnswers[q.id];
          const isAnswered = Boolean(answer);
          const isCorrect = isAnswered && answer === q.correctOption;
          const isIncorrect = isAnswered && answer !== q.correctOption;
          const isBookmarked = bookmarks.includes(q.id);
          const isCurrent = idx === currentIndex;

          let tileClass = 'bg-slate-50 text-slate-700 border-slate-200 hover:border-indigo-600 hover:bg-slate-100';
          if (isCorrect) {
            tileClass = 'bg-emerald-50 text-emerald-950 border-emerald-300 font-bold';
          } else if (isIncorrect) {
            tileClass = 'bg-rose-50 text-rose-950 border-rose-300 font-bold';
          }

          if (isCurrent) {
            tileClass += ' border-2 border-indigo-600 ring-2 ring-indigo-600/20 font-black shadow-2xs bg-white text-indigo-900';
          }

          return (
            <button
              key={q.id}
              onClick={() => onSelectIndex(idx)}
              className={`relative h-8 rounded-none border font-mono text-xs flex items-center justify-center transition-all cursor-pointer ${tileClass}`}
              title={`Question ${idx + 1}: ${q.topicTitle}`}
            >
              <span>{idx + 1}</span>

              {/* Bookmark Indicator Square Pip */}
              {isBookmarked && (
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-amber-500 rounded-none border border-white" />
              )}
            </button>
          );
        })}
      </div>

      {/* Legend with Geometric Square Pips */}
      <div className="pt-4 mt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500 gap-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-none bg-emerald-600" />
          <span>Correct</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-none bg-rose-600" />
          <span>Missed</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-none bg-slate-200 border border-slate-300" />
          <span>Pending</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-none bg-amber-500" />
          <span>Saved</span>
        </div>
      </div>
    </aside>
  );
};
