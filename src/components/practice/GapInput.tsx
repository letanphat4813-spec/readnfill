import React, { useState, useEffect } from 'react';
import { Lightbulb, AlertTriangle, X } from 'lucide-react';
import { usePractice } from '../../context/PracticeContext';
import { cn } from '../../lib/utils';
import { GapQuestion } from '../../data/mockData';

export default function GapInput({ question }: { question: GapQuestion }) {
  const { passage, answers, updateAnswer, checkAnswer, openTool, focusQuestion, isSubmitted } = usePractice();
  const [isOverLimit, setIsOverLimit] = useState(false);
  const [showLimitPopup, setShowLimitPopup] = useState(false);
  const [hasWarnedForCurrentLimit, setHasWarnedForCurrentLimit] = useState(false);

  const answerState = answers[question.id];
  const value = answerState?.value || '';
  const isCorrect = answerState?.isCorrect;

  const wordLimit = React.useMemo(() => {
    const text = (passage.instruction || "").toUpperCase();
    if (text.includes("ONE WORD") || text.includes("1 WORD") || text.includes("A WORD")) return 1;
    if (text.includes("TWO WORDS") || text.includes("2 WORDS")) return 2;
    if (text.includes("THREE WORDS") || text.includes("3 WORDS")) return 3;
    if (text.includes("FOUR WORDS") || text.includes("4 WORDS")) return 4;
    return question.wordLimit || 2; // fallback
  }, [passage.instruction, question.wordLimit]);

  // Word Limit Guardian
  useEffect(() => {
    const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0;
    const overLimit = wordCount > wordLimit;
    setIsOverLimit(overLimit);
    
    if (overLimit && !hasWarnedForCurrentLimit) {
      setShowLimitPopup(true);
      setHasWarnedForCurrentLimit(true);
    } else if (!overLimit) {
      setHasWarnedForCurrentLimit(false);
    }
  }, [value, wordLimit, hasWarnedForCurrentLimit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateAnswer(question.id, e.target.value);
  };

  const handleBlur = () => {
    checkAnswer(question.id);
  };

  const handleFocus = () => {
    focusQuestion(question.id);
  };

  return (
    <>
      <span className="inline-flex items-center mx-1 align-middle relative group">
        <span className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-l-md border border-r-0 border-slate-300 dark:border-slate-600 px-2 py-1 text-sm font-bold text-slate-500 dark:text-slate-400">
          {question.order}
        </span>
        <input
          type="text"
          className={cn(
            "w-32 md:w-40 px-2 py-1 border outline-none transition-all duration-200 text-sm font-medium bg-white dark:bg-slate-900",
            isOverLimit ? "border-orange-500 animate-shake focus:ring-1 focus:ring-orange-500" : "border-slate-300 dark:border-slate-600 focus:border-primary-500 focus:ring-1 focus:ring-primary-500",
            isSubmitted && isCorrect === true && "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-500",
            isSubmitted && isCorrect === false && "border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 dark:border-rose-500"
          )}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <button
          onClick={() => openTool(isSubmitted ? 'synonym' : 'grammar', question.id)}
          className={cn(
            "flex items-center justify-center border border-l-0 rounded-r-md px-2 py-1 transition-colors",
            "bg-slate-100 hover:bg-yellow-100 border-slate-300 dark:bg-slate-800 dark:hover:bg-yellow-900/50 dark:border-slate-600",
            "text-slate-500 hover:text-yellow-600 dark:hover:text-yellow-400"
          )}
          title="Learning Tools"
        >
          <Lightbulb className="w-4 h-4" />
        </button>
        {isSubmitted && isCorrect === false && (
          <span className="ml-2 text-[11px] font-bold px-2 py-0.5 rounded-md whitespace-nowrap animate-fade-in bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800" title="Correct Answer">
            {question.correctAnswer.join(" / ")}
          </span>
        )}
      </span>

      {/* Word Limit Guardian Pop-up Box */}
      {showLimitPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-orange-100 dark:border-orange-900/30 max-w-sm w-full p-6 animate-scale-in flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-orange-500"></div>
            
            <button 
              onClick={() => setShowLimitPopup(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-500/10 rounded-full flex items-center justify-center mb-4 text-orange-500">
              <AlertTriangle className="w-8 h-8" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Word Limit Exceeded!
            </h3>
            
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              The instruction allows a maximum of <strong className="text-orange-500">{wordLimit} {wordLimit === 1 ? 'word' : 'words'}</strong>. Your current answer has {value.trim().split(/\s+/).length}.
            </p>
            
            <button
              onClick={() => setShowLimitPopup(false)}
              className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors shadow-sm shadow-orange-500/20"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
