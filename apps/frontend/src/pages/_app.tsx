import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import '../i18n';
import AppLayout from '../components/AppLayout';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
