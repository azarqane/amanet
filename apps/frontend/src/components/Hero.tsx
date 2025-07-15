import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative h-screen font-sans">
      <img
        src="/hero.png"
        alt={t('hero.imageAlt')}
        className="absolute top-16 w-full h-full object-contain"
      />
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8">
          {t('hero.subtitle')}
        </p>
        <div className="space-x-4">
          <button className="rounded-full bg-blue-600 hover:bg-blue-700 px-8 py-4 text-white text-lg md:text-xl">
            {t('hero.ctaPrimary')}
          </button>
          <button className="rounded-full border border-white px-8 py-4 text-white text-lg md:text-xl hover:bg-blue-700">
            {t('hero.ctaSecondary')}
          </button>
        </div>
      </div>
    </section>
  );
}
