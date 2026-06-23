"use client";
import profile from '@/assets/profile1.png'; 


export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Gradient Background with Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/30 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-900/20 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slideUp">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-green-400">Open to opportunities</span>
            </div>

            {/* Name with Large Typography */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight tracking-tight">
              Hi, I'm{" "}
              <span className="block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                Francis
              </span>
            </h1>

            {/* Title */}
            <p className="text-lg sm:text-xl text-gray-200 font-bold mb-4">
              Full-Stack Developer & IT Student
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6 max-w-2xl">
              I craft beautiful, functional web experiences. Passionate about building scalable applications with modern technologies. Let's create something amazing together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
                <button onClick={() => scrollToSection('projects')} className="btn-primary text-sm px-5 py-2 font-bold">
                  View My Work
                  <span>→</span>
                </button>
              <button onClick={() => scrollToSection('contact')} className="btn-secondary text-sm px-5 py-2 font-bold">
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 pt-6 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                  5+
                </div>
                <p className="text-xs text-gray-400 mt-1 font-medium">Projects Completed</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                  2+
                </div>
                <p className="text-xs text-gray-400 mt-1 font-medium">Years Experience</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                  100%
                </div>
                <p className="text-xs text-gray-400 mt-1 font-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:flex justify-center items-center animate-slideUp relative" style={{ animationDelay: "0.2s", opacity: 0, animation: "slideUp 0.8s ease 0.2s forwards" }}>
            <div className="relative w-96 h-96">
              {/* Glowing Background Circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/40 to-red-600/20 blur-2xl animate-pulse"></div>
              
              {/* Avatar Circle */}
              <div className="absolute inset-0 rounded-[5%] bg-white/10 backdrop-blur-2xl border border-white/30 
                flex items-center justify-center text-9xl font-black text-white overflow-hidden 
                shadow-2xl shadow-black/60 ring-1 ring-white/20">
  
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <img 
                  src={profile.src} 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
