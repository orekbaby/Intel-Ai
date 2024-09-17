// context/SelectedCategoryContext.tsx
"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context types
interface SelectedCategoryContextType {
  selectedCategory: string | null;
  setSelectedCategory: (category: string) => void;
}

// Create the context
const SelectedCategoryContext = createContext<SelectedCategoryContextType | undefined>(undefined);

// Create a provider component
export const SelectedCategoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <SelectedCategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </SelectedCategoryContext.Provider>
  );
};

// Custom hook to use the SelectedCategoryContext
export const useSelectedCategory = () => {
  const context = useContext(SelectedCategoryContext);
  if (context === undefined) {
    throw new Error("useSelectedCategory must be used within a SelectedCategoryProvider");
  }
  return context;
};
