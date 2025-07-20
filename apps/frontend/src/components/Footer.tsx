import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('common');
  return (
    <footer className="bg-gray-900 text-gray-300 mt-24" data-aos="fade-up">
      <div className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-2">{t('footer.legal.title')}</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">{t('footer.legal.terms')}</a></li>
            <li><a href="#" className="hover:underline">{t('footer.legal.privacy')}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">{t('footer.links.title')}</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">{t('footer.links.support')}</a></li>
            <li><a href="#" className="hover:underline">{t('footer.links.docs')}</a></li>
            <li><a href="#" className="hover:underline">{t('footer.links.blog')}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">{t('footer.social.title')}</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">{t('footer.social.twitter')}</a></li>
            <li><a href="#" className="hover:underline">{t('footer.social.linkedin')}</a></li>
            <li><a href="#" className="hover:underline">{t('footer.social.facebook')}</a></li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs pb-4">{t('footer.copyright')}</p>
    </footer>
  );
}
