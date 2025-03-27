import Head from 'next/head'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function RocketInsuranceWebsite() {
  const logos = [
    "Aviva",
    "Travelers",
    "Intact",
    "CAA",
    "Pembridge",
    "Wawanesa",
    "Economical",
    "Northbridge",
    "Dominion of Canada"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-200">
      <Head>
        <title>Rocket Insurance</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700&display=swap" rel="stylesheet" />
      </Head>

      <header className="bg-white shadow-md py-6 px-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Rocket className="text-blue-600" size={28} />
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-blue-900"
        >
          Reach New Heights with Rocket Insurance 🚀
        </motion.h2>
        <p className="mt-4 text-lg text-blue-700 max-w-xl mx-auto">
          Personal and commercial insurance that’s out of this world. Let’s make your coverage easy, affordable, and stress-free.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button className="bg-blue-600 text-white">Get a Quote</Button>
          <Button variant="outline">Apply Now</Button>
        </div>
      </main>

      <section id="about" className="px-8 py-16 bg-white text-center">
        <h3 className="text-2xl font-bold text-blue-800">About Rocket Insurance</h3>
        <p className="text-blue-700 max-w-2xl mx-auto mt-4">
          Founded with the mission to simplify insurance for everyone, Rocket Insurance is Latina-owned and proudly Canadian.
          With strong roots in the community and a passion for helping people protect what matters, we’re bringing heart and hustle to the insurance world.
        </p>
      </section>

      <section id="partners" className="px-8 py-16 bg-gradient-to-b from-blue-100 to-white text-center">
        <h3 className="text-2xl font-bold text-blue-800">Our Partners</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
          {logos.map((logo) => (
            <Card key={logo} className="shadow-sm">
              <CardContent className="py-4 font-medium text-blue-700">{logo}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="px-8 py-16 bg-white text-center">
        <h3 className="text-2xl font-bold text-blue-800">Contact Us</h3>
        <p className="text-blue-700 mt-2">
          Reach out at <a className="text-blue-500 underline" href="mailto:info@rocket-insurance.ca">info@rocket-insurance.ca</a>
        </p>
      </section>
    </div>
  );
}
