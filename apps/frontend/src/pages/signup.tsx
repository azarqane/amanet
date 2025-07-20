import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';
import { useTranslation } from 'react-i18next';

export default function Signup() {
  const [role, setRole] = useState<'institution' | 'learner' | null>(null);
  const [step, setStep] = useState(1);
  const { t } = useTranslation('signup');

  return (
    <AppLayout>
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <Head>
          <title>{t('auth.createAccountTitle')}</title>
        </Head>
        <div className="max-w-md w-full space-y-6 bg-black/40 p-8 rounded-lg backdrop-blur-md">
          {step === 1 && (
            <div className="space-y-6 text-center">
              <h1 className="text-3xl font-bold">{t('auth.createAccountTitle')}</h1>
              <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                <button
                  className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded"
                  onClick={() => {
                    setRole('institution');
                    setStep(2);
                  }}
                >
                  {t('auth.institution')}
                </button>
                <button
                  className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded"
                  onClick={() => {
                    setRole('learner');
                    setStep(2);
                  }}
                >
                  {t('auth.learner')}
                </button>
              </div>
              <p className="text-sm">
                {t('auth.alreadyAccount')} {' '}
                <Link href="/login" className="underline text-indigo-300">
                  {t('auth.login')}
                </Link>
              </p>
            </div>
          )}

          {step === 2 && role && (
            <form className="space-y-4">
              <h1 className="text-2xl font-semibold text-center">
                {t('auth.signUpAs', {
                  role: role === 'institution' ? t('auth.institution') : t('auth.learner'),
                })}
              </h1>
              {role === 'institution' && (
                <input
                  type="text"
                  placeholder={t('auth.institutionName')}
                  className="w-full px-3 py-2 rounded text-gray-900"
                />
              )}
              <input
                type="text"
                placeholder={t('auth.name')}
                className="w-full px-3 py-2 rounded text-gray-900"
              />
              <input
                type="email"
                placeholder={t('auth.email')}
                className="w-full px-3 py-2 rounded text-gray-900"
              />
              <input
                type="password"
                placeholder={t('auth.password')}
                className="w-full px-3 py-2 rounded text-gray-900"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
              >
                {t('auth.register')}
              </button>
              <button
                type="button"
                className="w-full text-sm underline text-indigo-200"
                onClick={() => setStep(1)}
              >
                {t('auth.back')}
              </button>
              <p className="text-sm text-center">
                {t('auth.alreadyAccount')} {' '}
                <Link href="/login" className="underline text-indigo-300">
                  {t('auth.login')}
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
