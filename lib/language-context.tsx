'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { SupportedLanguage, Translation } from './translations/types'
import { translations } from './translations'

interface LanguageContextType {
  language: SupportedLanguage
  setLanguage: (language: SupportedLanguage) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguage>('en')

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('autodx-language') as SupportedLanguage
    if (savedLanguage && translations[savedLanguage]) {
      setLanguageState(savedLanguage)
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('nl')) setLanguageState('nl')
      else if (browserLang.startsWith('da')) setLanguageState('da')
      else if (browserLang.startsWith('de')) setLanguageState('de')
      else if (browserLang.startsWith('sv')) setLanguageState('sv')
      else if (browserLang.startsWith('no')) setLanguageState('no')
      else if (browserLang.startsWith('fr')) setLanguageState('fr')
      else setLanguageState('en')
    }
  }, [])

  const setLanguage = (newLanguage: SupportedLanguage) => {
    setLanguageState(newLanguage)
    localStorage.setItem('autodx-language', newLanguage)
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }
  return context
}