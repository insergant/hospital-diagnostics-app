function Register() {
  return (
    <div className="flex justify-center items-center h-full mt-12 mb-12">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-4">
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">Staff Account Registration</h2>
        <p className="text-xs text-gray-500 text-center mb-6">Access credentials are subject to administrative clearance.</p>
        
        <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="border p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="text" placeholder="Last Name" className="border p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          
          <input type="text" placeholder="Medical Staff ID (e.g., MED-1234)" className="border p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="email" placeholder="Institutional Email" className="border p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="password" placeholder="Password" className="border p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="password" placeholder="Confirm Password" className="border p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          
          <div className="flex items-center space-x-2 py-1">
            <input type="checkbox" id="terms" className="h-4 w-4 text-blue-600 border-gray-300 rounded" required />
            <label htmlFor="terms" className="text-xs text-gray-600">I agree to institutional data compliance regulations.</label>
          </div>

          <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 font-semibold transition text-sm">
            Register Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;