function Login() {
  return (
    <div className="flex justify-center items-center h-full mt-20">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Staff Login</h2>
        <form className="flex flex-col space-y-4">
          <input type="email" placeholder="Email Address" className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="password" placeholder="Password" className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;