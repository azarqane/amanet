import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
        <div className="text-center md:text-left space-y-6 order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-2xl text-gray-200">{t('hero.subtitle')}</p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start">
            <button className="rounded-full bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white text-lg md:text-xl">
              {t('hero.ctaPrimary')}
            </button>
            <button className="rounded-full border border-white px-6 py-3 text-white text-lg md:text-xl">
              {t('hero.ctaSecondary')}
            </button>
          </div>
        </div>
        <img src="/hero.png" alt={t('hero.imageAlt')} className="order-1 md:order-2 w-full h-auto object-contain" />
      </div>
    </section>
  );
}
