export default function Hero() {
  return (
    <section className="relative h-screen font-sans">
          <img
    src="/hero.png"
    alt="Woman learning online"
    className="absolute top-16 w-full h-full object-contain"
  />


      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left px-6 -mt-8 md:-mt-16">
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
