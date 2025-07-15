import { BookOpenIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { useEffect, useState, type ChangeEvent } from 'react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav
      className={`sticky top-0 z-20 w-full text-white text-lg backdrop-blur ${scrolled ? 'bg-black/40' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6">
        <div className="flex items-center space-x-2">
          <BookOpenIcon className="h-8 w-8 text-white" />
          <span className="font-semibold text-xl">{t('siteTitle')}</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
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

        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen((o) => !o)}>
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 flex flex-col">
          <a href="#features" className="hover:text-indigo-200">
            {t('nav.features')}
          </a>
          <a href="#pricing" className="hover:text-indigo-200">
            {t('nav.pricing')}
          </a>
          <a href="#about" className="hover:text-indigo-200">
            {t('nav.about')}
          </a>
          <button>{t('nav.login')}</button>
          <button className="rounded-full bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white">
            {t('nav.signup')}
          </button>
          <select
            value={i18n.language}
            onChange={changeLanguage}
            className="bg-transparent text-white border border-white rounded px-2 py-1"
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>
        </div>
      )}
    </nav>
  );
}
