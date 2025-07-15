import { BookOpenIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="relative z-10 flex justify-between items-center max-w-7xl mx-auto px-6 py-6 text-white text-lg">
      <div className="flex items-center space-x-2">
        <BookOpenIcon className="h-8 w-8 text-white" />
        <span className="font-semibold text-xl">Amanet</span>
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
  );
}
