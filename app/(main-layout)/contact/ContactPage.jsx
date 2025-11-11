"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      console.log("Form submitted:", formData);
      alert("Thank you for your message! We will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            GET IN TOUCH
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto mb-12 text-gray-700 space-y-4">
          <p>
            For bookings or trip details, please visit the tour page under the{" "}
            <span className="font-semibold">"Book Now"</span> menu. Please note
            that bookings can only be made through the tour page. If you need
            travel directions to our office, check out our{" "}
            <a
              href="#"
              className="text-yellow-600 hover:text-yellow-700 font-semibold"
            >
              FAQ page
            </a>
            .
          </p>
          <p>
            For all other inquiries, feel free to use this contact form. Thank
            you!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact us
              </h2>
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold">Gibbon Experience</p>
                <p>P.O. box 400,</p>
                <p>Ban Houayxay, Bokeo Province,</p>
                <p>Lao P.D.R.</p>
              </div>

              <div className="mt-6 space-y-2 text-gray-700">
                <p>+856 84 21 20 21</p>
                <p>+856 30 57 45 866</p>
              </div>

              <div className="mt-6">
                <a
                  href="mailto:info@gibbonexperience.org"
                  className="text-yellow-600 hover:text-yellow-700 font-semibold"
                >
                  info@gibbonexperience.org
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Donate</h2>
              <div className="space-y-4 text-gray-700">
                <p>You would like to contribute to our conservation efforts?</p>
                <p>
                  You can do a one-time donation or a monthly contribution,
                  there is no minimum.
                </p>
                <a
                  href="#"
                  className="inline-block text-yellow-600 hover:text-yellow-700 font-semibold text-lg"
                >
                  Donate now
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition resize-none"
                ></textarea>
              </div>

              <div>
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 hover:border-gray-400 transition duration-200 cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
