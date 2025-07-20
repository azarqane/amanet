import { useState, type FormEvent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';
import { useTranslation } from 'react-i18next';
import { supabase } from '../utils/supabaseClient';
import { FiHome, FiUser, FiBook, FiEye, FiEyeOff } from 'react-icons/fi';

export default function Signup() {
  const [role, setRole] = useState<'institution' | 'learner' | null>(null);
  const [step, setStep] = useState(1);
  const [institutionName, setInstitutionName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation('signup');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role,
          name,
          institutionName: role === 'institution' ? institutionName : undefined,
        },
      },
    });
    setLoading(false);
    if (error) setMessage(error.message);
    else setMessage(t('auth.signupSuccess'));
  };

  const RoleCard = ({ value, icon, label }: { value: 'institution' | 'learner'; icon: JSX.Element; label: string }) => (
    <button
      onClick={() => { setRole(value); setStep(2); }}
      className={`
        flex-1 flex flex-col items-center p-6 rounded-lg border-2 
        ${role === value ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'}
        transition
      `}
      aria-pressed={role === value}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <AppLayout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-black text-gray-100">
        <Head>
          <title>{t('auth.createAccountTitle')}</title>
        </Head>
        <div className="w-full max-w-lg bg-black/50 backdrop-blur-md p-8 rounded-xl shadow-xl">
          
          {/* Progress bar */}
          <div className="flex items-center mb-6">
            {[1,2].map((s) => (
              <div key={s} className="flex-1">
                <div
                  className={`h-1 rounded-full ${step >= s ? 'bg-indigo-500' : 'bg-gray-700'}`}
                />
              </div>
            ))}
          </div>
          
          {step === 1 && (
            <div className="space-y-6 text-center">
              <h1 className="text-3xl font-bold">{t('auth.createAccountTitle')}</h1>
              <p className="text-sm opacity-80">{t('auth.chooseRoleHint')}</p>
              <div className="flex gap-4">
                <RoleCard value="institution" icon={<FiHome />} label={t('auth.institution')} />
                <RoleCard value="learner"    icon={<FiBook />} label={t('auth.learner')} />
              </div>
              <p className="text-sm">
                {t('auth.alreadyAccount')}{' '}
                <Link href="/login" className="underline text-indigo-300 hover:text-indigo-100">
                  {t('auth.login')}
                </Link>
              </p>
            </div>
          )}

          {step === 2 && role && (
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <h2 className="text-2xl font-semibold text-center">
                {t('auth.signUpAs', { role: role === 'institution' ? t('auth.institution') : t('auth.learner') })}
              </h2>

              {role === 'institution' && (
                <div>
                  <label className="block mb-1 text-sm">{t('auth.institutionName')}</label>
                  <input
                    type="text"
                    value={institutionName}
                    onChange={(e) => setInstitutionName(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              )}

              <div>
                <label className="block mb-1 text-sm">{t('auth.name')}</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">{t('auth.email')}</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">{t('auth.password')}</label>
                <div className="relative">
                  <input
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

              {message && (
                <p className="text-sm text-center text-red-400">{message}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`
                  w-full flex justify-center items-center space-x-2 py-3 rounded-lg text-white 
                  ${loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}
                `}
              >
                {loading && <span className="loader-border loader-border-white animate-spin rounded-full w-5 h-5"/>}
                <span>{t('auth.register')}</span>
              </button>

              <div className="flex justify-between items-center text-sm">
                <button
                  type="button"
                  onClick={() => { setStep(1); setMessage(''); }}
                  className="underline text-indigo-300 hover:text-indigo-100"
                >
                  ← {t('auth.back')}
                </button>
                <Link href="/login" className="underline text-indigo-300 hover:text-indigo-100">
                  {t('auth.alreadyAccount')}
                </Link>
              </div>
            </form>
          )}

        </div>
      </div>
    </AppLayout>
  );
}
