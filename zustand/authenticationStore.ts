import { create } from "zustand";
import { useRouter } from "next/router";

// Define the interface for the authentication state
interface AuthenticationState {
  isConnected: boolean;
  publicAddress: string | null;
  disconnect: () => void;
  connectWallet: (address: string) => Promise<void>;
}

// Create the Zustand store
export const useAuthenticationStore = create<AuthenticationState>((set) => ({
  isConnected: false,
  publicAddress: null,
  disconnect: () => {
    set({
      isConnected: false,
      publicAddress: null,
    });
  },
  connectWallet: async (address: string) => {
    set({
      isConnected: true,
      publicAddress: address,
    });
  },
}));
