import { useParams, Navigate, Link } from 'react-router-dom';
import { PracticeProvider, usePractice } from '../context/PracticeContext';
import PassageViewer from '../components/practice/PassageViewer';
import ProgressTracker from '../components/practice/ProgressTracker';
import QuestionList from '../components/practice/QuestionList';
import LearningTools from '../components/practice/LearningTools';
import AdminModals from '../components/practice/AdminModals';
import { Settings } from 'lucide-react';
import { cn } from '../lib/utils';

function AdminToggle() {
  const { isAdmin, setIsAdmin } = usePractice();
  
  return (
    <button
      onClick={() => setIsAdmin(!isAdmin)}
      className={cn(
        "fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110",
        isAdmin 
          ? "bg-indigo-600 text-white shadow-indigo-500/30 ring-4 ring-indigo-100 dark:ring-indigo-900/30" 
          : "bg-white text-slate-400 hover:text-indigo-600 dark:bg-slate-800 dark:text-slate-500 dark:hover:text-indigo-400"
      )}
      title={isAdmin ? "Exit Admin Mode" : "Enter Admin Mode"}
    >
      <Settings className={cn("w-6 h-6 transition-transform", isAdmin && "rotate-90")} />
    </button>
  );
}

function PracticeContent() {
  const { notFound } = usePractice();

  if (notFound) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] animate-fade-in text-center">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">Passage Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6">The passage you are looking for does not exist or has been deleted.</p>
        <Link to="/" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all hover:shadow-lg">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <>
      <AdminToggle />
      <AdminModals />
      <div className="container mx-auto px-4 py-8 h-[calc(100vh-4rem)] flex flex-col lg:flex-row gap-6 animate-fade-in">
        {/* Left Panel: Passage */}
        <div className="w-full lg:w-3/5 h-[50vh] lg:h-full">
          <PassageViewer />
        </div>

        {/* Right Panel: Tools & Progress */}
        <div className="w-full lg:w-2/5 lg:h-full flex flex-col gap-6 overflow-y-auto custom-scrollbar pb-8 lg:pb-0 pr-2">
          <div className="shrink-0">
            <ProgressTracker />
          </div>
          
          <div className="shrink-0 h-[400px]">
            <QuestionList />
          </div>
          
          <div className="shrink-0 h-[450px]">
            <LearningTools />
          </div>
        </div>
      </div>
    </>
  );
}

export default function Practice() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Navigate to="/" replace />;
  }

  return (
    <PracticeProvider passageId={id}>
      <PracticeContent />
    </PracticeProvider>
  );
}
