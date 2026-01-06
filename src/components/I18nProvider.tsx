'use client';

// Isolated Marketing Layer – No Core Access
// i18n Provider component with language detection and RTL support

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { supportedLanguages, defaultLanguage, rtlLanguages, getLanguageDirection } from '@/lib/i18n';

// Language context for additional language utilities
interface LanguageContextType {
  currentLanguage: string;
  direction: 'ltr' | 'rtl';
  setLanguage: (lang: string) => void;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: defaultLanguage,
  direction: 'ltr',
  setLanguage: () => {},
  isRtl: false,
});

export const useLanguage = () => useContext(LanguageContext);

// Cookie utilities
const LOCALE_COOKIE_NAME = 'NEXT_LOCALE';

function setCookie(name: string, value: string, days: number = 365) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

// Detect user's preferred language
function detectLanguage(): string {
  if (typeof window === 'undefined') return defaultLanguage;

  // 1. Check URL param
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  if (urlLang && supportedLanguages.some(l => l.code === urlLang)) {
    return urlLang;
  }

  // 2. Check cookie
  const cookieLang = getCookie(LOCALE_COOKIE_NAME);
  if (cookieLang && supportedLanguages.some(l => l.code === cookieLang)) {
    return cookieLang;
  }

  // 3. Check browser language
  const browserLang = navigator.language.split('-')[0];
  if (supportedLanguages.some(l => l.code === browserLang)) {
    return browserLang;
  }

  // 4. Fallback to default
  return defaultLanguage;
}

// Dynamic import helper for translations
async function loadTranslations(lang: string) {
  const namespaces = ['common', 'marketing', 'hotel', 'pricing'];
  const translations: Record<string, Record<string, unknown>> = {};

  for (const ns of namespaces) {
    try {
      const response = await fetch(`/locales/${lang}/${ns}.json`);
      if (response.ok) {
        translations[ns] = await response.json();
      }
    } catch (error) {
      console.warn(`Failed to load ${lang}/${ns}.json:`, error);
    }
  }

  return translations;
}

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr');

  useEffect(() => {
    const initializeI18n = async () => {
      const detectedLang = detectLanguage();
      
      // Load all translations for detected language
      const translations = await loadTranslations(detectedLang);
      
      // Also load English as fallback
      const fallbackTranslations = detectedLang !== 'en' 
        ? await loadTranslations('en') 
        : translations;

      await i18n
        .use(initReactI18next)
        .init({
          lng: detectedLang,
          fallbackLng: 'en',
          ns: ['common', 'marketing', 'hotel', 'pricing'],
          defaultNS: 'common',
          interpolation: {
            escapeValue: false,
          },
          resources: {
            [detectedLang]: translations,
            ...(detectedLang !== 'en' && { en: fallbackTranslations }),
          },
        });

      setCurrentLanguage(detectedLang);
      setDirection(getLanguageDirection(detectedLang));
      setIsInitialized(true);

      // Update document direction
      document.documentElement.dir = getLanguageDirection(detectedLang);
      document.documentElement.lang = detectedLang;
    };

    initializeI18n();
  }, []);

  const setLanguage = async (lang: string) => {
    if (!supportedLanguages.some(l => l.code === lang)) return;

    // Load translations for the new language
    const translations = await loadTranslations(lang);
    
    // Add translations to i18n
    Object.entries(translations).forEach(([ns, resources]) => {
      i18n.addResourceBundle(lang, ns, resources, true, true);
    });

    // Change language
    await i18n.changeLanguage(lang);
    
    // Update state
    setCurrentLanguage(lang);
    setDirection(getLanguageDirection(lang));
    
    // Save to cookie
    setCookie(LOCALE_COOKIE_NAME, lang);

    // Update URL param
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url.toString());

    // Update document direction
    document.documentElement.dir = getLanguageDirection(lang);
    document.documentElement.lang = lang;
  };

  const contextValue: LanguageContextType = {
    currentLanguage,
    direction,
    setLanguage,
    isRtl: rtlLanguages.includes(currentLanguage),
  };

  if (!isInitialized) {
    // Show loading state while i18n initializes
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <I18nextProvider i18n={i18n}>
      <LanguageContext.Provider value={contextValue}>
        {children}
      </LanguageContext.Provider>
    </I18nextProvider>
  );
}
