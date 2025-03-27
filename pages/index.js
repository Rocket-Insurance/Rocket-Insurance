import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Rocket Insurance</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-200 text-gray-800">
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-800">🚀 Rocket Insurance</h1>
          <nav className="space-x-6 text-blue-700 font-medium">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#partners">Partners</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main className="text-center py-20 px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Reach New Heights with Rocket Insurance 🚀
          </h2>
          <p className="text-lg text-blue-800 mb-8">
            Personal and commercial insurance that’s out of this world. Let’s make your coverage easy, affordable, and stress-free.
          </p>
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition-all">
            Get a Quote
          </a>
        </main>

        <section id="about" className="bg-white py-16 px-8 text-center">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">About Rocket Insurance</h3>
          <p className="max-w-2xl mx-auto">
            Rocket Insurance is Latina-owned and proudly Canadian. We're on a mission to simplify insurance for everyone—bringing heart and hustle to the insurance world.
          </p>
        </section>

        <section id="services" className="py-16 px-8 text-center bg-blue-50">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>✔️ Auto Insurance</li>
            <li>✔️ Home Insurance</li>
            <li>✔️ Commercial Insurance</li>
            <li>✔️ Life Insurance</li>
          </ul>
        </section>

        <section id="partners" className="py-16 px-8 text-center">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">Our Partners</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            <span>Aviva</span>
            <span>Travelers</span>
            <span>Intact</span>
            <span>Wawanesa</span>
            <span>Economical</span>
            <span>CAA</span>
          </div>
        </section>

        <section id="careers" className="bg-blue-50 py-16 px-8 text-center">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Careers</h3>
          <p>
            Want to join the Rocket fam? We’re always looking for passionate, driven people ready to make a difference. 💼✨
          </p>
          <a href="#contact" className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
            Apply Now
          </a>
        </section>

        <section id="contact" className="py-16 px-8 text-center">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Contact Us</h3>
          <p>Email: <a href="mailto:info@rocket-insurance.ca" className="text-blue-600">info@rocket-insurance.ca</a></p>
          <p>Phone: <a href="tel:+14165555555" className="text-blue-600">(416) 555-5555</a></p>
          <p>Location: Brampton, Ontario</p>
        </section>

        <footer className="text-center py-6 bg-white text-sm text-gray-600">
          © {new Date().getFullYear()} Rocket Insurance. All rights reserved.
        </footer>
      </div>
    </React.Fragment>
  );
}
