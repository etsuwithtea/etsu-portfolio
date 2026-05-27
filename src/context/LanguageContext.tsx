import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en.json';
import th from '../locales/th.json';

export type Language = 'en' | 'th';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultValue?: string) => string;
}

const translations: Record<Language, any> = { en, th };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // 1. Try saved language
    const saved = localStorage.getItem('portfolio_lang');
    if (saved === 'en' || saved === 'th') return saved;
    
    // 2. Try browser locale
    if (typeof navigator !== 'undefined') {
      const locale = navigator.language.toLowerCase();
      if (locale.startsWith('th')) return 'th';
    }
    
    // 3. Fallback to English
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Nested object lookup helper (e.g. "common.aboutMe")
  const t = (key: string, defaultValue?: string): string => {
    const keys = key.split('.');
    let current = translations[language];

    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        return defaultValue !== undefined ? defaultValue : key;
      }
    }

    if (typeof current === 'string') {
      return current;
    }

    return defaultValue !== undefined ? defaultValue : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
