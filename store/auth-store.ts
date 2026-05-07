'use client'

import { create } from 'zustand'

interface AuthState {
  isLoggedIn: boolean
  toggleLogin: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  toggleLogin: () =>
    set((state) => ({
      isLoggedIn: !state.isLoggedIn
    }))
}))
