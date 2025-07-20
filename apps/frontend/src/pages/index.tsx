import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Who from '../components/Who';
import Features from '../components/Features';
import Disciplines from '../components/Disciplines';
import Why from '../components/Why';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function Home() {
  const { t, i18n } = useTranslation('home');
  const lang = i18n.language || 'fr';

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Head>
        <title>{t('pageTitle')}</title>
        <meta name="description" content={t('pageDescription')} />
      </Head>
      <main className="space-y-24">
        <Navbar />
        <Hero />
        <Who />
        <Features />
        <Disciplines />
        <Why />
        <Testimonials />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}
