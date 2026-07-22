"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
 if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else if (res.status === 429) {
        setStatus("error");
        alert("Too many messages sent. Please wait an hour before trying again.");
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };
  return (
    <section id="contact" className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="section-header mb-12">
          <p className="section-label text-xs">Get In Touch</p>
          <h2 className="section-title text-3xl sm:text-4xl">Let's Work Together</h2>
          <p className="section-subtitle text-sm">
            Have a project in mind? I'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Let's Talk</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-lg">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              <div className="group flex items-start gap-3 cursor-pointer">
                <div className="w-10 h-10 bg-red-600/20 border border-red-500/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/30 group-hover:border-red-500/50 transition-all group-hover:shadow-lg group-hover:shadow-red-600/20">
                  <Mail className="w-5 h-5 text-red-400" />
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
                  <Phone className="w-5 h-5 text-red-400" />
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
                  <MapPin className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Location</p>
                  <p className="text-gray-400 font-medium text-xs">Your City, Your Country</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a 
                href="https://facebook.com/francis.quiambao.125958" 
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-500 hover:text-white hover:border-transparent transition-all hover:shadow-lg hover:shadow-blue-600/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
</svg>
              </a>

              <a 
                href="https://github.com/Xav0929" 
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-gray-700 hover:to-black hover:text-white hover:border-transparent transition-all hover:shadow-lg hover:shadow-gray-600/30"
              >
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
</svg>
              </a>
            </div>
          </div>

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
                  type="submit" className={`w-full px-4 py-2 bg-gradient-to-r text-white font-bold rounded-lg transition-all duration-300 text-sm ${
                    status === "success"
                      ? "from-green-600 to-green-500"
                      : status === "error"
                      ? "from-gray-600 to-gray-500"
                      : "from-red-600 to-red-500 hover:shadow-lg hover:shadow-red-600/50 hover:scale-105"
                  }`}
                  disabled={status === "loading" || status === "success"}
                >
                 {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Sending...
                    </span>
                  ) : status === "success" ? (
                    <span className="flex items-center justify-center gap-2">
                      ✓ Message Sent!
                    </span>
                  ) : status === "error" ? (
                    <span>Failed. Try again.</span>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}