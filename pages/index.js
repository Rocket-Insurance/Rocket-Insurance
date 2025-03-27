import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rocket Insurance</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-200 font-[Outfit] text-center px-4 py-10">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-blue-800">Rocket Insurance 🚀</h1>
          <nav className="space-x-6 mt-4 text-blue-700 font-medium">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#partners">Partners</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main>
          <h2 className="text-2xl font-bold mb-4">Reach New Heights with Rocket Insurance</h2>
          <p className="mb-6 text-gray-700 max-w-xl mx-auto">
            Personal and commercial insurance that’s out of this world. Let’s make your coverage easy, affordable, and stress-free.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Get a Quote</button>
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-100 transition">Apply Now</button>
          </div>

          <section id="about" className="mt-20">
            <h3 className="text-xl font-semibold mb-2">About Rocket Insurance</h3>
            <p className="text-gray-600 max-w-lg mx-auto">
              Founded with the mission to simplify insurance for everyone, Rocket Insurance is Latina-owned and proudly Canadian. With strong roots in the community and a passion for helping people protect what matters, we’re bringing heart and hustle to the insurance world.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
