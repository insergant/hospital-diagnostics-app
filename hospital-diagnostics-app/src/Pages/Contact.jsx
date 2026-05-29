function Contact() {
  return (
    <div className="container mx-auto p-8 max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-md">
        
        {/* Contact Info Column */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h1>
          <p className="text-gray-600 mb-6">
            Have questions about system access, deployment configurations, or institutional onboarding? Contact our systems administration desk.
          </p>
          
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center">
              <span className="font-semibold mr-2">📍 Location:</span> School of Engineering, Main Campus
            </p>
            <p className="flex items-center">
              <span className="font-semibold mr-2">📧 Email:</span> admin.support@medidiagnose.edu
            </p>
            <p className="flex items-center">
              <span className="font-semibold mr-2">📞 Phone:</span> +1 (555) 019-2834
            </p>
          </div>
        </div>

        {/* Support Inquiry Form */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Submit a Support Ticket</h2>
          <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" required />
            <input type="email" placeholder="Official Email Address" className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" required />
            <textarea placeholder="Describe your issue or inquiry..." rows="4" className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none resize-none" required></textarea>
            <button type="submit" className="bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;