import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';
import ar from './locales/ar/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ar: { translation: ar },
    },
    lng:
      typeof window !== 'undefined'
        ? localStorage.getItem('lang') || 'fr'
        : 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

// Persist language changes in the browser
if (typeof window !== 'undefined') {
  i18n.on('languageChanged', (lng) => {
    localStorage.setItem('lang', lng);
  });
}

export default i18n;
