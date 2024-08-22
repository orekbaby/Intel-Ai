"use client";
import React from 'react';
import { Provider } from 'react-redux';
import { combinedStore } from '@/redux/combinedStore';


interface ClientProvidersProps {
  children: React.ReactNode;
  
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <Provider store={combinedStore}>
      
        {children}
      
    </Provider>
  );
}
