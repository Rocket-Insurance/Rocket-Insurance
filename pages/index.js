import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 text-gray-800 font-sans">
      <Head>
        <title>Rocket Insurance</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <header className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🚀</span>
            <h1 className="text-3xl font-bold text-blue-800 tracking-tight">Rocket Insurance</h1>
          </div>
          <nav className="space-x-6 text-blue-700 font-semibold">
            <a href="#about" className="hover:text-purple-700">About</a>
            <a href="#services" className="hover:text-purple-700">Services</a>
            <a href="#partners" className="hover:text-purple-700">Partners</a>
            <a href="#careers" className="hover:text-purple-700">Careers</a>
            <a href="#contact" className="hover:text-purple-700">Contact</a>
          </nav>
        </header>

        <main className="text-center">
          <h2 className="text-5xl font-bold text-blue-900 mb-4 leading-tight">
            Reach New Heights with <span className="text-purple-600">Rocket Insurance</span> 🚀
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Personal and commercial coverage that’s sleek, simple, and totally stress-free.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transition transform shadow-lg">
            ✨ Get a Quote
          </button>
        </main>
      </div>
    </div>
  );
}
