import { Link } from 'react-router-dom';
import { ShieldCheck, Puzzle, Lightbulb, Search, ArrowRight, BookOpen, Settings } from 'lucide-react';
import { cn } from '../lib/utils';
import { usePassages } from '../context/PassagesContext';

const features = [
  {
    title: 'Grammar-Gap Predictor',
    description: 'Predict the required word type based on the grammatical structure around the gap.',
    icon: Puzzle,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50 dark:bg-indigo-500/10',
    border: 'border-indigo-100 dark:border-indigo-500/20',
  },
  {
    title: 'Word-Limit Guardian',
    description: 'Real-time word limit checking. Alerts you immediately if you exceed the limit.',
    icon: ShieldCheck,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-500/10',
    border: 'border-emerald-100 dark:border-emerald-500/20',
  },
  {
    title: 'Synonym Review',
    description: 'Drag and drop to match keywords in questions with synonyms in the passage.',
    icon: Search,
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-500/10',
    border: 'border-amber-100 dark:border-amber-500/20',
  },
  {
    title: 'The Distractor Spotlight',
    description: 'Analyze common trap answers and explain why they are incorrect.',
    icon: Lightbulb,
    color: 'text-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-500/10',
    border: 'border-rose-100 dark:border-rose-500/20',
  },
];

export default function Dashboard() {
  const { passages } = usePassages();

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 relative">
      <div className="absolute top-4 right-4 md:top-8 md:right-8">
        <Link 
          to="/admin" 
          className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg transition-all"
        >
          <Settings className="w-4 h-4" />
          <span>Admin</span>
        </Link>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Master <span className="text-primary-600 dark:text-primary-400">IELTS Reading</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8">
          Next-generation interactive practice platform. Master strategies, avoid subtle traps, and maximize your score.
        </p>
      </div>

      <div className="mb-20 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Available Practice Tests
          </h2>
        </div>
        
        {passages.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400">No practice tests available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {passages.map((passage) => (
              <Link
                key={passage.id}
                to={`/practice/${passage.id}`}
                className="group p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {passage.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-3">
                  {passage.content}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs font-semibold px-3 py-1 bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 rounded-full">
                    {passage.questions.length} Questions
                  </span>
                  <div className="flex items-center gap-1 text-sm font-bold text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Start <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className={cn(
                "group relative p-6 bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden",
                feature.border
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", feature.bg)}>
                <Icon className={cn("w-6 h-6", feature.color)} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
