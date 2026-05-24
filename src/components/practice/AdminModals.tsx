import React, { useState } from 'react';
import { usePractice } from '../../context/PracticeContext';
import { X, Plus, Trash2 } from 'lucide-react';
import { GapQuestion } from '../../data/mockData';

export default function AdminModals() {
  const { 
    isPassageModalOpen, 
    closePassageModal, 
    submitPassage,
    isQuestionModalOpen,
    closeQuestionModal,
    submitQuestion,
    passage
  } = usePractice();

  if (!isPassageModalOpen && !isQuestionModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
      {isPassageModalOpen && (
        <PassageModal 
          onClose={closePassageModal} 
          onSubmit={submitPassage} 
        />
      )}
      {isQuestionModalOpen && (
        <QuestionModal 
          onClose={closeQuestionModal} 
          onSubmit={submitQuestion} 
          nextOrder={passage.questions.length > 0 ? Math.max(...passage.questions.map(q => q.order)) + 1 : 1}
        />
      )}
    </div>
  );
}

function PassageModal({ onClose, onSubmit }: { onClose: () => void, onSubmit: (t: string, c: string, i: string) => void }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [instruction, setInstruction] = useState('Choose NO MORE THAN TWO WORDS from the passage for each answer.');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim() && instruction.trim()) {
      onSubmit(title, content, instruction);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden border border-slate-200 dark:border-slate-800 transform transition-all animate-slide-up">
      <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">Add New Passage</h2>
        <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Passage Title</label>
          <input 
            type="text" 
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
            placeholder="Enter the title here..."
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Instruction (Word Limit)</label>
          <input 
            type="text" 
            value={instruction}
            onChange={e => setInstruction(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
            placeholder="e.g. Choose NO MORE THAN TWO WORDS from the passage for each answer."
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Passage Content</label>
          <textarea 
            value={content}
            onChange={e => setContent(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all h-64 resize-none custom-scrollbar dark:text-white"
            placeholder="Paste or type the full reading passage here..."
            required
          />
        </div>
        <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <button type="button" onClick={onClose} className="px-6 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
            Cancel
          </button>
          <button type="submit" className="px-6 py-2.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-md shadow-indigo-500/20">
            Save Passage
          </button>
        </div>
      </form>
    </div>
  );
}

function QuestionModal({ onClose, onSubmit, nextOrder }: { onClose: () => void, onSubmit: (t: string, a: string, s: GapQuestion['synonyms'], d: GapQuestion['distractors']) => void, nextOrder: number }) {
  const [text, setText] = useState(`This is a sample question. The answer goes in {{GAP_${nextOrder}}}.`);
  const [answer, setAnswer] = useState('');
  const [synonyms, setSynonyms] = useState<GapQuestion['synonyms']>([]);
  const [distractors, setDistractors] = useState<GapQuestion['distractors']>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && answer.trim()) {
      onSubmit(text, answer, synonyms, distractors);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800 transform transition-all animate-slide-up">
      <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">Add Question</h2>
        <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col overflow-hidden h-full">
        <div className="p-6 md:p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1">
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Question Text
              <span className="block text-xs font-normal text-slate-500 mt-1">Must include <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-indigo-600 dark:text-indigo-400 font-mono">{`{{GAP_${nextOrder}}}`}</code> where the blank should be.</span>
            </label>
            <textarea 
              value={text}
              onChange={e => setText(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all h-28 resize-none custom-scrollbar dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Correct Answer</label>
            <input 
              type="text" 
              value={answer}
              onChange={e => setAnswer(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
              placeholder="Enter the correct answer..."
              required
            />
          </div>

          {/* Distractors Section */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Distractors</label>
              <button type="button" onClick={() => setDistractors([...distractors, { text: '', type: '', explanation: '' }])} className="text-sm font-medium flex items-center gap-1 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1.5 rounded-lg transition-colors">
                <Plus className="w-4 h-4" /> Add Distractor
              </button>
            </div>
            {distractors.length === 0 && <p className="text-sm text-slate-400 italic">No distractors added.</p>}
            <div className="space-y-3">
              {distractors.map((d, i) => (
                <div key={i} className="flex gap-2 items-start bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="flex-1 space-y-2">
                    <div className="flex gap-2">
                      <input type="text" placeholder="Distractor Text" value={d.text} onChange={e => { const n = [...distractors]; n[i].text = e.target.value; setDistractors(n); }} className="w-1/2 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm dark:bg-slate-800 dark:text-white" required />
                      <input type="text" placeholder="Trap Type (e.g. Location Trap)" value={d.type} onChange={e => { const n = [...distractors]; n[i].type = e.target.value; setDistractors(n); }} className="w-1/2 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm dark:bg-slate-800 dark:text-white" required />
                    </div>
                    <input type="text" placeholder="Explanation" value={d.explanation} onChange={e => { const n = [...distractors]; n[i].explanation = e.target.value; setDistractors(n); }} className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm dark:bg-slate-800 dark:text-white" required />
                  </div>
                  <button type="button" onClick={() => setDistractors(distractors.filter((_, idx) => idx !== i))} className="p-2 mt-1 text-rose-500 hover:bg-rose-100 rounded-lg dark:hover:bg-rose-500/20 transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Synonyms Section */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Synonym Mappings</label>
              <button type="button" onClick={() => setSynonyms([...synonyms, { questionKeyword: '', options: [{text: '', isCorrect: true, meaning: ''}] }])} className="text-sm font-medium flex items-center gap-1 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1.5 rounded-lg transition-colors">
                <Plus className="w-4 h-4" /> Add Mapping
              </button>
            </div>
            {synonyms.length === 0 && <p className="text-sm text-slate-400 italic">No synonym mappings added.</p>}
            <div className="space-y-4">
              {synonyms.map((s, i) => (
                <div key={i} className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl p-4 relative shadow-sm">
                  <button type="button" onClick={() => setSynonyms(synonyms.filter((_, idx) => idx !== i))} className="absolute top-4 right-4 p-1.5 text-rose-500 hover:bg-rose-100 rounded-lg dark:hover:bg-rose-500/20 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Question Keyword</label>
                  <input type="text" placeholder="e.g. earliest known" value={s.questionKeyword} onChange={e => { const n = [...synonyms]; n[i].questionKeyword = e.target.value; setSynonyms(n); }} className="w-full md:w-3/4 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 mb-4 text-sm dark:bg-slate-800 dark:text-white" required />
                  
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Multiple Choice Options</span>
                    <button type="button" onClick={() => { const n = [...synonyms]; n[i].options.push({text: '', isCorrect: false, meaning: ''}); setSynonyms(n); }} className="text-xs font-medium flex items-center gap-1 text-emerald-600 hover:text-emerald-700 dark:text-emerald-400">
                      <Plus className="w-3 h-3" /> Add Option
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    {s.options.map((opt, optIdx) => (
                      <div key={optIdx} className="flex gap-2 items-center bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg border border-slate-100 dark:border-slate-800">
                        <div className="flex flex-col items-center gap-1 pl-1">
                           <input type="checkbox" checked={opt.isCorrect} onChange={e => { const n = [...synonyms]; n[i].options[optIdx].isCorrect = e.target.checked; setSynonyms(n); }} className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" title="Is Correct?" />
                           <span className="text-[10px] text-slate-400">Correct</span>
                        </div>
                        <input type="text" placeholder="Option Text" value={opt.text} onChange={e => { const n = [...synonyms]; n[i].options[optIdx].text = e.target.value; setSynonyms(n); }} className="w-1/3 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-sm dark:bg-slate-800 dark:text-white" required />
                        <input type="text" placeholder="Meaning / Definition" value={opt.meaning} onChange={e => { const n = [...synonyms]; n[i].options[optIdx].meaning = e.target.value; setSynonyms(n); }} className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-sm dark:bg-slate-800 dark:text-white" required />
                        <button type="button" onClick={() => { const n = [...synonyms]; n[i].options = n[i].options.filter((_, idx) => idx !== optIdx); setSynonyms(n); }} className="p-1.5 text-rose-500 hover:bg-rose-100 rounded-lg dark:hover:bg-rose-500/20 transition-colors"><X className="w-4 h-4" /></button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 flex justify-end gap-3 shrink-0 border-t border-slate-100 dark:border-slate-800">
          <button type="button" onClick={onClose} className="px-6 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-colors">
            Cancel
          </button>
          <button type="submit" className="px-6 py-2.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-md shadow-indigo-500/20">
            Save Question
          </button>
        </div>
      </form>
    </div>
  );
}
