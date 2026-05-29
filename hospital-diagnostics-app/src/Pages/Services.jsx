function Services() {
  const servicesList = [
    {
      title: "Preliminary Diagnostics",
      description: "Automated triage support systems that capture patient symptoms and map them against preliminary diagnostic workflows.",
      icon: "🩺"
    },
    {
      title: "Hospital Intake Management",
      description: "Digital documentation queues that reduce physical paperwork, allowing medical receptionists to process patients seamlessly.",
      icon: "📋"
    },
    {
      title: "Secure Staff Portals",
      description: "Role-based authentication screens protecting patient health information, accessible exclusively by authorized clinicians.",
      icon: "🔒"
    },
    {
      title: "Analytical Dashboards",
      description: "Real-time metrics on hospital occupancy, pending diagnostic reports, and patient flow bottleneck tracking.",
      icon: "📊"
    }
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Our Services & Modules</h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Explore the functional components integrated within our platform designed to modernize hospital administration.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesList.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">{service.icon}</span>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;