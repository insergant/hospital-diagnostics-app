import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MediDiagnose</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/about" className="hover:text-blue-200">About</Link>
          <Link to="/services" className="hover:text-blue-200">Services</Link>
          <Link to="/contact" className="hover:text-blue-200">Contact</Link>
          <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded font-semibold">Login</Link>
          <Link to="/register" className="bg-blue-800 px-4 py-2 rounded font-semibold">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;