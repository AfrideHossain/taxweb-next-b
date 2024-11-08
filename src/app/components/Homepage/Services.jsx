const Services = () => {
  const services = ["Tax", "Vat", "Legal Consultation"];
  return (
    <section className="py-10 bg-gray-800 md:mx-4 mx-2 rounded-t-[2.5rem]">
      <h2 className="text-3xl md:text-6xl font-bold text-center text-gray-200 mb-6">
        Our Services
      </h2>
      <p className="max-w-2xl mx-auto text-center mb-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        veritatis mollitia, beatae delectus animi sequi maxime. Amet rem autem
        aliquam laudantium deleniti, quasi consectetur esse adipisci vitae fuga
        animi odit! Iure suscipit voluptate cumque quod sapiente aperiam
        deleniti! Quas, rem dignissimos illum natus alias reiciendis consectetur
        a velit dolore rerum.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="w-60 p-6 bg-gray-700 text-center rounded-lg shadow-md shadow-primary"
          >
            <h3 className="text-3xl font-semibold text-indigo-400">{service}</h3>
            <p className="mt-2 text-gray-400">
              Personalized {service.toLowerCase()} solutions.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
