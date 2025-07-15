import { AcademicCapIcon, UserGroupIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

export default function Who() {
  const { t } = useTranslation();
  return (
    <section className="max-w-6xl mx-auto px-4" data-aos="fade-up" id="about">
      <h2 className="text-2xl font-bold text-center mb-8">{t('who.title')}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg text-center flex flex-col items-center">
          <BuildingLibraryIcon className="h-10 w-10 text-indigo-600 mb-4" />
          <h3 className="font-semibold mb-2">{t('who.schools.title')}</h3>
          <p>{t('who.schools.desc')}</p>
        </div>
        <div className="p-6 border rounded-lg text-center flex flex-col items-center">
          <UserGroupIcon className="h-10 w-10 text-indigo-600 mb-4" />
          <h3 className="font-semibold mb-2">{t('who.teachers.title')}</h3>
          <p>{t('who.teachers.desc')}</p>
        </div>
        <div className="p-6 border rounded-lg text-center flex flex-col items-center">
          <AcademicCapIcon className="h-10 w-10 text-indigo-600 mb-4" />
          <h3 className="font-semibold mb-2">{t('who.learners.title')}</h3>
          <p>{t('who.learners.desc')}</p>
        </div>
      </div>
    </section>
  );
}
