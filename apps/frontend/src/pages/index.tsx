import Head from 'next/head';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Bars3Icon, XMarkIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import Hero from '../components/Hero';
import Who from '../components/Who';
import Features from '../components/Features';
import Disciplines from '../components/Disciplines';
import Why from '../components/Why';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState(i18n.language || 'fr');

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Head>
        <title>{t('pageTitle')}</title>
        <meta name="description" content={t('pageDescription')} />
      </Head>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-surface shadow z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <AcademicCapIcon className="h-8 w-8 text-primary" />
            <span className="font-bold text-lg">{t('siteTitle')}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="hover:text-primary">{t('nav.features')}</a>
            <a href="#pricing" className="hover:text-primary">{t('nav.pricing')}</a>
            <a href="#about" className="hover:text-primary">{t('nav.about')}</a>
            <a href="#contact" className="hover:text-primary">{t('nav.contact')}</a>
            <select value={lang} onChange={e => { const val = e.target.value; setLang(val); i18n.changeLanguage(val); }} className="border rounded px-1 py-0.5">
              <option value="fr">FR</option>
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>
            <button className="text-sm px-3 py-1">{t('nav.login')}</button>
            <button className="bg-primary text-white px-3 py-1 rounded">{t('nav.signup')}</button>
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
            <a href="#features" className="hover:text-primary">{t('nav.features')}</a>
            <a href="#pricing" className="hover:text-primary">{t('nav.pricing')}</a>
            <a href="#about" className="hover:text-primary">{t('nav.about')}</a>
            <a href="#contact" className="hover:text-primary">{t('nav.contact')}</a>
            <select value={lang} onChange={e => { const val = e.target.value; setLang(val); i18n.changeLanguage(val); }} className="border rounded px-1 py-0.5 w-max">
              <option value="fr">FR</option>
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>
            <button className="text-sm px-3 py-1 text-left rtl:text-right">{t('nav.login')}</button>
            <button className="bg-primary text-white px-3 py-1 rounded w-max">{t('nav.signup')}</button>
          </div>
        )}
      </header>

      <main className="pt-20 space-y-24">
        <Hero />
        <Who />
        <Features />
        <Disciplines />
        <Why />
        <Testimonials />
        <Pricing />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
