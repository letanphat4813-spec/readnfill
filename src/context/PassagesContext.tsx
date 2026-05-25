import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Passage, initialPassages } from '../data/mockData';

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
    // Migration logic: Force reset to load the 9 new B1 passages (expanded 300 words version)
    const version = localStorage.getItem('data_version');
    if (version !== 'v3') {
      localStorage.removeItem('readnfill_passages');
      localStorage.setItem('data_version', 'v3');
      return initialPassages;
    }

    const saved = localStorage.getItem('readnfill_passages');
    let loadedPassages: Passage[] = [];
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          loadedPassages = parsed;
        }
      } catch (e) {
        console.error("Failed to parse passages from localStorage", e);
      }
    }
    
    // Ensure all 9 default passages exist (merge with local data)
    const finalPassages = [...loadedPassages];
    initialPassages.forEach(defaultPassage => {
      if (!finalPassages.find(p => p.id === defaultPassage.id)) {
        finalPassages.push(defaultPassage);
      }
    });

    return finalPassages.length > 0 ? finalPassages : initialPassages;
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
