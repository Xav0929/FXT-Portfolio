"use client";
import { useState, useEffect } from "react";
import hksamms from '@/assets/Hksamms.png';
import SHM from '@/assets/SHM.png';
import vet from '@/assets/vetplus.png';
import Shoepreme from '@/assets/Shoepreme.png';
import citScheduler from '@/assets/CITScheduler.png';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  const projects = [
    {
    title: "SHOEPREME",
    description: "A full-stack e-commerce storefront and admin panel for an authentic sneaker store. Features product listings, pre-orders, Shopify integration, and a custom admin dashboard for managing inventory and orders.",
    tech: ["Next.js", "Node.js", "MongoDB", "Shopify", "Vercel"],
    image: Shoepreme,
    gradient: "from-orange-500 to-yellow-600",
    liveDemo: "https://www.shoepreme-k.com/",
  },
    {
      title: "CIT Scheduler",
      description: "A web-based scheduling system built as our capstone project, developed with a teammate. The backend runs on Render with MongoDB Atlas, and the frontend is deployed on Vercel.",
      tech: ["Node.js", "Vue.js", "MongoDB", "Render", "Vercel"],
      image: citScheduler,
      gradient: "from-red-500 to-red-600",
      liveDemo: "https://www.citscheduler.com/",
    },
    {
      title: "HK-SAMMS",
      description: "A scheduling system for HK Scholars of PHINMA Araullo University that automates duty assignments, minimizes scheduling conflicts, and improves schedule management and accessibility.",
      tech: ["React", "Node.js", "MongoDB", "Vercel"],
      image: hksamms,
      gradient: "from-blue-500 to-blue-600",
      liveDemo: "https://final-hksamms.vercel.app/",
      
    },
    {
      title: "Clinic Appointment System",
      description: "A PHP and MySQL–based health record management system for barangay use, featuring user registration, check-up scheduling, and medical record management. This was my first backend project and is optimized for desktop viewing.",
      tech: ["PHP", "MySQL", "Javascript"],
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

  const prev = () => setCurrent((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === projects.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/20 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="section-header mb-12">
          <p className="section-label text-xs tracking-widest">My Work</p>
          <h2 className="section-title text-3xl sm:text-4xl font-bold">Featured Projects</h2>
          <p className="section-subtitle text-sm text-gray-400">A collection of projects that showcase my skills and passion for development</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" 
            onTouchStart={(e) => {
              const touch = e.touches[0];
              (e.currentTarget as any)._touchStartX = touch.clientX;
            }}
            onTouchEnd={(e) => {
              const startX = (e.currentTarget as any)._touchStartX;
              const endX = e.changedTouches[0].clientX;
              const diff = startX - endX;
              if (Math.abs(diff) > 50) {
                diff > 0 ? next() : prev();
              }
            }}
          > <div className="relative flex items-center justify-center" style={{ height: "520px" }}>              {projects.map((project, index) => {
                const total = projects.length;
                let offset = index - current;
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                const isActive = offset === 0;
                const isLeft = offset === -1;
                const isRight = offset === 1;
                const isVisible = isActive || isLeft || isRight;

                return (
                  <div
                    key={index}
                    onClick={() => isActive ? setSelectedProject(project) : setCurrent(index)}
               className={`absolute transition-all duration-500 cursor-pointer w-[85vw] sm:w-80 md:w-96 ${isActive ? "" : "hidden sm:block"}`}                   style={{
                      transform: isActive
                        ? "translateX(0%) scale(1)"
                       : isLeft
                         ? "translateX(-88%) scale(0.78)"
                        : isRight   ? "translateX(88%) scale(0.78)"
                        : "translateX(0%) scale(0.7)",
                      opacity: isActive ? 1 : isVisible ? 0.45 : 0,
                      zIndex: isActive ? 10 : isVisible ? 5 : 0,pointerEvents: isVisible ? "auto" : "none",
                      
                    }}
                  >
                    <article className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl">
                        <div className={`bg-gradient-to-br ${project.gradient} h-64 flex items-center justify-center relative overflow-hidden`}>                        {project.image ? (
                          <img
                            src={project.image.src}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-6xl">{project.title[0]}</span>
                        )}
                        {isActive && (
                          <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Featured
                          </div>
                        )}
                      </div>

                      <div className="p-5 flex flex-col">
                        <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                        {isActive && (
                          <>
                            <p className="text-gray-400 text-xs mb-4 line-clamp-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tech.map((tech, i) => (
                                <span key={i} className="px-2 py-1 bg-white/10 text-xs rounded-full text-white/70">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="flex gap-2">
                              {/* {project.github && (
                                
                                 <a href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="flex-1 py-2 text-xs font-semibold bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 text-center transition-all"
                                >
                                  GitHub
                                </a>
                              )} */}
                              {project.liveDemo && (
                                
                                 <a href={project.liveDemo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="flex-1 py-2 text-xs font-semibold bg-red-600 hover:bg-red-500 text-white rounded-xl text-center transition-all"
                                >
                                  Live Demo
                                </a>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-red-600 border border-white/10 rounded-full items-center justify-center transition-all text-xl"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-red-600 border border-white/10 rounded-full items-center justify-center transition-all text-xl"
          >
            ›
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? "bg-red-500 w-6" : "bg-white/20 w-2"}`}
              />
            ))}
          </div>
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