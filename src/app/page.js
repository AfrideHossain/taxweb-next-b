import React from "react";
import Hero from "./components/Homepage/Hero";
const Home = () => {
  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-16 bg-gray-800">
        <h2 className="text-3xl font-bold text-center text-gray-200 mb-10">
          Our Services
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["Tax Filing", "Dispute Resolution", "Consulting", "Compliance"].map(
            (service, idx) => (
              <div
                key={idx}
                className="w-60 p-6 bg-gray-700 text-center rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-indigo-400">
                  {service}
                </h3>
                <p className="mt-2 text-gray-400">
                  Personalized {service.toLowerCase()} solutions.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-gray-200 mb-10">
          Client Testimonials
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-64 p-6 bg-gray-800 text-center rounded-lg shadow-md">
            <p className="text-gray-400">
              {`"Professional service! They helped me with my tax filings quickly
              and efficiently."`}
            </p>
            <h4 className="mt-4 font-bold text-gray-200">
              - A Satisfied Client
            </h4>
          </div>
        </div>
      </section>

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
