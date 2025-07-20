import { useTranslation } from 'react-i18next';

export default function Disciplines() {
  const { t } = useTranslation('home');
  return (
    <section className="max-w-6xl mx-auto px-4" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-center mb-8">{t('disciplines.title')}</h2>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 text-center text-sm">
        <div className="flex flex-col items-center"><span className="text-3xl">∑</span>{t('disciplines.math')}</div>
        <div className="flex flex-col items-center"><span className="text-3xl">⚛</span>{t('disciplines.science')}</div>
        <div className="flex flex-col items-center"><span className="text-3xl">🌐</span>{t('disciplines.languages')}</div>
        <div className="flex flex-col items-center"><span className="text-3xl">🏰</span>{t('disciplines.history')}</div>
        <div className="flex flex-col items-center"><span className="text-3xl">💻</span>{t('disciplines.computer')}</div>
        <div className="flex flex-col items-center"><span className="text-3xl">🎨</span>{t('disciplines.arts')}</div>
      </div>
      <p className="text-center mt-6 text-gray-600">{t('disciplines.tagline')}</p>
    </section>
  );
}
