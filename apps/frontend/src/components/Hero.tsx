import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="text-center py-20" data-aos="fade-up">
      <img src="/hero.png" alt={t('hero.imageAlt')} className="mx-auto mb-8 max-w-md" />
      <h1 className="text-3xl sm:text-5xl font-bold mb-6 max-w-4xl mx-auto">{t('hero.title')}</h1>
      <p className="max-w-3xl mx-auto mb-8 text-lg text-gray-600">{t('hero.subtitle')}</p>
      <div className="flex justify-center gap-4">
        <a href="#" className="bg-indigo-600 text-white px-6 py-3 rounded">{t('hero.ctaPrimary')}</a>
        <a href="#" className="bg-gray-200 text-gray-900 px-6 py-3 rounded">{t('hero.ctaSecondary')}</a>
      </div>
    </section>
  );
}
