"use client";
import { useState } from "react";
import hksamms from '@/assets/Hksamms.png';
import SHM from '@/assets/SHM.png';
import vet from '@/assets/vetplus.png';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "HK-SAMMS",
      description: "A scheduling system for HK Scholars of PHINMA Araullo University that automates duty assignments, minimizes scheduling conflicts, and improves schedule management and accessibility.",
      tech: ["React", "Node.js", "MongoDB", "Vercel"],
      image: hksamms,
      gradient: "from-blue-500 to-blue-600",
      liveDemo: "https://final-hksamms.vercel.app/",
      github: "https://github.com/carl242424/HK-SAMMS"   
    },
    {
      title: "Clinic Appointment System",
      description: "A PHP and MySQL–based health record management system for barangay use, featuring user registration, check-up scheduling, and medical record management. This was my first backend project and is optimized for desktop viewing.",
      tech: ["PHP","MySQL","Javascript"],
      image: SHM,
      gradient: "from-purple-500 to-purple-600",
    },
    {
      title: "Student Grade Management System",
      description: "A comprehensive clinic appointment system with patient management and scheduling features.(App For Expo).",
      tech: ["Firebase", "React Native", "Expo"],
      image: vet,
      gradient: "from-green-500 to-green-600",
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="section-header mb-12">
          <p className="section-label text-xs tracking-widest">My Work</p>
          <h2 className="section-title text-3xl sm:text-4xl font-bold">Featured Projects</h2>
          <p className="section-subtitle text-sm text-gray-400">A collection of projects that showcase my skills and passion for development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/50 hover:bg-white/8 transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-red-600/30 cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${project.gradient} h-56 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                
                {project.image ? (
                  <img 
                    src={project.image.src} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{project.image}</span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-10 flex-1 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 text-xs rounded-full text-white/70">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 py-2.5 text-xs font-semibold bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 text-center transition-all"
                    >
                      GitHub
                    </a>
                  )}

                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 py-2.5 text-xs font-semibold bg-red-600 hover:bg-red-500 text-white rounded-xl text-center transition-all"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-zinc-950 rounded-3xl overflow-hidden border-2 border-red-500 shadow-2xl shadow-red-600/40"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-red-600 hover:bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold transition-all"
            >
              ✕
            </button>

            <div className="relative bg-black pt-14">
              {selectedProject.image ? (
                <img 
                  src={selectedProject.image.src} 
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[45vh] object-contain mx-auto" 
                />
              ) : (
                <div className="h-80 flex items-center justify-center text-8xl bg-gradient-to-br from-zinc-900 to-black">
                  {selectedProject.icon}
                </div>
              )}
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold mb-5 text-white">{selectedProject.title}</h2>
              <p className="text-gray-400 leading-relaxed text-[17px] max-h-[220px] overflow-y-auto pr-4">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}