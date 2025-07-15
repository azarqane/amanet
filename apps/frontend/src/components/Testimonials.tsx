import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t } = useTranslation();
  return (
    <section className="max-w-6xl mx-auto px-4" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-center mb-8">{t('testimonials.title')}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6 shadow-sm">
          <p className="mb-2 italic">{t('testimonials.item1.quote')}</p>
          <p className="font-semibold">{t('testimonials.item1.author')}</p>
        </div>
        <div className="border rounded-lg p-6 shadow-sm">
          <p className="mb-2 italic">{t('testimonials.item2.quote')}</p>
          <p className="font-semibold">{t('testimonials.item2.author')}</p>
        </div>
        <div className="border rounded-lg p-6 shadow-sm">
          <p className="mb-2 italic">{t('testimonials.item3.quote')}</p>
          <p className="font-semibold">{t('testimonials.item3.author')}</p>
        </div>
      </div>
    </section>
  );
}
