import Head from 'next/head';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, AcademicCapIcon, UserGroupIcon, BuildingLibraryIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('FR');

  return (
    <div className={lang === 'AR' ? 'rtl' : ''}>
      <Head>
        <title>Plateforme E-learning Universelle</title>
        <meta name="description" content="Créez et partagez des cours dans toutes les disciplines" />
      </Head>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <AcademicCapIcon className="h-8 w-8 text-indigo-600" />
            <span className="font-bold text-lg">Amanet</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="hover:text-indigo-600">Fonctionnalités</a>
            <a href="#pricing" className="hover:text-indigo-600">Tarifs</a>
            <a href="#about" className="hover:text-indigo-600">À propos</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <select value={lang} onChange={e => setLang(e.target.value)} className="border rounded px-1 py-0.5">
              <option>FR</option>
              <option>EN</option>
              <option>AR</option>
            </select>
            <button className="text-sm px-3 py-1">Connexion</button>
            <button className="bg-indigo-600 text-white px-3 py-1 rounded">Essai gratuit</button>
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
            <a href="#features" className="hover:text-indigo-600">Fonctionnalités</a>
            <a href="#pricing" className="hover:text-indigo-600">Tarifs</a>
            <a href="#about" className="hover:text-indigo-600">À propos</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <select value={lang} onChange={e => setLang(e.target.value)} className="border rounded px-1 py-0.5 w-max">
              <option>FR</option>
              <option>EN</option>
              <option>AR</option>
            </select>
            <button className="text-sm px-3 py-1 text-left">Connexion</button>
            <button className="bg-indigo-600 text-white px-3 py-1 rounded w-max">Essai gratuit</button>
          </div>
        )}
      </header>

      <main className="pt-20 space-y-24">
        {/* Hero Section */}
        <section className="text-center py-20 bg-gray-50" data-aos="fade-up">
          <img src="/illustration.svg" alt="Mockup de l'interface" className="mx-auto mb-8 max-w-md" />
          <h1 className="text-3xl sm:text-5xl font-bold mb-6 max-w-4xl mx-auto">La plateforme e-learning qui s'adapte à tous vos besoins pédagogiques</h1>
          <p className="max-w-3xl mx-auto mb-8 text-lg text-gray-600">Pour les établissements d'enseignement, les enseignants individuels et les apprenants</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="bg-indigo-600 text-white px-6 py-3 rounded">Créer mon établissement</a>
            <a href="#" className="bg-gray-200 text-gray-900 px-6 py-3 rounded">Commencer gratuitement</a>
          </div>
        </section>

        {/* Who Section */}
        <section className="max-w-6xl mx-auto px-4" data-aos="fade-up" id="about">
          <h2 className="text-2xl font-bold text-center mb-8">Qui peut utiliser notre plateforme ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg text-center flex flex-col items-center">
              <BuildingLibraryIcon className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="font-semibold mb-2">Établissements d'enseignement</h3>
              <p>Écoles, universités et centres de formation</p>
            </div>
            <div className="p-6 border rounded-lg text-center flex flex-col items-center">
              <UserGroupIcon className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="font-semibold mb-2">Enseignants indépendants</h3>
              <p>Professeurs, formateurs et experts</p>
            </div>
            <div className="p-6 border rounded-lg text-center flex flex-col items-center">
              <AcademicCapIcon className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="font-semibold mb-2">Apprenants</h3>
              <p>Étudiants, professionnels, autodidactes</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-16" id="features" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-center mb-8">Fonctionnalités par type d'utilisateur</h2>
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Pour les établissements</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Création de cours privés</li>
                  <li>Gestion des classes et promotions</li>
                  <li>Création d'exercices et évaluations</li>
                  <li>Tableau de bord administratif</li>
                  <li>Suivi des performances des étudiants</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Pour les enseignants individuels</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Création de cours publics gratuits</li>
                  <li>Éditeur Markdown avec rendu stylisé</li>
                  <li>Partage communautaire</li>
                  <li>Statistiques d'engagement</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Pour les apprenants</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Accès aux cours de leur établissement</li>
                  <li>Découverte de cours publics gratuits</li>
                  <li>Suivi de progression personnalisé</li>
                  <li>Certificats et badges</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Disciplines Section */}
        <section className="max-w-6xl mx-auto px-4" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-center mb-8">Toutes les disciplines couvertes</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 text-center text-sm">
            <div className="flex flex-col items-center"><span className="text-3xl">∑</span>Mathématiques</div>
            <div className="flex flex-col items-center"><span className="text-3xl">⚛</span>Sciences</div>
            <div className="flex flex-col items-center"><span className="text-3xl">🌐</span>Langues</div>
            <div className="flex flex-col items-center"><span className="text-3xl">🏰</span>Histoire</div>
            <div className="flex flex-col items-center"><span className="text-3xl">💻</span>Informatique</div>
            <div className="flex flex-col items-center"><span className="text-3xl">🎨</span>Arts</div>
          </div>
          <p className="text-center mt-6 text-gray-600">Quel que soit votre domaine d'expertise</p>
        </section>

        {/* Why Section */}
        <section className="bg-gray-50 py-16" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-center mb-8">Pourquoi choisir notre plateforme ?</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 px-4 text-center">
            <div>
              <CheckCircleIcon className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Flexibilité</h3>
              <p>Établissements privés et cours publics gratuits</p>
            </div>
            <div>
              <CheckCircleIcon className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Facilité d'utilisation</h3>
              <p>Éditeur Markdown intuitif</p>
            </div>
            <div>
              <CheckCircleIcon className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Sécurité</h3>
              <p>Authentification robuste, données protégées</p>
            </div>
            <div>
              <CheckCircleIcon className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Évolutivité</h3>
              <p>De quelques étudiants à des milliers</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-6xl mx-auto px-4" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-center mb-8">Ils en parlent</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6 shadow-sm">
              <p className="mb-2 italic">"Grâce à cette plateforme, nous avons modernisé nos cours et suivi la progression de nos étudiants en temps réel."</p>
              <p className="font-semibold">Jean Dupont, Directeur d'université</p>
            </div>
            <div className="border rounded-lg p-6 shadow-sm">
              <p className="mb-2 italic">"J'ai pu partager mes connaissances avec des milliers d'apprenants facilement."</p>
              <p className="font-semibold">Sarah Martin, Enseignante indépendante</p>
            </div>
            <div className="border rounded-lg p-6 shadow-sm">
              <p className="mb-2 italic">"Les cours sont accessibles partout et les badges motivent vraiment !"</p>
              <p className="font-semibold">Karim Ali, Étudiant</p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-gray-50 py-16" id="pricing" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-center mb-8">Tarifs</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
            <div className="border rounded-lg p-6 text-center flex flex-col">
              <h3 className="font-semibold mb-2">Gratuit</h3>
              <p className="mb-4">Pour enseignants individuels</p>
              <p className="text-3xl font-bold mb-6">0€</p>
              <ul className="flex-1 space-y-1">
                <li>Cours publics illimités</li>
              </ul>
              <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded">Commencer</button>
            </div>
            <div className="border rounded-lg p-6 text-center flex flex-col">
              <h3 className="font-semibold mb-2">Établissement Starter</h3>
              <p className="mb-4">Pour petites écoles</p>
              <p className="text-3xl font-bold mb-6">49€/mois</p>
              <ul className="flex-1 space-y-1">
                <li>Jusqu'à 200 étudiants</li>
                <li>Cours privés illimités</li>
              </ul>
              <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded">S'abonner</button>
            </div>
            <div className="border rounded-lg p-6 text-center flex flex-col">
              <h3 className="font-semibold mb-2">Établissement Pro</h3>
              <p className="mb-4">Pour universités</p>
              <p className="text-3xl font-bold mb-6">199€/mois</p>
              <ul className="flex-1 space-y-1">
                <li>Étudiants illimités</li>
                <li>Fonctionnalités avancées</li>
              </ul>
              <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded">Contactez-nous</button>
            </div>
          </div>
        </section>

        {/* Contact section placeholder */}
        <section id="contact" className="max-w-4xl mx-auto px-4" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-center mb-8">Contact</h2>
          <form className="grid gap-4">
            <input type="text" placeholder="Nom" className="border p-2 rounded" required />
            <input type="email" placeholder="Email" className="border p-2 rounded" required />
            <textarea placeholder="Message" className="border p-2 rounded" rows={4} required></textarea>
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded w-max mx-auto">Envoyer</button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 mt-24" data-aos="fade-up">
        <div className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Légal</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">CGU</a></li>
              <li><a href="#" className="hover:underline">Politique de confidentialité</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Liens utiles</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">Documentation</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Réseaux sociaux</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-sm">email@example.com</p>
            <p className="text-sm">+33 1 23 45 67 89</p>
          </div>
        </div>
        <p className="text-center text-xs pb-4">© 2024 Amanet</p>
      </footer>
    </div>
  );
}
