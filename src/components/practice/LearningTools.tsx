import { usePractice } from '../../context/PracticeContext';
import { X, Puzzle, Search, Lightbulb } from 'lucide-react';
import { cn } from '../../lib/utils';
import GrammarPredictor from './GrammarPredictor';
import SynonymMapping from './SynonymMapping';
import DistractorSpotlight from './DistractorSpotlight';

const toolTabs = [
  { id: 'grammar', label: 'Grammar', icon: Puzzle, color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-500/10' },
  { id: 'synonym', label: 'Synonyms', icon: Search, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-500/10' },
  { id: 'distractor', label: 'Traps', icon: Lightbulb, color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-500/10' },
] as const;

export default function LearningTools() {
  const { passage, activeTool, activeQuestionId, openTool, closeTool, isSubmitted } = usePractice();

  if (!activeTool || !activeQuestionId) {
    return (
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
        <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 shadow-sm">
          <Lightbulb className="w-8 h-8 text-slate-300 dark:text-slate-600" />
        </div>
        <h3 className="text-slate-500 dark:text-slate-400 font-medium">
          Click the 💡 button next to a gap to open Learning Tools.
        </h3>
      </div>
    );
  }

  const question = passage.questions.find((q) => q.id === activeQuestionId);
  if (!question) return null;

  const visibleTabs = isSubmitted 
    ? toolTabs.filter(tab => tab.id !== 'grammar') 
    : toolTabs.filter(tab => tab.id === 'grammar');

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col min-h-[400px]">
      <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
        <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-sm text-slate-500">
            Q{question.order}
          </span>
          Learning Tools
        </h3>
        <button
          onClick={closeTool}
          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex p-2 gap-1 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        {visibleTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTool === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => openTool(tab.id, activeQuestionId)}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-bold transition-all",
                isActive
                  ? cn("bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700", tab.color)
                  : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800/50"
              )}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="p-6 flex-1 bg-white dark:bg-slate-900">
        {!isSubmitted && activeTool === 'grammar' && <GrammarPredictor question={question} />}
        {isSubmitted && activeTool === 'synonym' && <SynonymMapping question={question} />}
        {isSubmitted && activeTool === 'distractor' && <DistractorSpotlight question={question} />}
        {!isSubmitted && activeTool !== 'grammar' && (
          <div className="text-center py-8 text-slate-500 dark:text-slate-400">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>This tool will be unlocked after you submit your answers.</p>
          </div>
        )}
      </div>
    </div>
  );
}
