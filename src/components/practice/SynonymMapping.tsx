import { useState, useMemo } from 'react';
import { GapQuestion } from '../../data/mockData';
import { CheckCircle2, XCircle, Info } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function SynonymMapping({ question }: { question: GapQuestion }) {
  // Store the selected option text for each keyword index
  const [selections, setSelections] = useState<Record<number, string>>({});

  const handleSelect = (keywordIndex: number, optionText: string) => {
    // Only allow selection if not already correctly answered
    const correctOption = question.synonyms[keywordIndex].options.find(o => o.isCorrect);
    if (selections[keywordIndex] === correctOption?.text) return;
    
    setSelections(prev => ({ ...prev, [keywordIndex]: optionText }));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-amber-50 dark:bg-amber-500/10 p-4 rounded-xl border border-amber-100 dark:border-amber-500/20 text-amber-900 dark:text-amber-200 text-sm font-medium">
        Review the synonyms for the keywords in the question. Select the correct synonym from the passage.
      </div>

      <div className="space-y-6">
        {question.synonyms.map((synonym, index) => {
          const selectedOptionText = selections[index];
          const correctOption = synonym.options.find(o => o.isCorrect);
          const isCorrectlyAnswered = selectedOptionText === correctOption?.text;

          // Stable sort to pseudo-randomize option order based on keyword text
          const shuffledOptions = useMemo(() => {
            const hash = synonym.questionKeyword.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            return hash % 2 === 0 ? synonym.options : [...synonym.options].reverse();
          }, [synonym]);

          return (
            <div key={index} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
                Keyword: <span className="px-2 py-1 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600">{synonym.questionKeyword}</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {shuffledOptions.map((option, optIdx) => {
                  const isSelected = selectedOptionText === option.text;
                  const isError = isSelected && !option.isCorrect;
                  const showSuccess = isSelected && option.isCorrect;

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(index, option.text)}
                      disabled={isCorrectlyAnswered}
                      className={cn(
                        "text-left p-4 rounded-xl border transition-all relative overflow-hidden flex flex-col",
                        showSuccess 
                          ? "bg-emerald-50 border-emerald-500 dark:bg-emerald-500/10 dark:border-emerald-500" 
                          : isError
                            ? "bg-rose-50 border-rose-500 dark:bg-rose-500/10 dark:border-rose-500 animate-shake"
                            : "bg-white border-slate-200 dark:bg-slate-800 dark:border-slate-700 hover:border-amber-400 dark:hover:border-amber-500 cursor-pointer shadow-sm hover:shadow",
                        isCorrectlyAnswered && !showSuccess && "opacity-50 grayscale cursor-not-allowed"
                      )}
                    >
                      <div className="flex items-start justify-between mb-2 w-full">
                        <div className="font-bold text-slate-900 dark:text-white text-lg capitalize">
                          {option.text}
                        </div>
                        {showSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />}
                        {isError && <XCircle className="w-5 h-5 text-rose-500 shrink-0" />}
                      </div>
                      <div className="flex gap-2 text-sm text-slate-600 dark:text-slate-400 mt-auto">
                        <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
                        <span className="leading-relaxed">{option.meaning}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
