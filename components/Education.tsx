"use client";

import { useState } from "react";
import Image from "next/image";


// Import all certificate images
import cloud from '@/assets/cloud.png';
import database from '@/assets/database.png';
import networking from '@/assets/networking.png';
import admin from '@/assets/administration.png';
import nc2 from '@/assets/Nc2.png';

export default function Education() {
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const certifications = [
    {
      id: 1,
      title: "Oracle Cloud Infrastructure Foundations",
      issuer: "Oracle • 2025",
      image: cloud,
      description: "Certified in Oracle Cloud Infrastructure fundamentals, including core services, networking, compute, storage, and security best practices.",
      skills: ["OCI", "Cloud Computing", "Networking", "Security", "IaC"],
    },
    {
      id: 2,
      title: "Oracle Database Administration",
      issuer: "Oracle • 2025",
      image: admin,
      description: "Mastered Oracle Database installation, configuration, backup/recovery, performance tuning, and high-availability solutions.",
      skills: ["Oracle DB", "SQL", "PL/SQL", "Backup & Recovery", "Performance Tuning"],
    },
    {
      id: 3,
      title: "Oracle Cloud Data Management",
      issuer: "Oracle • 2025",
      image: database,
      description: "Proficient in Oracle Autonomous Database, data migration, integration with OCI services, and building scalable data solutions.",
      skills: ["Autonomous DB", "Data Migration", "ETL", "OCI Integration", "Analytics"],
    },
    {
      id: 4,
      title: "Oracle Cloud Networking Professional",
      issuer: "Oracle • 2025",
      image: networking,
      description: "Expertise in designing and implementing secure, high-performance network architectures using VCNs, Load Balancers, VPN, and FastConnect.",
      skills: ["VCN", "Load Balancing", "VPN", "FastConnect", "Network Security"],
    },
    {
      id: 5,
      title: "National Certificate II - Computer Systems Servicing",
      issuer: "TESDA • 2026",
      image: nc2,
      description: "Awarded by the Technical Education and Skills Development Authority (TESDA) of the Philippines for successfully completing the competency requirements in Computer Systems Servicing.",
      skills: ["Hardware & Software Installation", "Computer Repair & Maintenance", "Networking", "System Configuration"],
    },
  ];

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.2, 0.6));
  const resetZoom = () => setZoomLevel(1);

  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/15 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="section-header mb-12">
          <p className="section-label text-xs">Background</p>
          <h2 className="section-title text-3xl sm:text-4xl">Education & Experience</h2>
          <p className="section-subtitle text-sm">My academic journey and professional growth</p>
        </div>

        {/* Certifications Grid */}
        <div id="certifications" className="mt-10">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Certifications & Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                onClick={() => {
                  setSelectedCert(cert);
                  setZoomLevel(1);
                }}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/30"
              >
                <div className="relative aspect-[16/10] bg-zinc-900">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6">
                    <div>
                      <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-3">2025</div>
                      <h4 className="text-white text-xl font-semibold mb-1 leading-tight">{cert.title}</h4>
                      <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-8"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-lg w-full bg-zinc-950 border border-red-900/50 rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Certificate Image with Zoom */}
            <div className="relative bg-black p-8 border-b border-white/10" style={{ height: '45vh' }}>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl shadow-xl z-20"
              >
                ✕
              </button>

              {/* Zoom Controls */}
              <div className="absolute top-4 left-4 z-20 flex gap-1 bg-black/70 rounded-lg p-1">
                <button 
                  onClick={handleZoomOut} 
                  className="w-8 h-8 text-white hover:bg-white/20 rounded flex items-center justify-center text-lg font-bold"
                >
                  −
                </button>
                <button 
                  onClick={resetZoom} 
                  className="px-3 text-xs text-white hover:bg-white/20 rounded"
                >
                  Reset
                </button>
                <button 
                  onClick={handleZoomIn} 
                  className="w-8 h-8 text-white hover:bg-white/20 rounded flex items-center justify-center text-lg font-bold"
                >
                  +
                </button>
              </div>

              {/* Scrollable + Zoomable Image Container */}
              <div
                className="w-full h-full overflow-auto flex items-center justify-center"
                style={{ scrollbarWidth: 'thin', scrollbarColor: '#7f1d1d transparent' }}
              >
                <div
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transformOrigin: 'center center',
                    transition: 'transform 0.2s ease',
                    // Expand container so scrolling works when zoomed
                    minWidth: zoomLevel > 1 ? `${zoomLevel * 100}%` : 'auto',
                    minHeight: zoomLevel > 1 ? `${zoomLevel * 100}%` : 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    width={580}
                    height={450}
                    className="rounded-xl shadow-2xl object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-1">{selectedCert.title}</h3>
              <p className="text-red-400 font-medium mb-5">{selectedCert.issuer}</p>
              
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                {selectedCert.description}
              </p>

              <div>
                <p className="text-red-400 font-semibold mb-3 text-sm">Skills Acquired:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill: string, i: number) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-zinc-900 border border-red-900/50 text-red-300 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}