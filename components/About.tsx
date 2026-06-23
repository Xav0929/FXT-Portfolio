"use client";

export default function About() {
  const skills = [
    "JavaScript", "PHP", "MongoDB", "MySQL", "HTML", "CSS", 
    "Tailwind CSS", "Expo", "UI/UX", "Git/GitHub", "React", "Next.js"
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/15 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="section-header mb-12">
          <p className="section-label text-xs">About Me</p>
          <h2 className="section-title text-3xl sm:text-4xl">Turning Ideas Into Reality</h2>
          <p className="section-subtitle text-sm">A glimpse into my journey, passions, and technical expertise</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: About Text */}
          <div className="space-y-3">
            <p className="text-gray-300 leading-relaxed text-sm">
              I'm Francis Tonzo, an Information Technology student with a deep passion for full-stack development. 
              My journey in tech started with curiosity about how websites work, which evolved into building 
              complete applications from the ground up.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              I specialize in creating responsive, user-friendly web applications using modern frameworks and 
              technologies. From designing intuitive interfaces to architecting robust backend systems, I enjoy 
              every aspect of the development process.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              My goal is to become a proficient full-stack developer who creates impactful digital solutions. 
              I'm constantly learning new technologies and best practices to stay current in this ever-evolving field.
            </p>
          </div>

          {/* Right: Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group px-3 py-2 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-red-500/50 rounded-lg text-gray-200 font-semibold hover:bg-red-500/10 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-red-600/20 cursor-pointer text-center text-xs"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
