import { ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Background from './Background';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const { i18n } = useTranslation('common');

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
        <div
      className={
        (i18n.language === 'ar'
          ? 'font-arabic'
          : i18n.language === 'tf'
          ? 'font-tifinagh'
          : 'font-sans') +
" bg-[url('/background.png')] bg-cover bg-fixed text-white"      }
    >
      <Background />
      {children}
    </div>
  );
}
