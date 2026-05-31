'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface LanguageContextType {
  language: 'en' | 'pt'
  setLanguage: (lang: 'en' | 'pt') => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<'en' | 'pt'>('en')
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as 'en' | 'pt'
    if (savedLang) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(savedLang)
    }
  }, [])

  const setLanguage = (lang: 'en' | 'pt') => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}