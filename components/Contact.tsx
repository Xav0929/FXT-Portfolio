"use client";

import { useState } from "react";
import github from "../public/assets/github.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-12 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="section-header mb-12">
          <p className="section-label text-xs">Get In Touch</p>
          <h2 className="section-title text-3xl sm:text-4xl">Let's Work Together</h2>
          <p className="section-subtitle text-sm">
            Have a project in mind? I'd love to hear from you
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left: Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Let's Talk</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-lg">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              <div className="group flex items-start gap-3 cursor-pointer">
                <div className="w-10 h-10 bg-red-600/20 border border-red-500/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/30 group-hover:border-red-500/50 transition-all group-hover:shadow-lg group-hover:shadow-red-600/20">
                  <span className="text-lg">📧</span>
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Email</p>
                  <a href="mailto:francis@example.com" className="text-red-400 hover:text-red-300 font-semibold transition-colors text-xs">
                    francis@example.com
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-3 cursor-pointer">
                <div className="w-10 h-10 bg-red-600/20 border border-red-500/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/30 group-hover:border-red-500/50 transition-all group-hover:shadow-lg group-hover:shadow-red-600/20">
                  <span className="text-lg">📱</span>
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Phone</p>
                  <a href="tel:+1234567890" className="text-red-400 hover:text-red-300 font-semibold transition-colors text-xs">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-3 cursor-pointer">
                <div className="w-10 h-10 bg-red-600/20 border border-red-500/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/30 group-hover:border-red-500/50 transition-all group-hover:shadow-lg group-hover:shadow-red-600/20">
                  <span className="text-lg">📍</span>
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Location</p>
                  <p className="text-gray-400 font-medium text-xs">Your City, Your Country</p>
                </div>
              </div>
            </div>

            {/* Social Links - Facebook & GitHub Only */}
            <div className="flex gap-3">
              {/* Facebook */}
              <a 
                href="https://facebook.com/francis.quiambao.125958" 
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-500 hover:text-white hover:border-transparent transition-all hover:shadow-lg hover:shadow-blue-600/30"
              >
                <span className="text-2xl font-bold">f</span>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/Xav0929" 
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-gray-700 hover:to-black hover:text-white hover:border-transparent transition-all hover:shadow-lg hover:shadow-gray-600/30"
              >
              
              </a>
            </div>
          </div>

          {/* Right: Contact Form - Unchanged */}
          <div className="p-6 bg-gradient-to-br from-white/8 to-white/3 border border-white/10 rounded-lg backdrop-blur-xl hover:border-red-500/30 transition-all hover:shadow-lg hover:shadow-red-600/20">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-bold text-xs mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:bg-white/8 transition-all text-xs"
                  placeholder="Francis Tonzo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-bold text-xs mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:bg-white/8 transition-all text-xs"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-bold text-xs mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:bg-white/8 transition-all resize-none text-xs"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-600/50 hover:scale-105 transition-all duration-300 text-sm"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}