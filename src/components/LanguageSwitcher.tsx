'use client';

// Isolated Marketing Layer – No Core Access
// Language switcher component

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from './I18nProvider';
import { supportedLanguages } from '@/lib/i18n';

export function LanguageSwitcher() {
  const { t } = useTranslation('common');
  const { currentLanguage, setLanguage, isRtl } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLangData = supportedLanguages.find(l => l.code === currentLanguage);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={t('language.select')}
        aria-expanded={isOpen}
      >
        <span className="text-lg">{getFlagEmoji(currentLanguage)}</span>
        <span className="hidden sm:inline">{currentLangData?.name || currentLanguage}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute z-50 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 ${
            isRtl ? 'left-0' : 'right-0'
          }`}
        >
          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase">
            {t('language.select')}
          </div>
          {supportedLanguages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-100 ${
                currentLanguage === lang.code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{getFlagEmoji(lang.code)}</span>
              <span>{lang.name}</span>
              {currentLanguage === lang.code && (
                <svg className={`w-4 h-4 ${isRtl ? 'mr-auto' : 'ml-auto'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Helper to get flag emoji from language code
function getFlagEmoji(langCode: string): string {
  const flagMap: Record<string, string> = {
    en: '🇬🇧',
    ar: '🇸🇦',
    fr: '🇫🇷',
    de: '🇩🇪',
    es: '🇪🇸',
    it: '🇮🇹',
    ru: '🇷🇺',
    tr: '🇹🇷',
    zh: '🇨🇳',
  };
  return flagMap[langCode] || '🌐';
}
