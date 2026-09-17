import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, Award, Building2, Sparkles, Star } from 'lucide-react';

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('work');

  const educationData = [
    {
      title: "Computer Engineering",
      institution: "TCOER, Pune",
      grade: "8.84 CGPA",
      date: "2022 - 2026",
      description: "Focusing on MERN Stack, Data Structures & Algorithms, Object-Oriented Programming, and System Design.",
      tags: ["DSA", "Web Dev", "Software Eng"],
      icon: <GraduationCap size={22} strokeWidth={2.5} />,
      color: "bg-tertiary text-foreground",
      badgeColor: "bg-tertiary/30 text-foreground border-foreground"
    },
    {
      title: "Shri Chhatrapati Jr. College",
      institution: "Maharashtra Board",
      grade: "80.69%",
      date: "2021 - 2022",
      description: "Higher Secondary Education with specialization in Science, Higher Mathematics, and Computer Science.",
      tags: ["Science", "Mathematics"],
      icon: <Award size={22} strokeWidth={2.5} />,
      color: "bg-secondary text-white",
      badgeColor: "bg-secondary/20 text-pink-700 border-secondary"
    },
    {
      title: "Gurukul English School",
      institution: "CBSE Board",
      grade: "92%",
      date: "2019 - 2020",
      description: "Secondary High School Education with high academic distinction in Science and Mathematics.",
      tags: ["CBSE", "Distinction"],
      icon: <Star size={22} strokeWidth={2.5} />,
      color: "bg-quaternary text-foreground",
      badgeColor: "bg-quaternary/30 text-emerald-900 border-emerald-700"
    }
  ];

  const workData = [
    {
      title: "Software Engineer-I",
      institution: "Dexpert Systems Pvt. Ltd. • Pune, India",
      grade: "Full-Time",
      date: "Jul 2026 - Present",
      points: [
        "Developing a School ERP System, covering academic, staff management, and payment modules for end-to-end operations.",
        "Building the Gyantaal website & portal enabling structured academic counselling workflows for students.",
        "Contributing to ShipsEdge vessel management platform (Accounts & ROB modules), containerized with Docker."
      ],
      tags: ["School ERP", "Gyantaal", "ShipsEdge", "Docker"],
      icon: <Briefcase size={22} strokeWidth={2.5} />,
      color: "bg-accent text-white",
      badgeColor: "bg-accent/20 text-accent border-accent"
    },
    {
      title: "Software Engineer Intern",
      institution: "Dexpert Systems Pvt. Ltd. • Pune, India",
      grade: "Internship",
      date: "Jan 2026 - Jun 2026",
      points: [
        "Contributed to the banking module for MSCE (Maharashtra State Council of Examination) using React, TypeScript, and MySQL.",
        "Developed RBAC and QHSE modules for Fleet Sense, a fleet and vessel management platform.",
        "Built core modules for SeaConnect, a professional networking platform for seafarers and marine students."
      ],
      tags: ["React", "TypeScript", "MySQL", "RBAC"],
      icon: <Briefcase size={22} strokeWidth={2.5} />,
      color: "bg-tertiary text-foreground",
      badgeColor: "bg-tertiary/30 text-foreground border-foreground"
    },
    {
      title: "Full-Stack Developer Intern",
      institution: "DW Innovation Pvt. Ltd. • Pune, India",
      grade: "Internship",
      date: "Sep 2025 - Dec 2025",
      points: [
        "Contributed to live client projects for LGM Ssports and PNG Jewellers (Maharashtra), delivering production-ready web applications.",
        "Developed a Sales Management Web Application using Next.js, TypeScript, and PostgreSQL with Google Maps API integration."
      ],
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Google Maps"],
      icon: <Briefcase size={22} strokeWidth={2.5} />,
      color: "bg-quaternary text-foreground",
      badgeColor: "bg-quaternary/30 text-emerald-900 border-emerald-700"
    },
    {
      title: "Web Developer (MERN)",
      institution: "EY-GDS & AICTE",
      grade: "Virtual Internship",
      date: "Feb 2025 - Mar 2025",
      points: [
        "Engineered full-stack MERN web applications, implemented RESTful APIs, authentication, and dynamic UI components."
      ],
      tags: ["React", "Node.js", "MongoDB", "Express"],
      icon: <Briefcase size={22} strokeWidth={2.5} />,
      color: "bg-secondary text-white",
      badgeColor: "bg-secondary/20 text-pink-700 border-secondary"
    }
  ];

  const currentData = activeTab === 'work' ? workData : educationData;

  return (
    <section className="section py-20 px-6 md:px-12 max-w-5xl mx-auto relative overflow-hidden scroll-mt-24" id="qualification">
      {/* Background Decorative Blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">

        <h2 className="section-title text-4xl md:text-5xl font-black font-heading tracking-tight text-center mb-10">
          Qualification & <span className="text-accent underline decoration-4 decoration-tertiary">Experience</span>
        </h2>

        {/* Tab Switcher */}
        <div className="inline-flex bg-white p-1.5 border-3 border-foreground rounded-full shadow-hard mb-14 relative z-10">
          <button 
            onClick={() => setActiveTab('work')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-heading font-extrabold text-sm md:text-base transition-all duration-300 ${
              activeTab === 'work' 
                ? 'bg-accent text-white shadow-sm border-2 border-foreground' 
                : 'text-foreground hover:bg-muted'
            }`}
          >
            <Briefcase size={20} strokeWidth={2.5} />
            <span>Work & Experience</span>
          </button>

          <button 
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-heading font-extrabold text-sm md:text-base transition-all duration-300 ${
              activeTab === 'education' 
                ? 'bg-accent text-white shadow-sm border-2 border-foreground' 
                : 'text-foreground hover:bg-muted'
            }`}
          >
            <GraduationCap size={20} strokeWidth={2.5} />
            <span>Education</span>
          </button>
        </div>

        {/* Timeline Container */}
        <div className="w-full relative min-h-[420px]">
          {/* Continuous Central Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 bg-foreground -translate-x-1/2 rounded-full z-0"></div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-10 relative z-10"
            >
              {currentData.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div key={index} className="relative flex items-center w-full">
                    {/* Center Node Icon */}
                    <motion.div 
                      initial={{ scale: 0, rotate: -15 }}
                      whileInView={{ scale: 1, rotate: isEven ? 4 : -4 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", bounce: 0.5, delay: index * 0.1 }}
                      className={`w-12 h-12 rounded-2xl ${item.color} border-3 border-foreground shadow-hard flex items-center justify-center shrink-0 z-20 absolute left-6 md:left-1/2 -translate-x-1/2 top-0 md:top-6`}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Timeline Card */}
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", bounce: 0.4, delay: index * 0.1 }}
                      className={`w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                        isEven ? 'md:mr-auto' : 'md:ml-auto'
                      }`}
                    >
                      <div className="bg-white border-3 border-foreground rounded-3xl p-5 md:p-6 shadow-hard hover:-translate-y-1 hover:shadow-hard-hover transition-all duration-300 relative group overflow-hidden">
                        {/* Corner Decorative Dots */}
                        <div className="absolute top-3 right-3 flex gap-1">
                          <span className="w-2 h-2 rounded-full bg-secondary"></span>
                          <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                        </div>

                        {/* Date Pill & Grade */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="inline-flex items-center gap-1.5 text-xs font-black text-foreground bg-muted px-3 py-1 rounded-full border-2 border-foreground">
                            <Calendar size={13} strokeWidth={2.5} /> {item.date}
                          </span>

                          {item.grade && (
                            <span className={`text-xs font-black px-3 py-1 rounded-xl border-2 ${item.badgeColor}`}>
                              {item.grade}
                            </span>
                          )}
                        </div>

                        {/* Title & Institution */}
                        <h3 className="text-xl md:text-2xl font-black text-foreground font-heading mb-1 leading-snug">
                          {item.title}
                        </h3>
                        
                        <p className="text-sm font-bold text-mutedForeground mb-3 flex items-center gap-1.5">
                          <Building2 size={16} className="text-accent shrink-0" />
                          {item.institution}
                        </p>

                        {/* Bullet Points / Description */}
                        {item.points ? (
                          <ul className="flex flex-col gap-2 mb-4 text-xs md:text-sm text-foreground/90 font-medium">
                            {item.points.map((pt, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                                <span className="leading-relaxed">{pt}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-foreground/80 font-medium leading-relaxed mb-4">
                            {item.description}
                          </p>
                        )}

                        {/* Skill/Topic Badges */}
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-foreground/10">
                          {item.tags.map((tag, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="text-xs font-extrabold px-2.5 py-0.5 bg-muted text-foreground border border-foreground rounded-lg"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                      </div>
                    </motion.div>

                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Qualification;
