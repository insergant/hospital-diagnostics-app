function About() {
  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Our System</h1>
      <p className="text-lg text-gray-600 mb-8 text-center leading-relaxed">
        Our Hospital Management and Preliminary Patient Diagnostics platform is designed to bridge the gap between initial patient intake and clinical decision-making. By leveraging modern web technologies, we streamline workflows for medical professionals and improve the efficiency of patient care pathways.
      </p>

      <hr className="my-8 border-gray-200" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Our Core Mission</h2>
          <p className="text-gray-600">
            To minimize patient wait times and optimize diagnostic accuracy by providing clinical staff with intuitive, real-time diagnostic guidance tools during the critical initial phases of hospital entry.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Project Scope</h2>
          <p className="text-gray-600">
            Developed as a comprehensive frontend prototype for CSCI390, this application demonstrates secure medical personnel portals, client-side triage forms, and administrative management structures.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;