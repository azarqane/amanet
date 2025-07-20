import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';

export default function Signup() {
  const [role, setRole] = useState<'institution' | 'learner' | null>(null);
  const [step, setStep] = useState(1);

  return (
    <AppLayout>
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <Head>
          <title>Sign Up</title>
        </Head>
        <div className="max-w-md w-full space-y-6 bg-black/40 p-8 rounded-lg backdrop-blur-md">
          {step === 1 && (
            <div className="space-y-6 text-center">
              <h1 className="text-3xl font-bold">Create your account</h1>
              <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                <button
                  className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded"
                  onClick={() => {
                    setRole('institution');
                    setStep(2);
                  }}
                >
                  Institution
                </button>
                <button
                  className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded"
                  onClick={() => {
                    setRole('learner');
                    setStep(2);
                  }}
                >
                  Learner
                </button>
              </div>
              <p className="text-sm">
                Already have an account?{' '}
                <Link href="/login" className="underline text-indigo-300">
                  Log in
                </Link>
              </p>
            </div>
          )}

          {step === 2 && role && (
            <form className="space-y-4">
              <h1 className="text-2xl font-semibold text-center">
                Sign up as {role === 'institution' ? 'Institution' : 'Learner'}
              </h1>
              {role === 'institution' && (
                <input
                  type="text"
                  placeholder="Institution name"
                  className="w-full px-3 py-2 rounded text-gray-900"
                />
              )}
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 rounded text-gray-900"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 rounded text-gray-900"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 rounded text-gray-900"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
              >
                Create account
              </button>
              <button
                type="button"
                className="w-full text-sm underline text-indigo-200"
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <p className="text-sm text-center">
                Already have an account?{' '}
                <Link href="/login" className="underline text-indigo-300">
                  Log in
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
