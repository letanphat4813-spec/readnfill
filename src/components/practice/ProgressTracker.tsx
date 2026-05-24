import { usePractice } from '../../context/PracticeContext';
import { Target, RotateCcw, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function ProgressTracker() {
  const { answers, score, totalQuestions, resetAnswers, submitAllAnswers, isSubmitted } = usePractice();
  const percentage = Math.round((score / totalQuestions) * 100) || 0;
  
  const answeredCount = Object.values(answers).filter(a => (a?.value || '').trim().length > 0).length;
  const answeredPercentage = Math.round((answeredCount / totalQuestions) * 100) || 0;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-primary-500" />
          <h3 className="font-bold text-slate-900 dark:text-white">
            {isSubmitted ? 'Result' : 'Progress'}
          </h3>
        </div>
        <button
          onClick={resetAnswers}
          className="text-slate-400 hover:text-rose-500 transition-colors p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
          title="Reset Answers"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-end justify-between">
        <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
          {isSubmitted ? score : answeredCount} <span className="text-lg text-slate-400 font-medium">/ {totalQuestions}</span>
        </span>
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {isSubmitted ? `${percentage}% Score` : `${answeredPercentage}% Answered`}
        </span>
      </div>

      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
        <div
          className={cn(
            "h-2.5 rounded-full transition-all duration-500 ease-out",
            isSubmitted ? "bg-emerald-500" : "bg-primary-500"
          )}
          style={{ width: `${isSubmitted ? percentage : answeredPercentage}%` }}
        ></div>
      </div>

      {!isSubmitted && answeredCount === totalQuestions && totalQuestions > 0 && (
        <button
          onClick={submitAllAnswers}
          className="mt-2 w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2.5 rounded-xl transition-colors shadow-sm animate-scale-in"
        >
          <CheckCircle2 className="w-5 h-5" />
          Submit Answers
        </button>
      )}
    </div>
  );
}
