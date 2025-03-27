import Head from 'next/head';
// import { Rocket } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-200">
      <Head>
        <title>Rocket Insurance</title>
      </Head>
      <header className="bg-white shadow-md py-6 px-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-blue-600 text-xl font-bold">🚀</span>
          <h1 className="text-2xl font-bold text-blue-800">Rocket Insurance</h1>
        </div>
        <nav className="space-x-6 text-blue-700 font-medium">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#partners">Partners</a>
          <a href="#careers">Careers</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main className="text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Reach New Heights with Rocket Insurance 🚀
        </h2>
        <p className="text-lg text-blue-700 max-w-xl mx-auto mb-10">
          Personal and commercial insurance that’s out of this world.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-full">
          Get a Quote
        </button>
      </main>
    </div>
  );
}
🚀 First deploy for Rocket Insurance
// Trigger redeploy
// Trigger Vercel to deploy again
