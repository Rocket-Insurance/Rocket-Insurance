import Head from "next/head";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
        >
          Reach New Heights with Rocket Insurance 🚀
        </motion.h2>
        <p className="text-lg text-blue-700 mb-6">
          Personal and commercial insurance that’s out of this world. Let’s make your coverage easy, affordable, and stress-free.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3">
          Get a Quote
        </Button>
        <div className="mt-4">
          <Button variant="outline" className="text-blue-700 border-blue-700">
            Apply Now
          </Button>
        </div>
      </main>

      <section id="about" className="bg-white py-16 px-10 text-center">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">About Rocket Insurance</h3>
        <p className="text-blue-700 max-w-2xl mx-auto">
          Founded with the mission to simplify insurance for everyone, Rocket Insurance is Latina-owned and proudly Canadian. With strong roots in the community and a passion for helping people protect what matters, we’re bringing heart and hustle to the insurance world.
        </p>
      </section>

      <section id="services" className="py-16 px-10 text-center">
        <h3 className="text-2xl font-semibold text-blue-800 mb-6">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-lg text-blue-700">Auto Insurance</h4>
              <p className="text-sm text-blue-600">Stay protected on the road with flexible, affordable auto policies.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-lg text-blue-700">Home Insurance</h4>
              <p className="text-sm text-blue-600">Shield your home and belongings with confidence and care.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-lg text-blue-700">Commercial Insurance</h4>
              <p className="text-sm text-blue-600">We’ve got your business covered so you can focus on what matters.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="partners" className="bg-blue-50 py-16 px-10 text-center">
        <h3 className="text-2xl font-semibold text-blue-800 mb-6">Our Partners</h3>
        <div className="flex justify-center gap-10 flex-wrap">
          {logos.map((logo, index) => (
            <div key={index} className="text-blue-700 font-medium text-lg">
              {logo}
            </div>
          ))}
        </div>
      </section>

      <section id="careers" className="py-16 px-10 text-center">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Careers</h3>
        <p className="text-blue-700 max-w-xl mx-auto">
          We’re always looking for passionate, driven people to join our rocket-fueled team. Let’s grow together.
        </p>
        <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
          Apply Now
        </Button>
      </section>

      <section id="contact" className="bg-white py-16 px-10 text-center">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Contact Us</h3>
        <p className="text-blue-700">
          Have questions or need support? Reach out to our friendly team. We’re here to help!
        </p>
        <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
          Send a Message
        </Button>
      </section>
    </div>
  );
}
