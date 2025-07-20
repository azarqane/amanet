import { useState, type FormEvent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';
import { useTranslation } from 'react-i18next';
import { supabase } from '../utils/supabaseClient';

export default function Login() {
  const { t } = useTranslation('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) setErrorMsg(t('auth.errorInvalid'));
  };

  return (
    <AppLayout>
      <div className="min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center text-gray-100">
        <Head>
          <title>{t('auth.loginTitle')}</title>
        </Head>

        <form className="w-full max-w-md bg-black/50 backdrop-blur-md p-8 rounded-xl shadow-xl space-y-5" onSubmit={handleSubmit} noValidate>
          <h1 className="text-3xl font-bold text-center">{t('auth.loginTitle')}</h1>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm">{t('auth.email')}</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm">{t('auth.password')}</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {errorMsg && <p className="text-sm text-center text-red-400">{errorMsg}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white ${loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
          >
            {t('auth.login')}
          </button>

          <p className="text-sm text-center">
            {t('auth.noAccount')}{' '}
            <Link href="/auth/signup" className="underline text-indigo-300 hover:text-indigo-100">
              {t('auth.register')}
            </Link>
          </p>
        </form>
      </div>
    </AppLayout>
  );
}
