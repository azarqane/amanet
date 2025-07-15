import { BookOpenIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="relative h-screen font-sans">
      <img
        src="/hero.png"
        alt="Woman learning online"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-indigo-700/60 to-teal-500/50" />

      <nav className="relative z-10 flex justify-between items-center max-w-7xl mx-auto px-6 py-4 text-white">
        <div className="flex items-center space-x-2">
          <BookOpenIcon className="h-6 w-6 text-white" />
          <span className="font-semibold text-lg">Amanet</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#features" className="hover:text-indigo-200">Features</a>
          <a href="#pricing" className="hover:text-indigo-200">Pricing</a>
          <a href="#about" className="hover:text-indigo-200">About</a>
          <button className="ml-4">Log in</button>
          <button className="ml-4 rounded-full bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white">
            Sign up
          </button>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Empower Your
          <br />
          Learning
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8">
          Take your skills to the next level
          <br />
          with our online courses.
        </p>
        <button className="rounded-full bg-blue-600 hover:bg-blue-700 px-8 py-4 text-white text-lg md:text-xl">
          Get Started
        </button>
      </div>
    </section>
  );
}
