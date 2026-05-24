import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Passage, mockPassage } from '../data/mockData';

type PassagesContextType = {
  passages: Passage[];
  addPassage: (passage: Passage) => void;
  updatePassage: (id: string, updatedPassage: Passage) => void;
  deletePassage: (id: string) => void;
  getPassageById: (id: string) => Passage | undefined;
};

const PassagesContext = createContext<PassagesContextType | undefined>(undefined);

export function PassagesProvider({ children }: { children: ReactNode }) {
  const [passages, setPassages] = useState<Passage[]>(() => {
    const saved = localStorage.getItem('readnfill_passages');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.length > 0) return parsed;
      } catch (e) {
        console.error("Failed to parse passages from localStorage", e);
      }
    }
    return [mockPassage];
  });

  useEffect(() => {
    localStorage.setItem('readnfill_passages', JSON.stringify(passages));
  }, [passages]);

  const addPassage = (passage: Passage) => {
    setPassages((prev) => [...prev, passage]);
  };

  const updatePassage = (id: string, updatedPassage: Passage) => {
    setPassages((prev) =>
      prev.map((p) => (p.id === id ? updatedPassage : p))
    );
  };

  const deletePassage = (id: string) => {
    setPassages((prev) => prev.filter((p) => p.id !== id));
  };

  const getPassageById = (id: string) => {
    return passages.find((p) => p.id === id);
  };

  return (
    <PassagesContext.Provider
      value={{
        passages,
        addPassage,
        updatePassage,
        deletePassage,
        getPassageById,
      }}
    >
      {children}
    </PassagesContext.Provider>
  );
}

export function usePassages() {
  const context = useContext(PassagesContext);
  if (context === undefined) {
    throw new Error('usePassages must be used within a PassagesProvider');
  }
  return context;
}
