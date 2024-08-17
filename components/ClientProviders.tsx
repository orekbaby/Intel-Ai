"use client";

import React from 'react';
import { Provider } from 'react-redux';
import { combinedStore } from '@/redux/combinedStore';
import Web3ModalProvider from '@/context';

interface ClientProvidersProps {
  children: React.ReactNode;
  initialState: any; // replace 'any' with the correct type if known
}

export default function ClientProviders({ children, initialState }: ClientProvidersProps) {
  return (
    <Provider store={combinedStore}>
      <Web3ModalProvider initialState={initialState}>
        {children}
      </Web3ModalProvider>
    </Provider>
  );
}
