import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans">
      <Head>
        <title>Rocket Insurance</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="bg-white shadow-md py-6 px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          <h1 className="text-xl font-bold text-blue-800">Rocket Insurance</h1>
        </div>
        <nav className="space-x-6 text-blue-700 font-medium text-sm">
          <a href="#about" className="hover:text-purple-600">About</a>
          <a href="#services" className="hover:text-purple-600">Services</a>
          <a href="#partners" className="hover:text-purple-600">Partners</a>
          <a href="#careers" className="hover:text-purple-600">Careers</a>
          <a href="#contact" className="hover:text-purple-600">Contact</a>
        </nav>
      </header>

      <main className="text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight">
          Reach New Heights with <span className="text-purple-600">Rocket Insurance</span> 🚀
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
          Personal and commercial insurance that’s out of this world. Let’s make your coverage easy, affordable, and stress-free.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-base font-semibold transition shadow-md">
          Get a Quote
        </button>
      </main>

      <section id="about" className="bg-blue-100 py-16 px-6 text-center">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">About Rocket Insurance</h3>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Founded with the mission to simplify insurance for everyone, Rocket Insurance is Latina-owned and proudly Canadian. With strong roots in the community and a passion for helping people protect what matters, we’re bringing heart and hustle to the insurance world.
        </p>
      </section>
    </div>
  );
}
