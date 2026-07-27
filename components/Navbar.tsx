"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from '@/assets/logo.png'; 


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-5 backdrop-blur-2xl bg-black/50 border-b border-white/10 hover:border-white/20 transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent hover:from-red-500 hover:to-red-300 transition-all">
          <img src={Logo.src} alt="Logo" className="w-100% h-100% mr-2 inline-block" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 list-none">
          <li>
            <a href="#home" className="text-gray-300 hover:text-white font-semibold transition-colors relative group text-sm">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-300 hover:text-white font-semibold transition-colors relative group text-sm">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-300 hover:text-white font-semibold transition-colors relative group text-sm">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
          </li>
          <li>
            <a href="#education" className="text-gray-300 hover:text-white font-semibold transition-colors relative group text-sm">
              Education
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
          </li>
          <li>
            <a href="#certifications" className="text-gray-300 hover:text-white font-semibold transition-colors relative group text-sm">
              Certifications
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-300 hover:text-white font-semibold transition-colors relative group text-sm">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
          </li>
          <li>
            <a href="/resume.pdf" download className="text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-500 hover:to-red-400 transition-all">
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 bg-none border-none cursor-pointer p-2"
        >
          <span className={`w-6 h-0.5 bg-white rounded transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-white rounded transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-white rounded transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 px-4 pb-4 border-t border-white/10">
          <a href="#home" className="block py-2 text-gray-300 hover:text-white font-semibold transition-colors text-sm">Home</a>
          <a href="#about" className="block py-2 text-gray-300 hover:text-white font-semibold transition-colors text-sm">About</a>
          <a href="#projects" className="block py-2 text-gray-300 hover:text-white font-semibold transition-colors text-sm">Projects</a>
          <a href="#education" className="block py-2 text-gray-300 hover:text-white font-semibold transition-colors text-sm">Education</a>
          <a href="#certifications" className="block py-2 text-gray-300 hover:text-white font-semibold transition-colors text-sm">Certifications</a>
          <a href="#contact" className="block py-2 text-gray-300 hover:text-white font-semibold transition-colors text-sm">Contact</a>
          <a href="/resume.pdf" download className="block py-2 text-red-400 hover:text-red-300 font-semibold transition-colors text-sm">Download CV</a>
        </div>
      )}
    </nav>
  );
}
