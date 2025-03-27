import Head from "next/head";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function RocketInsuranceWebsite() {
  const logos = ["Aviva", "Travelers", "Intact", "CAA"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-200">
      <Head>
        <title>Rocket Insurance</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="bg-white shadow-md py-6 px-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Rocket className="text-blue-600" size={32} />
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
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Reach New Heights with Rocket Insurance 🚀
        </motion.h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Personal and commercial insurance that’s out of this world. Let’s make your coverage easy,
          affordable, and stress-free.
        </p>
        <div className="mt-8 space-x-4">
          <a href="#contact">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700">
              Get a Quote
            </button>
          </a>
          <a href="#apply">
            <button className="bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded-full shadow-md hover:bg-blue-50">
              Apply Now
            </button>
          </a>
        </div>
      </main>

      <section id="about" className="px-10 py-16 bg-blue-50">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">About Rocket Insurance</h3>
        <p className="text-gray-700 max-w-3xl">
          Founded with the mission to simplify insurance for everyone, Rocket Insurance is Latina-owned
          and proudly Canadian. With strong roots in the community and a passion for helping people protect
          what matters, we’re bringing heart and hustle to the insurance world.
        </p>
      </section>

      <section id="partners" className="px-10 py-16">
        <h3 className="text-2xl font-bold text-blue-800 mb-6">Our Partners</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="bg-white py-4 px-6 rounded-lg shadow text-blue-700 font-semibold text-center"
            >
              {logo}
            </div>
          ))}
        </div>
      </section>

      <section id="careers" className="px-10 py-16 bg-blue-100">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Careers</h3>
        <p className="text-gray-700 max-w-3xl">
          Join our mission-driven team of innovators who are passionate about transforming the insurance
          experience. If you’re ready to grow your career with a company that values culture, community,
          and creativity—Rocket Insurance wants to hear from you.
        </p>
      </section>

      <section id="contact" className="px-10 py-16">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Contact Us</h3>
        <p className="text-gray-700 max-w-3xl">
          Ready to chat about your coverage? Drop us a message and let’s get started. You can reach us at:
        </p>
        <ul className="mt-4 text-blue-700">
          <li>Email: contact@rocket-insurance.ca</li>
          <li>Phone: +1 (416) 555-1234</li>
        </ul>
      </section>

      <footer className="bg-white text-center py-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Rocket Insurance. All rights reserved.
      </footer>
    </div>
  );
}
