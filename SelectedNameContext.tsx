"use client"
// SelectedNameContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

type SelectedNameContextType = {
  selectedName: string;
  setSelectedName: (name: string) => void;
};

const SelectedNameContext = createContext<SelectedNameContextType | undefined>(undefined);

export const SelectedNameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedName, setSelectedName] = useState<string>("Launchpad");

  return (
    <SelectedNameContext.Provider value={{ selectedName, setSelectedName }}>
      {children}
    </SelectedNameContext.Provider>
  );
};

export const useSelectedName = () => {
  const context = useContext(SelectedNameContext);
  if (!context) {
    throw new Error("useSelectedName must be used within a SelectedNameProvider");
  }
  return context;
};
