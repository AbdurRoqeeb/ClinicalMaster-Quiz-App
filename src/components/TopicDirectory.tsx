import React, { useState } from 'react';
import { 
  ChevronRight, 
  Sparkles, 
  Play, 
  CheckCircle, 
  BookMarked, 
  Layers, 
  Filter,
  Flame,
  Search,
  RotateCcw
} from 'lucide-react';
import { CLINICAL_TOPICS } from '../data/topics';
import { Topic, QuizStats } from '../types';

interface TopicDirectoryProps {
  stats: QuizStats;
  onSelectTopic: (topicId: string) => void;
  onSelectAllTopics?: () => void;
  onClearTopicProgress?: (topicId: string) => void;
  activeTopicId: string | null;
}

export const TopicDirectory: React.FC<TopicDirectoryProps> = ({
  stats,
  onSelectTopic,
  onSelectAllTopics,
  onClearTopicProgress,
  activeTopicId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(null);
  const [topicSearch, setTopicSearch] = useState<string>('');

  const categories = ['All', ...Array.from(new Set(CLINICAL_TOPICS.map((t) => t.category)))];

  const filteredTopics = CLINICAL_TOPICS.filter((topic) => {
    const matchesCategory = selectedCategory === 'All' || topic.category === selectedCategory;
    const matchesSearch =
      topic.title.toLowerCase().includes(topicSearch.toLowerCase()) ||
      topic.description.toLowerCase().includes(topicSearch.toLowerCase()) ||
      topic.highYieldConcepts.some((c) => c.toLowerCase().includes(topicSearch.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-white rounded-xs border border-slate-200 p-5 sm:p-6 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-indigo-700 font-bold text-[10px] uppercase tracking-widest mb-1">
            <Layers className="w-3.5 h-3.5 text-indigo-600" />
            <span>Topics & Clinical Domains</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-tight">Clinical Topics Directory ({CLINICAL_TOPICS.length} Topics)</h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            Select any of the {CLINICAL_TOPICS.length} curriculum topics (Pages 1–72) to practice board vignettes and review key pearls.
          </p>
        </div>

        {/* Search & All Questions Practice Button */}
        <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
          {onSelectAllTopics && (
            <button
              type="button"
              onClick={onSelectAllTopics}
              className="px-3.5 py-1.5 bg-slate-900 hover:bg-indigo-600 text-white rounded-xs text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer shrink-0"
            >
              <Play className="w-3.5 h-3.5 text-emerald-400" />
              <span>Practice All ({stats.totalQuestions})</span>
            </button>
          )}

          <div className="relative min-w-[220px] sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter topics or keywords..."
              value={topicSearch}
              onChange={(e) => setTopicSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xs focus:outline-hidden focus:ring-1 focus:ring-indigo-600 focus:bg-white text-slate-800"
            />
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto py-3.5 scrollbar-none text-xs">
        <span className="text-slate-400 flex items-center gap-1 mr-1 text-[10px] font-bold uppercase tracking-wider">
          <Filter className="w-3 h-3" />
          Category:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-xs whitespace-nowrap font-bold uppercase text-[10px] tracking-wider transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Topic Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
        {filteredTopics.map((topic) => {
          const breakdown = stats.topicBreakdown[topic.id] || { total: topic.questionCount, answered: 0, correct: 0 };
          const percentAnswered = breakdown.total > 0 ? Math.round((breakdown.answered / breakdown.total) * 100) : 0;
          const isExpanded = expandedTopicId === topic.id;
          const isActive = activeTopicId === topic.id;

          return (
            <div
              key={topic.id}
              className={`rounded-xs border transition-all duration-150 flex flex-col justify-between p-4 ${
                isActive
                  ? 'border-l-4 border-indigo-600 border-t border-r border-b border-slate-200 bg-indigo-50/30 shadow-xs'
                  : 'border-slate-200 bg-white hover:border-indigo-600 hover:shadow-2xs'
              }`}
            >
              <div>
                {/* Card Header: Category & Page Badge */}
                <div className="flex items-center justify-between gap-2 text-[10px] mb-2 font-bold">
                  <span className="text-indigo-800 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-xs uppercase tracking-wider">
                    {topic.category}
                  </span>
                  <span className="text-slate-500 font-mono">
                    {topic.pageRange}
                  </span>
                </div>

                {/* Topic Title */}
                <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2">
                  {topic.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                  {topic.description}
                </p>

                {/* Progress Mini Bar */}
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-[11px] font-medium text-slate-600 mb-1">
                    <span>
                      {breakdown.answered}/{breakdown.total} completed
                    </span>
                    {breakdown.answered > 0 && (
                      <span className="text-emerald-700 font-bold font-mono">
                        {Math.round((breakdown.correct / breakdown.answered) * 100)}% acc
                      </span>
                    )}
                  </div>
                  <div className="w-full h-1 bg-slate-100 rounded-none overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 rounded-none transition-all duration-300"
                      style={{ width: `${percentAnswered}%` }}
                    />
                  </div>
                </div>

                {/* Expandable High-Yield Pearls */}
                {isExpanded && (
                  <div className="mt-3 p-3 bg-indigo-50/60 border border-indigo-200 rounded-xs text-xs">
                    <div className="flex items-center gap-1 text-indigo-900 font-bold text-[10px] uppercase tracking-wider mb-1.5">
                      <Sparkles className="w-3 h-3 text-indigo-600" />
                      <span>Key Board Takeaways:</span>
                    </div>
                    <ul className="space-y-1 text-slate-800 text-[11px]">
                      {topic.highYieldConcepts.slice(0, 3).map((concept, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-indigo-600 font-bold">•</span>
                          <span>{concept}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-2 flex items-center justify-between gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setExpandedTopicId(isExpanded ? null : topic.id)}
                  className="text-[11px] font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-wider cursor-pointer"
                >
                  {isExpanded ? 'Hide Pearls' : 'View Pearls'}
                </button>

                <div className="flex items-center gap-1.5">
                  {breakdown.answered > 0 && onClearTopicProgress && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onClearTopicProgress(topic.id);
                      }}
                      title="Clear answers for this topic to practice again"
                      className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-xs transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => onSelectTopic(topic.id)}
                    className="px-3 py-1.5 bg-slate-900 hover:bg-indigo-600 text-white rounded-xs text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors shadow-2xs cursor-pointer"
                  >
                    <span>Practice</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
