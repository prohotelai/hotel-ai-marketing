// Isolated Marketing Layer – No Core Access
// i18next configuration for multi-language support

import i18n from 'i18next';

// Supported languages configuration
export const supportedLanguages = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'fr', name: 'Français', dir: 'ltr' },
  { code: 'de', name: 'Deutsch', dir: 'ltr' },
  { code: 'es', name: 'Español', dir: 'ltr' },
  { code: 'it', name: 'Italiano', dir: 'ltr' },
  { code: 'ru', name: 'Русский', dir: 'ltr' },
  { code: 'tr', name: 'Türkçe', dir: 'ltr' },
  { code: 'zh', name: '中文', dir: 'ltr' },
] as const;

export const defaultLanguage = 'en';

export const rtlLanguages = ['ar', 'he', 'fa', 'ur'];

export const getLanguageDirection = (lang: string): 'ltr' | 'rtl' => {
  return rtlLanguages.includes(lang) ? 'rtl' : 'ltr';
};

// Namespaces for translation files
export const namespaces = ['common', 'marketing', 'hotel', 'pricing'] as const;

export default i18n;
