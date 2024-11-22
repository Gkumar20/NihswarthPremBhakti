'use client';

import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    productType: "",
    adType: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const mailtoLink = `mailto:learninganesh@gmail.com?subject=Advertising Inquiry&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AMobile Number: ${formData.mobileNumber}%0AProduct Type: ${formData.productType}%0AAd Type: ${formData.adType}%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 pt-12 git add .bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold text-purple-700 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700">
          For inquiries, advertisements, and more, get in touch with us below.
        </p>
      </header>

      <section className="w-full max-w-3xl bg-white text-gray-800 shadow-lg rounded-lg p-6 my-8">
        <h2 className="text-3xl font-semibold text-center text-purple-700 mb-6">Advertise With Us</h2>
        <form className="flex flex-col space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-gray-700 font-semibold">Your Mobile Number</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit mobile number"
            />
            <small className="text-gray-500">Format: 1234567890</small>
          </div>

          {/* Product Type */}
          <div>
            <label className="block text-gray-700 font-semibold">Type of Product</label>
            <input
              type="text"
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              placeholder="Enter your product type"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Ad Type */}
          <div>
            <label className="block text-gray-700 font-semibold">Type of Ad</label>
            <select
              name="adType"
              value={formData.adType}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select ad type</option>
              <option value="Banner">Banner</option>
              <option value="Video">Video</option>
              <option value="Sponsored Post">Sponsored Post</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-semibold">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message or inquiry here"
              rows={4}
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 rounded-lg transition duration-200"
          >
            Submit Inquiry
          </button>
        </form>
      </section>

      <footer className="text-center py-6">
        <p className="text-lg">
          For more inquiries, email us directly at{" "}
          <a
            href="mailto:learninganesh@gmail.com"
            className="text-blue-300 underline"
          >
            learninganesh@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default ContactPage;
