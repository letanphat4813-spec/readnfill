import { useState } from 'react';
import { GapQuestion } from '../../data/mockData';
import { CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function GrammarPredictor({ question }: { question: GapQuestion }) {
  const [selected, setSelected] = useState<string | null>(null);

  const { correctType, explanation } = question.grammarHint;
  const options = ["Noun", "Verb", "Adjective", "Adverb"];

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="bg-indigo-50 dark:bg-indigo-500/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-500/20 text-indigo-900 dark:text-indigo-200 text-sm font-medium">
        Predict the suitable word type for gap {question.order}:
      </div>

      <div className="grid grid-cols-2 gap-2">
        {options.map((option) => {
          const isSelected = selected === option;
          const isCorrect = option === correctType;
          const showResult = selected !== null;

          return (
            <button
              key={option}
              disabled={showResult}
              onClick={() => setSelected(option)}
              className={cn(
                "p-3 rounded-xl border text-sm font-bold transition-all text-center flex items-center justify-center gap-2",
                !showResult && "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/20",
                showResult && isCorrect && "bg-emerald-100 border-emerald-500 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400",
                showResult && isSelected && !isCorrect && "bg-rose-100 border-rose-500 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400",
                showResult && !isSelected && !isCorrect && "bg-slate-50 border-slate-200 text-slate-400 dark:bg-slate-800/50 dark:border-slate-800"
              )}
            >
              {option}
              {showResult && isCorrect && <CheckCircle2 className="w-4 h-4" />}
              {showResult && isSelected && !isCorrect && <XCircle className="w-4 h-4" />}
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="mt-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-xl text-sm text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 animate-fade-in">
          <p className="font-bold mb-1">Explanation:</p>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
}
