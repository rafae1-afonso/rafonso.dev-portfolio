import { createContext, useContext } from 'react'
import type Lenis from 'lenis'

export interface LenisContextType {
  lenis: Lenis | null
}

const LenisContext = createContext<LenisContextType | undefined>(undefined)

export const useLenis = () => {
  const context = useContext(LenisContext)
  if (!context) {
    throw new Error('useLenis must be used within a LenisProvider')
  }
  return context
}

export const LenisProvider = LenisContext.Provider
