import { useState } from 'react';
import { GapQuestion } from '../../data/mockData';
import { ShieldAlert, Info } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function DistractorSpotlight({ question }: { question: GapQuestion }) {
  const [activeTrap, setActiveTrap] = useState<number | null>(null);

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="bg-rose-50 dark:bg-rose-500/10 p-4 rounded-xl border border-rose-100 dark:border-rose-500/20 text-rose-900 dark:text-rose-200 text-sm font-medium">
        Watch out for trap answers! Click on each word to view the analysis.
      </div>

      <div className="flex flex-wrap gap-2">
        {question.distractors.map((distractor, index) => (
          <button
            key={index}
            onClick={() => setActiveTrap(activeTrap === index ? null : index)}
            className={cn(
              "px-4 py-2 rounded-xl border text-sm font-bold transition-all flex items-center gap-2",
              activeTrap === index
                ? "bg-rose-100 border-rose-500 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400"
                : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-rose-300 hover:bg-rose-50 dark:hover:bg-rose-900/30"
            )}
          >
            {distractor.text}
            <ShieldAlert className="w-4 h-4" />
          </button>
        ))}
      </div>

      {activeTrap !== null && (
        <div className="mt-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 animate-fade-in relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
          
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-slate-900 dark:text-white">
                  Trap type:
                </span>
                <span className="text-xs px-2 py-0.5 bg-rose-200 dark:bg-rose-900/50 text-rose-800 dark:text-rose-300 rounded-full font-bold">
                  {question.distractors[activeTrap].type}
                </span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {question.distractors[activeTrap].explanation}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
