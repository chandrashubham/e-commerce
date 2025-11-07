import React from "react";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side: Info */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Get In Touch</h2>
          <p className="text-gray-600">
            We’d love to hear from you! Whether you have a question about
            products, pricing, orders, or anything else, our team is ready to
            answer all your questions.
          </p>
          <div className="space-y-3 text-gray-700">
            <p>
              <span className="font-semibold">Email:</span> support@yourecommerce.com
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +91 98765 43210
            </p>
            <p>
              <span className="font-semibold">Address:</span> 123 Street,
              Bangalore, India
            </p>
          </div>
        </div>

        {/* Right side: Form */}
        <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="4"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black cursor-pointer text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
