import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowRight,
  BarChart,
  X,
  RotateCcw
} from 'lucide-react';
import { QuizStats } from '../types';
import { CLINICAL_TOPICS } from '../data/topics';

interface ExamResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: QuizStats;
  onReviewMissed: () => void;
  onClearAndRestart?: () => void;
}

export const ExamResultsModal: React.FC<ExamResultsModalProps> = ({
  isOpen,
  onClose,
  stats,
  onReviewMissed,
  onClearAndRestart,
}) => {
  useEffect(() => {
    if (isOpen && stats.accuracyRate >= 65) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [isOpen, stats.accuracyRate]);

  if (!isOpen) return null;

  const isPassing = stats.accuracyRate >= 65;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-xs max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-300 overflow-hidden">
        {/* Header Banner */}
        <div
          className={`p-6 text-center text-white relative ${
            isPassing
              ? 'bg-indigo-900 border-b-2 border-indigo-600'
              : 'bg-slate-900 border-b-2 border-slate-700'
          }`}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 mx-auto mb-3 rounded-xs bg-indigo-600 flex items-center justify-center border border-indigo-400/30 shadow-xs">
            <Trophy className="w-6 h-6 text-amber-300" />
          </div>

          <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">Clinical Performance Summary</h3>
          <p className="text-xs text-white/80 mt-0.5">
            xM3 Clinical Medicine Batch 2 Tutorial Progress Report
          </p>

          <div className="mt-4 inline-flex items-baseline gap-1.5 bg-white/10 px-4 py-1.5 rounded-xs border border-white/20 text-white font-mono">
            <span className="text-2xl font-black">{stats.accuracyRate}%</span>
            <span className="text-xs font-semibold">
              ({stats.correctCount} / {stats.answeredCount} Correct)
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 bg-slate-50/40">
          {/* Quick Stat Tiles */}
          <div className="grid grid-cols-3 gap-2.5 text-center font-mono">
            <div className="p-3 bg-white border border-slate-200 rounded-xs shadow-2xs">
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-sans">Answered</span>
              <span className="text-base font-bold text-slate-900 mt-0.5">{stats.answeredCount}</span>
            </div>
            <div className="p-3 bg-emerald-50/50 border border-emerald-300 rounded-xs shadow-2xs">
              <span className="block text-[10px] font-bold text-emerald-700 uppercase tracking-wider font-sans">Correct</span>
              <span className="text-base font-bold text-emerald-950 mt-0.5">{stats.correctCount}</span>
            </div>
            <div className="p-3 bg-rose-50/50 border border-rose-300 rounded-xs shadow-2xs">
              <span className="block text-[10px] font-bold text-rose-700 uppercase tracking-wider font-sans">Missed</span>
              <span className="text-base font-bold text-rose-950 mt-0.5">{stats.incorrectCount}</span>
            </div>
          </div>

          {/* Performance by Domain */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 flex items-center gap-1.5">
              <BarChart className="w-3.5 h-3.5 text-indigo-600" />
              <span>Performance by Clinical Domain:</span>
            </h4>
            <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
              {CLINICAL_TOPICS.map((topic) => {
                const breakdown = stats.topicBreakdown[topic.id];
                if (!breakdown || breakdown.answered === 0) return null;
                const pct = Math.round((breakdown.correct / breakdown.answered) * 100);

                return (
                  <div
                    key={topic.id}
                    className="p-2.5 bg-white rounded-xs border border-slate-200 flex items-center justify-between text-xs shadow-2xs"
                  >
                    <div className="truncate max-w-[240px]">
                      <span className="font-semibold text-slate-900">{topic.title}</span>
                      <span className="text-slate-500 text-[11px] ml-1.5 font-mono">
                        ({breakdown.correct}/{breakdown.answered})
                      </span>
                    </div>
                    <span
                      className={`font-bold font-mono px-2 py-0.5 rounded-none text-[11px] border ${
                        pct >= 70
                          ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                          : 'bg-rose-50 text-rose-900 border-rose-200'
                      }`}
                    >
                      {pct}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 border-t border-slate-200 bg-white flex flex-wrap items-center justify-between gap-2.5">
          {onClearAndRestart && (
            <button
              onClick={() => {
                onClose();
                onClearAndRestart();
              }}
              className="px-3.5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 hover:text-rose-900 border border-rose-200 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <RotateCcw className="w-3.5 h-3.5 text-rose-600" />
              <span>Clear Progress & Retake</span>
            </button>
          )}

          <div className="flex items-center gap-2 ml-auto">
            {stats.incorrectCount > 0 && (
              <button
                onClick={() => {
                  onReviewMissed();
                  onClose();
                }}
                className="px-3.5 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
              >
                <span>Review {stats.incorrectCount} Missed</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer shadow-2xs"
            >
              Continue Practice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
