import { usePractice } from '../../context/PracticeContext';
import { cn } from '../../lib/utils';

export default function QuestionGrid() {
  const { passage, answers } = usePractice();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
      <h3 className="font-bold text-slate-900 dark:text-white mb-4">Questions</h3>
      <div className="grid grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {passage.questions.map((q) => {
          const isCorrect = answers[q.id]?.isCorrect;
          const hasAnswer = answers[q.id]?.value?.trim().length > 0;

          return (
            <div
              key={q.id}
              className={cn(
                "aspect-square rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300",
                isCorrect === true
                  ? "bg-emerald-100 text-emerald-700 border-2 border-emerald-500 dark:bg-emerald-500/20 dark:text-emerald-400"
                  : isCorrect === false
                  ? "bg-rose-100 text-rose-700 border-2 border-rose-500 dark:bg-rose-500/20 dark:text-rose-400"
                  : hasAnswer
                  ? "bg-slate-100 text-slate-700 border-2 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600"
                  : "bg-slate-50 text-slate-400 border border-slate-200 dark:bg-slate-800/50 dark:text-slate-500 dark:border-slate-700"
              )}
            >
              {q.order}
            </div>
          );
        })}
      </div>
    </div>
  );
}
