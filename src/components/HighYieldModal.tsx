import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Search, 
  BookOpen, 
  ExternalLink,
  Layers,
  ChevronRight
} from 'lucide-react';
import { CLINICAL_TOPICS } from '../data/topics';

interface HighYieldModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTopic: (topicId: string) => void;
}

export const HighYieldModal: React.FC<HighYieldModalProps> = ({
  isOpen,
  onClose,
  onSelectTopic,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  if (!isOpen) return null;

  const filteredTopics = CLINICAL_TOPICS.filter((t) => {
    const term = searchTerm.toLowerCase();
    return (
      t.title.toLowerCase().includes(term) ||
      t.category.toLowerCase().includes(term) ||
      t.highYieldConcepts.some((c) => c.toLowerCase().includes(term))
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-xs max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-300 overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xs bg-indigo-600 flex items-center justify-center text-white shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-xs">
                  xM3 Quick Revision
                </span>
                <span className="text-xs text-slate-500 font-mono">{CLINICAL_TOPICS.length} Core Topics (Pages 1–72)</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-tight mt-0.5">
                High-Yield Clinical Pearls & Key Principles
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-200/60 rounded-xs border border-transparent hover:border-slate-300 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Filter */}
        <div className="p-3.5 border-b border-slate-200 bg-white">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search high-yield pearls (e.g. 'silent chest', 'Whipple', 'antivenom', 'TACO', 'LP')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xs text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-indigo-600 focus:bg-white"
            />
          </div>
        </div>

        {/* Scrollable List of Topics & Pearls */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3.5 flex-1 bg-slate-50/30">
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              className="p-4 rounded-xs border border-slate-200 bg-white hover:border-indigo-600 transition-all flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-indigo-800 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-xs uppercase tracking-wider">
                      {topic.category}
                    </span>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{topic.title}</h4>
                  </div>
                  <span className="text-xs font-mono text-slate-500">{topic.pageRange}</span>
                </div>

                <div className="space-y-1.5 pt-1">
                  {topic.highYieldConcepts.map((concept, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                      <span className="text-indigo-600 font-bold mt-0.5">•</span>
                      <span>{concept}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => {
                    onSelectTopic(topic.id);
                    onClose();
                  }}
                  className="text-xs font-bold uppercase tracking-wider text-indigo-700 hover:text-indigo-900 flex items-center gap-1 cursor-pointer"
                >
                  <span>Practice this module ({topic.questionCount} Qs)</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>All high-yield takeaways strictly match the xM3 Batch 2 Tutorial syllabus.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-indigo-600 text-white rounded-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-2xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
