// UserInputContext.tsx
"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserInputContextType {
  projectName: string;
  setProjectName: (name: string) => void;
}

const UserInputContext = createContext<UserInputContextType | undefined>(
  undefined
);

export const useUserInput = () => {
  const context = useContext(UserInputContext);
  if (!context) {
    throw new Error("useUserInput must be used within a UserInputProvider");
  }
  return context;
};

export const UserInputProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [projectName, setProjectName] = useState<string>("");

  return (
    <UserInputContext.Provider value={{ projectName, setProjectName }}>
      {children}
    </UserInputContext.Provider>
  );
};
