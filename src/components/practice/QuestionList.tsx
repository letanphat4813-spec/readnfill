import { usePractice } from '../../context/PracticeContext';
import GapInput from './GapInput';
import { PlusCircle, Trash2 } from 'lucide-react';


export default function QuestionList() {
  const { passage, isAdmin, openQuestionModal, removeQuestion } = usePractice();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-slate-900 dark:text-white text-lg">Questions</h3>
        {isAdmin && (
          <button 
            onClick={openQuestionModal}
            className="flex items-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 dark:bg-indigo-500/20 dark:hover:bg-indigo-500/30 dark:text-indigo-300 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors"
          >
            <PlusCircle className="w-3 h-3" />
            Add Question
          </button>
        )}
      </div>

      <div className="space-y-6 overflow-y-auto custom-scrollbar pr-2 flex-1">
        {passage.instruction && (
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-xl text-amber-900 dark:text-amber-200 font-medium italic text-sm shadow-sm mb-6">
            <span className="font-bold uppercase mr-2 not-italic">Instruction:</span>
            {passage.instruction}
          </div>
        )}
        
        {passage.questions.map((q) => {
          // Parse the question text to inject the GapInput component
          const parts = q.questionText.split(/(\{\{GAP_\d+\}\})/g);

          return (
            <div key={q.id} className="relative group">
              <div className="text-slate-700 dark:text-slate-300 text-base leading-loose p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 transition-colors hover:border-slate-300 dark:hover:border-slate-700">
                <span className="font-bold text-slate-400 mr-2">{q.order}.</span>
                {parts.map((part, index) => {
                  const match = part.match(/\{\{GAP_(\d+)\}\}/);
                  if (match) {
                    return <GapInput key={`gap-${index}`} question={q} />;
                  }
                  return <span key={`text-${index}`}>{part}</span>;
                })}
              </div>

              {/* Admin Remove Button */}
              {isAdmin && (
                <button 
                  onClick={() => removeQuestion(q.id)}
                  className="absolute -top-2 -right-2 bg-rose-100 text-rose-600 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-rose-200 dark:bg-rose-900/50 dark:text-rose-400"
                  title="Remove Question"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
