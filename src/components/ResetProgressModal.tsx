import React, { useState } from 'react';
import { RotateCcw, AlertTriangle, X, Check, Bookmark, StickyNote, Layers, Sparkles } from 'lucide-react';

interface ResetProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmReset: (options: { resetAll: boolean; topicId?: string | null; resetBookmarks: boolean; resetNotes: boolean }) => void;
  activeTopicId: string | null;
  activeTopicTitle?: string;
  totalAnswered: number;
  topicAnsweredCount?: number;
}

export const ResetProgressModal: React.FC<ResetProgressModalProps> = ({
  isOpen,
  onClose,
  onConfirmReset,
  activeTopicId,
  activeTopicTitle,
  totalAnswered,
  topicAnsweredCount = 0,
}) => {
  const [resetScope, setResetScope] = useState<'all' | 'topic'>('all');
  const [resetBookmarks, setResetBookmarks] = useState<boolean>(false);
  const [resetNotes, setResetNotes] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirmReset({
      resetAll: resetScope === 'all',
      topicId: resetScope === 'topic' ? activeTopicId : null,
      resetBookmarks,
      resetNotes,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-xs border border-slate-200 shadow-2xl max-w-lg w-full overflow-hidden">
        {/* Modal Header */}
        <div className="bg-rose-600 px-5 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xs bg-white/20 flex items-center justify-center">
              <RotateCcw className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider">Clear Practice Progress</h3>
              <p className="text-[11px] text-white/80">Reset answers to practice clinical questions again</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-xs text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-4">
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 p-3 rounded-xs text-amber-900 text-xs">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Practice Multiple Times:</span> Clearing answers will unsubmit answered questions so you can test your knowledge again from a blank slate.
            </div>
          </div>

          {/* Reset Scope Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Select Reset Scope:
            </label>
            <div className="space-y-2">
              <label
                className={`flex items-start gap-3 p-3 rounded-xs border cursor-pointer transition-all ${
                  resetScope === 'all'
                    ? 'border-indigo-600 bg-indigo-50/60 shadow-2xs'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <input
                  type="radio"
                  name="resetScope"
                  checked={resetScope === 'all'}
                  onChange={() => setResetScope('all')}
                  className="mt-0.5 text-indigo-600 focus:ring-indigo-600"
                />
                <div className="text-xs">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Reset All Questions ({totalAnswered} answered)</span>
                  </div>
                  <p className="text-slate-500 text-[11px] mt-0.5">
                    Wipes answers across all 32 clinical curriculum topics so you can take a fresh practice pass.
                  </p>
                </div>
              </label>

              {activeTopicId && (
                <label
                  className={`flex items-start gap-3 p-3 rounded-xs border cursor-pointer transition-all ${
                    resetScope === 'topic'
                      ? 'border-indigo-600 bg-indigo-50/60 shadow-2xs'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="resetScope"
                    checked={resetScope === 'topic'}
                    onChange={() => setResetScope('topic')}
                    className="mt-0.5 text-indigo-600 focus:ring-indigo-600"
                  />
                  <div className="text-xs">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Reset Current Topic Only: &quot;{activeTopicTitle}&quot; ({topicAnsweredCount} answered)</span>
                    </div>
                    <p className="text-slate-500 text-[11px] mt-0.5">
                      Clears answers only for questions in this topic. Other topics remain untouched.
                    </p>
                  </div>
                </label>
              )}
            </div>
          </div>

          {/* Optional Additional Resets */}
          <div className="pt-2 border-t border-slate-200">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
              Additional Options (Saved Data):
            </span>
            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={resetBookmarks}
                  onChange={(e) => setResetBookmarks(e.target.checked)}
                  className="rounded-xs text-indigo-600 focus:ring-indigo-600"
                />
                <Bookmark className="w-3.5 h-3.5 text-slate-400" />
                <span>Also clear bookmarked questions</span>
              </label>

              <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={resetNotes}
                  onChange={(e) => setResetNotes(e.target.checked)}
                  className="rounded-xs text-indigo-600 focus:ring-indigo-600"
                />
                <StickyNote className="w-3.5 h-3.5 text-slate-400" />
                <span>Also clear personal study notes</span>
              </label>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-xs transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-700 rounded-xs transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Confirm & Clear Progress</span>
          </button>
        </div>
      </div>
    </div>
  );
};
