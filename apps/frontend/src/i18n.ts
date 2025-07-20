import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from './locales/en/common.json';
import frCommon from './locales/fr/common.json';
import arCommon from './locales/ar/common.json';
import enHome from './locales/en/home.json';
import frHome from './locales/fr/home.json';
import arHome from './locales/ar/home.json';
import enSignup from './locales/en/signup.json';
import frSignup from './locales/fr/signup.json';
import arSignup from './locales/ar/signup.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon, home: enHome, signup: enSignup },
      fr: { common: frCommon, home: frHome, signup: frSignup },
      ar: { common: arCommon, home: arHome, signup: arSignup },
    },
    ns: ['common', 'home', 'signup'],
    defaultNS: 'common',
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
