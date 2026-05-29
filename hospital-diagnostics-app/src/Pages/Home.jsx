function Home() {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Streamlining Hospital Management</h1>
      <p className="text-lg text-gray-600 mb-8">Advanced preliminary patient diagnostics and efficient care flow.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Patient Intake</h2>
          <p>Seamless registration and preliminary symptom tracking.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Diagnostic AI Tools</h2>
          <p>Assisting medical staff with preliminary diagnostic pathways.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;