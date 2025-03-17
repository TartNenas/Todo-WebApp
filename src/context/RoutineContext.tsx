import React, { createContext, useState, useContext, ReactNode } from 'react';

type RoutineType = 'weekly' | 'morning' | 'night';
type CategoryType = 'All' | 'Journal' | 'School' | 'Personal' | 'Fitness' | 'Work' | 'Cooking';

interface RoutineContextType {
  selectedRoutine: RoutineType;
  setSelectedRoutine: (routine: RoutineType) => void;
  selectedCategory: CategoryType;
  setSelectedCategory: (category: CategoryType) => void;
}

const RoutineContext = createContext<RoutineContextType | undefined>(undefined);

export const RoutineProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedRoutine, setSelectedRoutine] = useState<RoutineType>('weekly');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');

  return (
    <RoutineContext.Provider value={{ 
      selectedRoutine, 
      setSelectedRoutine,
      selectedCategory,
      setSelectedCategory
    }}>
      {children}
    </RoutineContext.Provider>
  );
};

export const useRoutine = (): RoutineContextType => {
  const context = useContext(RoutineContext);
  if (context === undefined) {
    throw new Error('useRoutine must be used within a RoutineProvider');
  }
  return context;
}; 