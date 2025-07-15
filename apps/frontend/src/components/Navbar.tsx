import { BookOpenIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import type { ChangeEvent } from 'react';

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="sticky top-0 z-20 flex justify-between items-center max-w-7xl mx-auto px-6 py-6 text-white text-lg backdrop-blur bg-black/40">
      <div className="flex items-center space-x-2">
        <BookOpenIcon className="h-8 w-8 text-white" />
        <span className="font-semibold text-xl">{t('siteTitle')}</span>
      </div>
      <div className="flex items-center space-x-6">
        <a href="#features" className="hover:text-indigo-200">
          {t('nav.features')}
        </a>
        <a href="#pricing" className="hover:text-indigo-200">
          {t('nav.pricing')}
        </a>
        <a href="#about" className="hover:text-indigo-200">
          {t('nav.about')}
        </a>
        <button className="ml-4">{t('nav.login')}</button>
        <button className="ml-4 rounded-full bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white">
          {t('nav.signup')}
        </button>
        <select
          value={i18n.language}
          onChange={changeLanguage}
          className="ml-4 bg-transparent text-white border border-white rounded px-2 py-1"
        >
          <option value="fr">FR</option>
          <option value="en">EN</option>
          <option value="ar">AR</option>
        </select>
      </div>
    </nav>
  );
}
