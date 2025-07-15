import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="max-w-4xl mx-auto px-4" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-center mb-8">{t('contact.title')}</h2>
      <form className="grid gap-4">
        <input type="text" placeholder={t('contact.name')} className="border p-2 rounded" required />
        <input type="email" placeholder={t('contact.email')} className="border p-2 rounded" required />
        <textarea placeholder={t('contact.message')} className="border p-2 rounded" rows={4} required></textarea>
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded w-max mx-auto">{t('contact.submit')}</button>
      </form>
    </section>
  );
}
