import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation('home');
  return (
    <section className="py-16" id="features" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-center mb-8">{t('features.title')}</h2>
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
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
  );
}
