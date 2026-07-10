// STREAMING_CHUNK: Configuring Zustand persisted store hooks...
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
  id: number;
  email: string;
  role: string;
  tenant_name: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  companyCode: string | null;
  setAuth: (token: string, user: User, companyCode: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      companyCode: null,
      setAuth: (token, user, companyCode) => set({ token, user, companyCode }),
      clearAuth: () => set({ token: null, user: null, companyCode: null }),
    }),
    {
      name: 'snapwage-auth-storage', // Key used inside LocalStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);