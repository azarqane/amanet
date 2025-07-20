import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

export default function Why() {
  const { t } = useTranslation('home');
  return (
    <section className="py-16" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-center mb-8">{t('why.title')}</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 px-4 text-center">
        <div>
          <CheckCircleIcon className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
          <h3 className="font-semibold mb-2">{t('why.flexibility.title')}</h3>
          <p>{t('why.flexibility.desc')}</p>
        </div>
        <div>
          <CheckCircleIcon className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
          <h3 className="font-semibold mb-2">{t('why.ease.title')}</h3>
          <p>{t('why.ease.desc')}</p>
        </div>
        <div>
          <CheckCircleIcon className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
          <h3 className="font-semibold mb-2">{t('why.security.title')}</h3>
          <p>{t('why.security.desc')}</p>
        </div>
        <div>
          <CheckCircleIcon className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
          <h3 className="font-semibold mb-2">{t('why.scalability.title')}</h3>
          <p>{t('why.scalability.desc')}</p>
        </div>
      </div>
    </section>
  );
}
