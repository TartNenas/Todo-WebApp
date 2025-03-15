import React, { createContext, useState, useContext, ReactNode } from 'react';

type RoutineType = 'weekly' | 'morning' | 'night';

interface RoutineContextType {
  selectedRoutine: RoutineType;
  setSelectedRoutine: (routine: RoutineType) => void;
}

const RoutineContext = createContext<RoutineContextType | undefined>(undefined);

export const RoutineProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedRoutine, setSelectedRoutine] = useState<RoutineType>('weekly');

  return (
    <RoutineContext.Provider value={{ selectedRoutine, setSelectedRoutine }}>
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