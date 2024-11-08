import React from "react";

const Testimonials = () => {
  return (
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
          <h4 className="mt-4 font-bold text-gray-200">- A Satisfied Client</h4>
        </div>
      </div>
      <div className="flex gap-10 justify-center mt-6">
        <button className="btn btn-primary text-base">
          See all Testimonials
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
