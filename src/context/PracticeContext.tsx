import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Passage, GapQuestion } from '../data/mockData';
import { usePassages } from './PassagesContext';

export type AnswerState = {
  [questionId: string]: {
    value: string;
    isCorrect: boolean | null;
  };
};

type PracticeContextType = {
  passage: Passage;
  answers: AnswerState;
  score: number;
  totalQuestions: number;
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
  activeTool: 'grammar' | 'synonym' | 'distractor' | null;
  activeQuestionId: string | null;
  updateAnswer: (questionId: string, value: string) => void;
  checkAnswer: (questionId: string) => void;
  openTool: (tool: 'grammar' | 'synonym' | 'distractor', questionId: string) => void;
  closeTool: () => void;
  resetAnswers: () => void;
  submitAllAnswers: () => void;
  isSubmitted: boolean;
  focusQuestion: (questionId: string) => void;
  removeQuestion: (id: string) => void;
  isPassageModalOpen: boolean;
  isQuestionModalOpen: boolean;
  openPassageModal: () => void;
  closePassageModal: () => void;
  openQuestionModal: () => void;
  closeQuestionModal: () => void;
  submitPassage: (title: string, content: string, instruction: string) => void;
  submitQuestion: (text: string, answer: string, synonyms?: GapQuestion['synonyms'], distractors?: GapQuestion['distractors']) => void;
  notFound: boolean;
};

const PracticeContext = createContext<PracticeContextType | undefined>(undefined);

export function PracticeProvider({ children, passageId }: { children: ReactNode; passageId: string }) {
  const { getPassageById, updatePassage } = usePassages();

  const foundPassage = getPassageById(passageId);
  const notFound = !foundPassage;

  // Use a local copy of the passage for in-session edits
  const [passage, setPassage] = useState<Passage>(
    foundPassage ?? { id: passageId, title: '', content: '', instruction: '', questions: [] }
  );

  // Sync local passage back to global PassagesContext whenever it changes
  useEffect(() => {
    if (!notFound) {
      updatePassage(passage.id, passage);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passage]);

  const [answers, setAnswers] = useState<AnswerState>(() => {
    const saved = localStorage.getItem(`readnfill_answers_${passageId}`);
    if (saved) {
      try { return JSON.parse(saved); } catch { return {}; }
    }
    return {};
  });

  const [activeTool, setActiveTool] = useState<PracticeContextType['activeTool']>(null);
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPassageModalOpen, setPassageModalOpen] = useState(false);
  const [isQuestionModalOpen, setQuestionModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem(`readnfill_answers_${passageId}`, JSON.stringify(answers));
  }, [answers, passageId]);

  const updateAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: { value, isCorrect: null } }));
  };

  const checkAnswer = (questionId: string) => {
    const question = passage.questions.find((q) => q.id === questionId);
    if (!question) return;
    const userAnswer = (answers[questionId]?.value || '').trim().toLowerCase();
    const isCorrect = question.correctAnswer.some((ans) => ans.toLowerCase() === userAnswer);
    setAnswers((prev) => ({
      ...prev,
      [questionId]: { value: prev[questionId]?.value || '', isCorrect: userAnswer === '' ? null : isCorrect },
    }));
  };

  const openTool = (tool: PracticeContextType['activeTool'], questionId: string) => {
    setActiveTool(tool);
    setActiveQuestionId(questionId);
  };

  const closeTool = () => {
    setActiveTool(null);
    setActiveQuestionId(null);
  };

  const resetAnswers = () => {
    if (window.confirm('Are you sure you want to clear all current answers?')) {
      setAnswers({});
      setIsSubmitted(false);
      closeTool();
    }
  };

  const submitAllAnswers = () => {
    setIsSubmitted(true);
    if (activeTool === 'grammar') setActiveTool('synonym');
    passage.questions.forEach((q) => checkAnswer(q.id));
  };

  const focusQuestion = (questionId: string) => {
    if (activeTool) setActiveQuestionId(questionId);
  };

  const removeQuestion = (id: string) => {
    setPassage({ ...passage, questions: passage.questions.filter((q) => q.id !== id) });
    if (activeQuestionId === id) closeTool();
  };

  const openPassageModal = () => setPassageModalOpen(true);
  const closePassageModal = () => setPassageModalOpen(false);
  const openQuestionModal = () => setQuestionModalOpen(true);
  const closeQuestionModal = () => setQuestionModalOpen(false);

  const submitPassage = (title: string, content: string, instruction: string) => {
    setPassage({ ...passage, title, content, instruction });
    setPassageModalOpen(false);
  };

  const submitQuestion = (text: string, answer: string, synonyms: GapQuestion['synonyms'] = [], distractors: GapQuestion['distractors'] = []) => {
    const newOrder = passage.questions.length > 0 ? Math.max(...passage.questions.map((q) => q.order)) + 1 : 1;
    const newQuestion: GapQuestion = {
      id: `q${Date.now()}`,
      order: newOrder,
      wordLimit: 2,
      questionText: text,
      correctAnswer: [answer.trim().toLowerCase()],
      grammarHint: { options: ['Noun', 'Verb', 'Adjective', 'Adverb'], correctType: 'Noun', explanation: 'No explanation provided.' },
      synonyms,
      distractors,
    };
    setPassage({ ...passage, questions: [...passage.questions, newQuestion] });
    setQuestionModalOpen(false);
  };

  const score = Object.values(answers).filter((a) => a.isCorrect).length;

  return (
    <PracticeContext.Provider
      value={{
        passage,
        answers,
        score,
        totalQuestions: passage.questions.length,
        isAdmin,
        setIsAdmin,
        activeTool,
        activeQuestionId,
        updateAnswer,
        checkAnswer,
        openTool,
        closeTool,
        resetAnswers,
        submitAllAnswers,
        isSubmitted,
        focusQuestion,
        removeQuestion,
        isPassageModalOpen,
        isQuestionModalOpen,
        openPassageModal,
        closePassageModal,
        openQuestionModal,
        closeQuestionModal,
        submitPassage,
        submitQuestion,
        notFound,
      }}
    >
      {children}
    </PracticeContext.Provider>
  );
}

export function usePractice() {
  const context = useContext(PracticeContext);
  if (context === undefined) {
    throw new Error('usePractice must be used within a PracticeProvider');
  }
  return context;
}
