import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Terminal, Monitor, FileText, Database, Award, ArrowUpRight, Laptop, Sparkles, ShieldCheck } from 'lucide-react';

const certificates = [
  {
    title: "Full Stack Development",
    issuer: "Comprehensive Web Dev",
    category: "Development",
    icon: <Code size={20} strokeWidth={2.5} />,
    link: "https://drive.google.com/file/d/1_9SlTtHQ5k2a2G7O68Aj-9viEtQwE9PF/view?usp=drive_link",
    color: "bg-tertiary text-foreground"
  },
  {
    title: "Java Programming",
    issuer: "Core Java & OOP",
    category: "Programming",
    icon: <Monitor size={20} strokeWidth={2.5} />,
    link: "https://drive.google.com/file/d/1_Oa_M0PZLLoL0xby9qeBgfeFFnkHkEn8/view?usp=drive_link",
    color: "bg-accent text-white"
  },
  {
    title: "EY GDS Internship",
    issuer: "EY-GDS & AICTE",
    category: "Experience",
    icon: <Terminal size={20} strokeWidth={2.5} />,
    link: "https://drive.google.com/file/d/1bnuXyHKbJCSj72qxlJg4pXLDUiB1HdXS/view?usp=drive_link",
    color: "bg-secondary text-white"
  },
  {
    title: "Techathon 2.0 Hackathon",
    issuer: "InnovateYou Finalist",
    category: "Experience",
    icon: <Award size={20} strokeWidth={2.5} />,
    link: "https://drive.google.com/file/d/1cqv1dsW1uzV3pHGk564ERkkpshDb5A7-/view?usp=drive_link",
    color: "bg-quaternary text-foreground"
  },
  {
    title: "Bootcamp on AR & VR",
    issuer: "C-DAC India",
    category: "AI & Emerging",
    icon: <Laptop size={20} strokeWidth={2.5} />,
    link: "https://drive.google.com/file/d/1modaKhbYFI51PkzHoUxLgKS0a6VHgwiS/view?usp=drive_link",
    color: "bg-tertiary text-foreground"
  },
  {
    title: "Research Paper Publication",
    issuer: "Academic Publication",
    category: "Experience",
    icon: <FileText size={20} strokeWidth={2.5} />,
    link: "https://drive.google.com/file/d/1UNpAxapEpGx2P49MWnxQijxSqIMDEtZ3/view?usp=drive_link",
    color: "bg-accent text-white"
  },
  {
    title: "C Programming",
    issuer: "Procedural Programming",
    category: "Programming",
    icon: <Terminal size={20} strokeWidth={2.5} />,
    link: "https://drive.google.com/file/d/14uN5iQNcL5wxeNE4LOiVsj18NbjeSbvP/view?usp=drive_link",
    color: "bg-secondary text-white"
  },
  {
    title: "C++ Programming",
    issuer: "OOP & Data Structures",
    category: "Programming",
    icon: <Code size={20} strokeWidth={2.5} />,
    link: "https://drive.google.com/file/d/1U0Sn-BuB7aoNyqeqYcEDMVHReEUtm08y/view?usp=drive_link",
    color: "bg-quaternary text-foreground"
  },
  {
    title: "MySQL Database",
    issuer: "Relational Databases & SQL",
    category: "Development",
    icon: <Database size={20} strokeWidth={2.5} />,
    link: "https://drive.google.com/file/d/1NyrnIWAQXikALw0fUfuVHnwVXwuV8zsa/view?usp=drive_link",
    color: "bg-tertiary text-foreground"
  },
  {
    title: "PHP & MySQL Web App",
    issuer: "Backend Web Development",
    category: "Development",
    icon: <Monitor size={20} strokeWidth={2.5} />,
    link: "https://drive.google.com/file/d/1lqHA69IGVgdPLEEw8W7V6SnCmdnN8c1U/view?usp=drive_link",
    color: "bg-accent text-white"
  },
  {
    title: "AI for Beginners",
    issuer: "Artificial Intelligence Essentials",
    category: "AI & Emerging",
    icon: <Code size={20} strokeWidth={2.5} />,
    link: "https://drive.google.com/file/d/1omo3jglpNwgQFB7Cq3QU68fMWmXkQMYt/view?usp=drive_link",
    color: "bg-secondary text-white"
  },
  {
    title: "Master AI for Web App Dev",
    issuer: "AI Integration in Web Apps",
    category: "AI & Emerging",
    icon: <Laptop size={20} strokeWidth={2.5} />,
    link: "https://drive.google.com/file/d/1otAtxho_3WpLMCtCfmvY2B0rks6nbBTj/view?usp=drive_link",
    color: "bg-quaternary text-foreground"
  }
];

const categories = ["All", "Development", "Programming", "Experience", "AI & Emerging"];

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCertificates = selectedCategory === "All"
    ? certificates
    : certificates.filter(c => c.category === selectedCategory);

  return (
    <section className="section py-20 px-6 md:px-12 max-w-6xl mx-auto relative overflow-hidden scroll-mt-24" id="certificates">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-quaternary/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="flex flex-col items-center">
        <h2 className="section-title text-4xl md:text-5xl font-black font-heading tracking-tight text-center mb-2">
          Certifications & <span className="text-accent underline decoration-4 decoration-quaternary">Achievements</span>
        </h2>
        <span className="section-subtitle text-center mb-5">
        </span>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-black border-2 border-foreground transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-accent text-white shadow-hard translate-x-[-2px] translate-y-[-2px]'
                  : 'bg-white text-foreground hover:bg-muted hover:shadow-sm'
              }`}
            >
              {cat}
              <span className="ml-1.5 opacity-70 text-[11px]">
                ({cat === "All" ? certificates.length : certificates.filter(c => c.category === cat).length})
              </span>
            </button>
          ))}
        </div>

        {/* Certificate Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          <AnimatePresence>
            {filteredCertificates.map((cert, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.4, delay: index * 0.04 }}
                key={cert.title}
                className="h-full"
              >
                <div className="bg-white border-3 border-foreground rounded-3xl p-6 shadow-hard hover:-translate-y-1.5 hover:shadow-hard-hover transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden">
                  
                  {/* Top Bar inside Card */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {/* Icon squircle */}
                      <div className={`w-12 h-12 rounded-2xl ${cert.color} border-2 border-foreground shadow-sm flex items-center justify-center group-hover:rotate-6 transition-transform`}>
                        {cert.icon}
                      </div>

                      {/* Verified Badge */}
                      <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-1 bg-muted border border-foreground rounded-full text-foreground/80">
                        <ShieldCheck size={13} className="text-accent" /> Verified
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-black text-foreground font-heading mb-1 leading-snug group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>
                    
                    <p className="text-xs font-extrabold text-mutedForeground uppercase tracking-wider mb-4">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t-2 border-foreground/10">
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 text-xs font-black text-foreground bg-muted hover:bg-accent hover:text-white px-4 py-2.5 rounded-xl border-2 border-foreground shadow-sm hover:shadow-hard transition-all duration-200"
                    >
                      <span>View Credential</span>
                      <ArrowUpRight size={15} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Certificates;
