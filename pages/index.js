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
    "Northbridge",
    "Gore Mutual",
    "Echelon",
    "Economical"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-200">
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
        <p className="text-lg text-blue-700 max-w-xl mx-auto mb-8">
          Personal and commercial insurance that’s out of this world. Let's make your coverage easy, affordable, and stress-free.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-full">
          Get a Quote
        </Button>
      </main>

      <section id="about" className="py-16 px-6 bg-blue-50">
        <h3 className="text-3xl font-semibold text-blue-800 text-center mb-10">About Rocket Insurance</h3>
        <div className="max-w-4xl mx-auto text-blue-700 text-lg">
          <p>
            Founded with the mission to simplify insurance for everyone, Rocket Insurance is Latina-owned and proudly Canadian. With strong roots in the community and a passion for helping people protect what matters, we’re bringing heart and hustle to the insurance world.
          </p>
        </div>
      </section>

      <section id="services" className="py-16 px-6">
        <h3 className="text-3xl font-semibold text-blue-800 text-center mb-10">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-blue-700 mb-2">Auto Insurance</h4>
              <p>Reliable, affordable coverage that gets you where you need to go—protected and stress-free.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-blue-700 mb-2">Home Insurance</h4>
              <p>Protection that gives you peace of mind for your home, your stuff, and your future.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-blue-700 mb-2">Commercial Insurance</h4>
              <p>Tailored coverage for businesses big and small. Hustle hard—Rocket’s got your back.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="partners" className="py-16 px-6 bg-white">
        <h3 className="text-3xl font-semibold text-blue-800 text-center mb-10">Our Insurance Partners</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center max-w-5xl mx-auto">
          {logos.map((name, index) => (
            <div key={index} className="text-center text-blue-700 font-medium text-lg">
              {name}
            </div>
          ))}
        </div>
      </section>

      <section id="careers" className="py-16 px-6">
        <h3 className="text-3xl font-semibold text-blue-800 text-center mb-10">Careers at Rocket Insurance</h3>
        <div className="max-w-3xl mx-auto text-blue-700 text-lg text-center">
          <p className="mb-6">
            Ready to launch your career with us? We're always on the lookout for talented, driven individuals who are passionate about helping others and shaking up the insurance world. Join our mission to simplify, support, and soar.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-full">
            Apply Now
          </Button>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-blue-50">
        <h3 className="text-3xl font-semibold text-blue-800 text-center mb-10">Contact Us</h3>
        <div className="max-w-2xl mx-auto text-center">
          <p className="mb-6 text-blue-700">
            Ready to launch your insurance journey? Contact us today to get started.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg">
            Email Us
          </Button>
        </div>
      </section>

      <footer className="text-center py-6 text-blue-600 text-sm">
        © {new Date().getFullYear()} Rocket Insurance. All rights reserved.
      </footer>
    </div>
  );
}
