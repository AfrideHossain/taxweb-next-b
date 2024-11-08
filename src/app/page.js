import React from "react";
import Hero from "./components/Homepage/Hero";
import Services from "./components/Homepage/Services";
import Testimonials from "./components/Testimonials";
import About from "./components/Homepage/About";
import HeroTemp from "./components/Homepage/HeroTemp";
const Home = () => {
  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <Hero />
      {/* <HeroTemp /> */}

      {/* Services Section */}
      <Services />

      {/* Testimonials Section */}
      <Testimonials />

      <About />

      {/* Contact Section */}
      <section className="py-16 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold text-gray-200 mb-6">
          Ready to Solve Your Tax Issues?
        </h2>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Contact us to book a consultation and get expert guidance on your tax
          needs.
        </p>
        <button className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 transition">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default Home;
