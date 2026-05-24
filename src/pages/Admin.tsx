import { useState } from 'react';
import { usePassages } from '../context/PassagesContext';
import { Passage } from '../data/mockData';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Edit2, Trash2, X, Settings } from 'lucide-react';

export default function Admin() {
  const { passages, deletePassage, addPassage } = usePassages();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this passage?')) {
      deletePassage(id);
    }
  };

  const handleCreate = (title: string, content: string, instruction: string) => {
    const newId = `p${Date.now()}`;
    const newPassage: Passage = {
      id: newId,
      title,
      content,
      instruction,
      questions: []
    };
    addPassage(newPassage);
    setIsModalOpen(false);
    navigate(`/practice/${newId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Settings className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            Admin Dashboard
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">Manage your reading passages and questions.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
        >
          <Plus className="w-5 h-5" />
          Create Passage
        </button>
      </div>

      {passages.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800">
          <p className="text-slate-500 dark:text-slate-400 text-lg">No passages found. Create one to get started!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {passages.map((passage) => (
            <div key={passage.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2" title={passage.title}>
                {passage.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-3">
                {passage.content}
              </p>
              
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="text-sm font-medium px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg">
                  {passage.questions.length} Questions
                </span>
                <div className="flex gap-2">
                  <Link
                    to={`/practice/${passage.id}`}
                    className="p-2 text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-500/10 rounded-lg transition-colors"
                    title="Edit Passage & Questions"
                  >
                    <Edit2 className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={() => handleDelete(passage.id)}
                    className="p-2 text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-500/10 rounded-lg transition-colors"
                    title="Delete Passage"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <CreatePassageModal onClose={() => setIsModalOpen(false)} onSubmit={handleCreate} />
      )}
    </div>
  );
}

function CreatePassageModal({ onClose, onSubmit }: { onClose: () => void, onSubmit: (t: string, c: string, i: string) => void }) {
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden border border-slate-200 dark:border-slate-800 transform transition-all animate-slide-up">
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">Create New Passage</h2>
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
              Create & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
