import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_4d92n8r', 'template_br7dzdr', form.current, 'AMpcuD0w66tMXoH_G')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('💌 Your message has been sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('❌ Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center px-4 py-12">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-2xl bg-white p-10 rounded-xl shadow-lg border border-rose-200"
      >
        <h2 className="text-3xl font-bold text-center text-rose-600 mb-6">💍 Let's Connect</h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            name="name"
            type="text"
            required
            placeholder="e.g. Priya Sharma"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-400 focus:border-rose-400"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            name="email"
            type="email"
            required
            placeholder="e.g. priya@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-400 focus:border-rose-400"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
          <input
            name="mobile"
            type="tel"
            required
            placeholder="e.g. +91 9876543210"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-400 focus:border-rose-400"
          />
        </div>

        {/* Event Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
          <input
            name="event_date"
            type="date"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-400 focus:border-rose-400"
          />
        </div>

        {/* Venue */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Venue</label>
          <input
            name="venue"
            type="text"
            required
            placeholder="e.g. Royal Palace, Jaipur"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-400 focus:border-rose-400"
          />
        </div>

        {/* Number of Guests */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
          <input
            name="guests"
            type="number"
            required
            placeholder="e.g. 200"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-400 focus:border-rose-400"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Tell us how we can help make your big day special..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-400 focus:border-rose-400"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-rose-500 text-white px-6 py-2 rounded-md hover:bg-rose-600 transition font-semibold"
          >
            ✉️ Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

