import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const addStyles = () => {
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `;
      document.head.appendChild(style);
    };

    if (typeof window !== 'undefined') {
      addStyles();
    }

    return () => {
      const styles = document.head.querySelectorAll('style');
      styles.forEach((style) => {
        if (style.innerHTML.includes('@keyframes scroll')) {
          document.head.removeChild(style);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-200 text-gray-800 font-[Outfit]">
      <Head>
        <title>Rocket Insurance</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-800">🚀 Rocket Insurance</h1>
        <nav className="space-x-6 text-blue-700 font-medium">
          {['About', 'Services', 'Partners', 'Careers', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
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
          {['Auto Insurance', 'Home Insurance', 'Commercial Insurance', 'Life Insurance'].map(service => (
            <li key={service}>✔️ {service}</li>
          ))}
        </ul>
      </section>

      <section id="partners" className="py-16 px-8 text-center">
        <h3 className="text-2xl font-bold text-blue-800 mb-6">Our Partners</h3>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-[scroll_20s_linear_infinite] text-blue-700 space-x-10 text-lg">
            {['Aviva', 'Travelers', 'Intact', 'Wawanesa', 'Economical', 'CAA'].map(partner => (
              <span key={partner}>{partner}</span>
            ))}
          </div>
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
  );
}
