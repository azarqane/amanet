import Head from 'next/head';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Bars3Icon, XMarkIcon, AcademicCapIcon, UserGroupIcon, BuildingLibraryIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

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

      <main className="pt-32 space-y-32">
        {/* Hero Section */}
        <section className="text-center py-24 bg-background" data-aos="fade-up">
          <img src="/illustration.svg" alt={t('hero.imageAlt')} className="mx-auto mb-10 max-w-md" />
          <h1 className="text-3xl sm:text-5xl font-bold mb-8 max-w-4xl mx-auto">{t('hero.title')}</h1>
          <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-600">{t('hero.subtitle')}</p>
          <div className="flex justify-center gap-5">
            <a href="#" className="bg-primary text-white px-6 py-3 rounded">{t('hero.ctaPrimary')}</a>
            <a href="#" className="bg-muted text-gray-900 px-6 py-3 rounded">{t('hero.ctaSecondary')}</a>
          </div>
        </section>

        {/* Who Section */}
        <section className="max-w-6xl mx-auto px-4" data-aos="fade-up" id="about">
          <h2 className="text-2xl font-bold text-center mb-8">{t('who.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border rounded-lg text-center flex flex-col items-center">
              <BuildingLibraryIcon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{t('who.schools.title')}</h3>
              <p>{t('who.schools.desc')}</p>
            </div>
            <div className="p-8 border rounded-lg text-center flex flex-col items-center">
              <UserGroupIcon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{t('who.teachers.title')}</h3>
              <p>{t('who.teachers.desc')}</p>
            </div>
            <div className="p-8 border rounded-lg text-center flex flex-col items-center">
              <AcademicCapIcon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{t('who.learners.title')}</h3>
              <p>{t('who.learners.desc')}</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-background py-24" id="features" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-center mb-8">{t('features.title')}</h2>
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <h3 className="font-semibold text-lg mb-4">{t('features.schools.title')}</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>{t('features.schools.item1')}</li>
                  <li>{t('features.schools.item2')}</li>
                  <li>{t('features.schools.item3')}</li>
                  <li>{t('features.schools.item4')}</li>
                  <li>{t('features.schools.item5')}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">{t('features.teachers.title')}</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>{t('features.teachers.item1')}</li>
                  <li>{t('features.teachers.item2')}</li>
                  <li>{t('features.teachers.item3')}</li>
                  <li>{t('features.teachers.item4')}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">{t('features.learners.title')}</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>{t('features.learners.item1')}</li>
                  <li>{t('features.learners.item2')}</li>
                  <li>{t('features.learners.item3')}</li>
                  <li>{t('features.learners.item4')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Disciplines Section */}
        <section className="max-w-6xl mx-auto px-4" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-center mb-8">{t('disciplines.title')}</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 text-center text-sm">
            <div className="flex flex-col items-center"><span className="text-3xl">∑</span>{t('disciplines.math')}</div>
            <div className="flex flex-col items-center"><span className="text-3xl">⚛</span>{t('disciplines.science')}</div>
            <div className="flex flex-col items-center"><span className="text-3xl">🌐</span>{t('disciplines.languages')}</div>
            <div className="flex flex-col items-center"><span className="text-3xl">🏰</span>{t('disciplines.history')}</div>
            <div className="flex flex-col items-center"><span className="text-3xl">💻</span>{t('disciplines.computer')}</div>
            <div className="flex flex-col items-center"><span className="text-3xl">🎨</span>{t('disciplines.arts')}</div>
          </div>
          <p className="text-center mt-8 text-gray-600">{t('disciplines.tagline')}</p>
        </section>

        {/* Why Section */}
        <section className="bg-background py-24" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-center mb-8">{t('why.title')}</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-10 px-4 text-center">
            <div>
              <CheckCircleIcon className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-2">{t('why.flexibility.title')}</h3>
              <p>{t('why.flexibility.desc')}</p>
            </div>
            <div>
              <CheckCircleIcon className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-2">{t('why.ease.title')}</h3>
              <p>{t('why.ease.desc')}</p>
            </div>
            <div>
              <CheckCircleIcon className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-2">{t('why.security.title')}</h3>
              <p>{t('why.security.desc')}</p>
            </div>
            <div>
              <CheckCircleIcon className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-2">{t('why.scalability.title')}</h3>
              <p>{t('why.scalability.desc')}</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-6xl mx-auto px-4" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-center mb-8">{t('testimonials.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-8 shadow-sm">
              <p className="mb-2 italic">{t('testimonials.item1.quote')}</p>
              <p className="font-semibold">{t('testimonials.item1.author')}</p>
            </div>
            <div className="border rounded-lg p-8 shadow-sm">
              <p className="mb-2 italic">{t('testimonials.item2.quote')}</p>
              <p className="font-semibold">{t('testimonials.item2.author')}</p>
            </div>
            <div className="border rounded-lg p-8 shadow-sm">
              <p className="mb-2 italic">{t('testimonials.item3.quote')}</p>
              <p className="font-semibold">{t('testimonials.item3.author')}</p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-background py-24" id="pricing" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-center mb-8">{t('pricing.title')}</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
            <div className="border rounded-lg p-8 text-center flex flex-col">
              <h3 className="font-semibold mb-2">{t('pricing.free.label')}</h3>
              <p className="mb-4">{t('pricing.free.desc')}</p>
              <p className="text-3xl font-bold mb-6">{t('pricing.free.price')}</p>
              <ul className="flex-1 space-y-1">
                <li>{t('pricing.free.feature1')}</li>
              </ul>
              <button className="mt-6 bg-primary text-white px-4 py-2 rounded">{t('pricing.free.cta')}</button>
            </div>
            <div className="border rounded-lg p-8 text-center flex flex-col">
              <h3 className="font-semibold mb-2">{t('pricing.starter.label')}</h3>
              <p className="mb-4">{t('pricing.starter.desc')}</p>
              <p className="text-3xl font-bold mb-6">{t('pricing.starter.price')}</p>
              <ul className="flex-1 space-y-1">
                <li>{t('pricing.starter.feature1')}</li>
                <li>{t('pricing.starter.feature2')}</li>
              </ul>
              <button className="mt-6 bg-primary text-white px-4 py-2 rounded">{t('pricing.starter.cta')}</button>
            </div>
            <div className="border rounded-lg p-8 text-center flex flex-col">
              <h3 className="font-semibold mb-2">{t('pricing.pro.label')}</h3>
              <p className="mb-4">{t('pricing.pro.desc')}</p>
              <p className="text-3xl font-bold mb-6">{t('pricing.pro.price')}</p>
              <ul className="flex-1 space-y-1">
                <li>{t('pricing.pro.feature1')}</li>
                <li>{t('pricing.pro.feature2')}</li>
              </ul>
              <button className="mt-6 bg-primary text-white px-4 py-2 rounded">{t('pricing.pro.cta')}</button>
            </div>
          </div>
        </section>

        {/* Contact section placeholder */}
        <section id="contact" className="max-w-4xl mx-auto px-4" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-center mb-8">{t('contact.title')}</h2>
          <form className="grid gap-4">
            <input type="text" placeholder={t('contact.name')} className="border p-2 rounded" required />
            <input type="email" placeholder={t('contact.email')} className="border p-2 rounded" required />
            <textarea placeholder={t('contact.message')} className="border p-2 rounded" rows={4} required></textarea>
            <button type="submit" className="bg-primary text-white px-6 py-3 rounded w-max mx-auto">{t('contact.submit')}</button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-200 mt-32" data-aos="fade-up">
        <div className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-semibold mb-2">{t('footer.legal.title')}</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">{t('footer.legal.terms')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.legal.privacy')}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{t('footer.links.title')}</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">{t('footer.links.support')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.links.docs')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.links.blog')}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{t('footer.social.title')}</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">{t('footer.social.twitter')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.social.linkedin')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.social.facebook')}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{t('footer.contact.title')}</h3>
            <p className="text-sm">{t('footer.contact.email')}</p>
            <p className="text-sm">{t('footer.contact.phone')}</p>
          </div>
        </div>
        <p className="text-center text-xs pb-4">{t('footer.copyright')}</p>
      </footer>
    </div>
  );
}
