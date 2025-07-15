import { useTranslation } from 'react-i18next';

export default function Pricing() {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-50 py-16" id="pricing" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-center mb-8">{t('pricing.title')}</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        <div className="border rounded-lg p-6 text-center flex flex-col">
          <h3 className="font-semibold mb-2">{t('pricing.free.label')}</h3>
          <p className="mb-4">{t('pricing.free.desc')}</p>
          <p className="text-3xl font-bold mb-6">{t('pricing.free.price')}</p>
          <ul className="flex-1 space-y-1">
            <li>{t('pricing.free.feature1')}</li>
          </ul>
          <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded">{t('pricing.free.cta')}</button>
        </div>
        <div className="border rounded-lg p-6 text-center flex flex-col">
          <h3 className="font-semibold mb-2">{t('pricing.starter.label')}</h3>
          <p className="mb-4">{t('pricing.starter.desc')}</p>
          <p className="text-3xl font-bold mb-6">{t('pricing.starter.price')}</p>
          <ul className="flex-1 space-y-1">
            <li>{t('pricing.starter.feature1')}</li>
            <li>{t('pricing.starter.feature2')}</li>
          </ul>
          <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded">{t('pricing.starter.cta')}</button>
        </div>
        <div className="border rounded-lg p-6 text-center flex flex-col">
          <h3 className="font-semibold mb-2">{t('pricing.pro.label')}</h3>
          <p className="mb-4">{t('pricing.pro.desc')}</p>
          <p className="text-3xl font-bold mb-6">{t('pricing.pro.price')}</p>
          <ul className="flex-1 space-y-1">
            <li>{t('pricing.pro.feature1')}</li>
            <li>{t('pricing.pro.feature2')}</li>
          </ul>
          <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded">{t('pricing.pro.cta')}</button>
        </div>
      </div>
    </section>
  );
}
