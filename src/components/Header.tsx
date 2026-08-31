import React from 'react';
import { 
  CheckCircle2, 
  Target, 
  Bookmark, 
  RotateCcw, 
  Sparkles, 
  Layers
} from 'lucide-react';
import { QuizStats } from '../types';
import { CLINICAL_TOPICS } from '../data/topics';

interface HeaderProps {
  stats: QuizStats;
  onOpenCheatSheet: () => void;
  onOpenAIChat: () => void;
  onResetProgress: () => void;
  onViewStats: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeTopicTitle: string | null;
  onClearTopic: () => void;
  activeTab: 'directory' | 'practice';
  onReturnToTopics: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  stats,
  onOpenCheatSheet,
  onOpenAIChat,
  onResetProgress,
  onViewStats,
  searchQuery,
  setSearchQuery,
  activeTopicTitle,
  onClearTopic,
  activeTab,
  onReturnToTopics,
}) => {
  const progressPercent = stats.totalQuestions > 0 
    ? Math.round((stats.answeredCount / stats.totalQuestions) * 100) 
    : 0;

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      {/* Top Geometric Brand Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand with Geometric Icon */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 flex items-center justify-center rounded-xs shadow-xs shrink-0">
            <div className="w-3.5 h-3.5 border-2 border-white rotate-45" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 uppercase">
              ClinicalMaster <span className="font-light text-slate-400 text-xs sm:text-sm tracking-normal">xM3 Tutorial</span>
            </h1>
          </div>
        </div>

        {/* Center/Right Metrics & Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Linear Progress Metric */}
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
              Total Progress
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs font-bold text-indigo-600 font-mono">
                {stats.answeredCount}/{stats.totalQuestions}
              </span>
              <div className="w-24 sm:w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                <div 
                  className="h-full bg-indigo-600 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-slate-200" />

          {/* High-Yield Pearls Button */}
          <button
            id="cheat-sheet-btn"
            onClick={onOpenCheatSheet}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 rounded-xs text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span className="hidden sm:inline">Pearls</span>
          </button>

          {/* AI Clinical Mentor Button */}
          <button
            id="ai-mentor-btn"
            onClick={onOpenAIChat}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xs text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">AI Mentor</span>
            <span className="sm:hidden">AI</span>
          </button>

          {/* Clear Progress Button */}
          <button
            id="reset-progress-btn"
            onClick={onResetProgress}
            title="Clear Progress to Practice Again"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 hover:text-rose-900 border border-rose-200 rounded-xs text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-2xs"
          >
            <RotateCcw className="w-3.5 h-3.5 text-rose-600" />
            <span>Clear Progress</span>
          </button>
        </div>
      </div>

      {/* Geometric Sub-bar */}
      <div className="bg-slate-50 border-t border-slate-200 px-4 sm:px-6 lg:px-8 py-2">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
          {/* Active Context Breadcrumb & Back to Topics Action */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {activeTab === 'practice' && (
              <button
                type="button"
                onClick={onReturnToTopics}
                className="flex items-center gap-1.5 px-2.5 py-1 bg-white hover:bg-indigo-50 text-indigo-700 hover:text-indigo-900 border border-slate-300 hover:border-indigo-300 rounded-xs text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-2xs group"
                title="Return to Topics Selection Menu"
              >
                <Layers className="w-3.5 h-3.5 text-indigo-600 group-hover:-translate-x-0.5 transition-transform" />
                <span>← All Topics</span>
              </button>
            )}

            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Scope:</span>
            {activeTopicTitle ? (
              <div className="inline-flex items-center gap-1.5 bg-white text-indigo-900 font-bold px-2.5 py-0.5 rounded-xs border-l-2 border-indigo-600 border border-slate-200 text-xs shadow-2xs">
                <span className="truncate max-w-[280px]">{activeTopicTitle}</span>
                <button
                  onClick={onClearTopic}
                  className="ml-1 text-slate-400 hover:text-slate-900 font-bold text-sm leading-none cursor-pointer"
                  title="View All Topics"
                >
                  ×
                </button>
              </div>
            ) : (
              <span className="font-semibold text-slate-700 bg-white px-2.5 py-0.5 rounded-xs border border-slate-200 text-xs">
                All {CLINICAL_TOPICS.length} Topics ({stats.totalQuestions} Questions)
              </span>
            )}
          </div>

          {/* Stats Bar */}
          <div className="flex items-center gap-5 text-xs font-semibold text-slate-600 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-1.5" title="Answered Questions">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>
                <strong className="text-slate-900 font-mono">{stats.answeredCount}</strong>/{stats.totalQuestions}
              </span>
            </div>

            <div className="flex items-center gap-1.5" title="Accuracy Rate">
              <Target className="w-3.5 h-3.5 text-emerald-600" />
              <span>
                Acc: <strong className="text-slate-900 font-mono">{stats.accuracyRate}%</strong>
              </span>
            </div>

            <div className="flex items-center gap-1.5" title="Bookmarked Questions">
              <Bookmark className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>
                Saved: <strong className="text-slate-900 font-mono">{stats.bookmarkedCount}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
