import { usePractice } from '../../context/PracticeContext';
import { PlusCircle } from 'lucide-react';

export default function PassageViewer() {
  const { passage, isAdmin, openPassageModal } = usePractice();

  // Split content by newlines to render paragraphs
  const paragraphs = passage.content.split('\n').filter(p => p.trim() !== '');

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-full relative">
      {/* Admin Controls */}
      {isAdmin && (
        <div className="absolute top-4 right-4 z-10">
          <button 
            onClick={openPassageModal}
            className="flex items-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 dark:bg-indigo-500/20 dark:hover:bg-indigo-500/30 dark:text-indigo-300 px-3 py-1.5 rounded-lg text-sm font-bold transition-colors shadow-sm"
          >
            <PlusCircle className="w-4 h-4" />
            Add Passage
          </button>
        </div>
      )}

      <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1">
        {/* Instruction */}
        {passage.instruction && (
          <div className="mb-4">
            <p className="text-black dark:text-white font-bold font-serif text-center">
              {passage.instruction}
            </p>
          </div>
        )}

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center px-12">
          {passage.title}
        </h2>

        {/* Passage Content */}
        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-loose text-lg text-justify space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
