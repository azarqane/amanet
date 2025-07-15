import { BookOpenIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  return (
    <header className="fixed top-0 w-full z-20">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-6 text-white text-lg">
        <div className="flex items-center space-x-2">
          <BookOpenIcon className="h-8 w-8 text-white" />
          <span className="font-semibold text-xl">{t('siteTitle')}</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#features" className="hover:text-indigo-200">{t('nav.features')}</a>
          <a href="#pricing" className="hover:text-indigo-200">{t('nav.pricing')}</a>
          <a href="#about" className="hover:text-indigo-200">{t('nav.about')}</a>
          <select
            aria-label="Select language"
            className="ml-4 bg-transparent border border-white rounded px-2 py-1 text-white"
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="ar">العربية</option>
          </select>
          <button className="ml-4">{t('nav.login')}</button>
          <button className="ml-4 rounded-full bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white">
            {t('nav.signup')}
          </button>
        </div>
      </nav>
    </header>
  );
}
