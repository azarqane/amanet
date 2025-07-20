import { useState, type FormEvent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AppLayout from '../../components/AppLayout';
import { useTranslation } from 'react-i18next';
import { supabase } from '../../utils/supabaseClient';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function Login() {
  const { t } = useTranslation('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setErrorMsg(error.message);

      return;
    }
    window.location.href = '/';
  };

  return (
    <AppLayout>
      <div className="min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center text-gray-100">
        <Head>
          <title>{t('auth.login')}</title>
        </Head>
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-5 bg-black/50 backdrop-blur-md p-8 rounded-xl shadow-xl">
          <h1 className="text-3xl font-bold text-center">{t('auth.login')}</h1>
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
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPwd ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={() => setShowPwd(!showPwd)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-200"
                tabIndex={-1}
              >
                {showPwd ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>
          {errorMsg && <p className="text-sm text-center text-red-400">{errorMsg}</p>}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center space-x-2 py-3 rounded-lg text-white ${loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
          >
            {loading && <span className="loader-border loader-border-white animate-spin rounded-full w-5 h-5" />}
            <span>{t('auth.login')}</span>
          </button>
          <p className="text-sm text-center">
            <Link href="/auth/signup" className="underline text-indigo-300 hover:text-indigo-100">
              {t('auth.register')}
            </Link>
          </p>
        </form>
      </div>
    </AppLayout>
  );
}
