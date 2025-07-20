import { BookOpenIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useEffect, useState, type ChangeEvent } from 'react';

export default function Navbar() {
  const { t, i18n } = useTranslation('common');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
    setMenuOpen(false);
  };

  const menuItems = [
    { key: 'features', label: t('nav.features'), href: '#features' },
    { key: 'pricing',  label: t('nav.pricing'),  href: '#pricing'  },
    { key: 'about',    label: t('nav.about'),    href: '#about'    },
  ];

  const handleItemClick = () => setMenuOpen(false);

  return (
    <nav
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
      className={`sticky top-0 z-20 w-full text-white text-lg backdrop-blur ${
        scrolled ? 'bg-black/40' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6">
        {/* Logo */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <BookOpenIcon className="h-8 w-8" />
          <span className="font-semibold text-xl">{t('siteTitle')}</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          {menuItems.map((item) => (
            <a key={item.key} href={item.href} className="hover:text-indigo-200">
              {item.label}
            </a>
          ))}
          <button className="rounded-full border border-blue-600 px-4 py-2">
            {t('nav.login')}
          </button>
          <Link href="/signup" className="rounded-full bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white">
            {t('nav.signup')}
          </Link>
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

        {/* Mobile menu toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? t('nav.closeMenu') : t('nav.menuToggle')}
        >
          {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-2 px-6 pb-4 text-start">
          {menuItems.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                onClick={handleItemClick}
                className="block w-full px-3 py-2 hover:bg-gray-700 rounded"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={handleItemClick}
              className="w-full text-start rounded-full border border-blue-600 px-4 py-2"
            >
              {t('nav.login')}
            </button>
          </li>
          <li>
            <Link
              href="/signup"
              onClick={handleItemClick}
              className="w-full text-start rounded-full bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white"
            >
              {t('nav.signup')}
            </Link>
          </li>
          <li>
            <select
              value={i18n.language}
              onChange={changeLanguage}
              className="w-full bg-transparent text-white border border-white rounded px-2 py-1"
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>
          </li>
        </ul>
      )}
    </nav>
  );
}
