import { motion } from 'framer-motion';
import { FileText, Sparkles, Code2, Rocket, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import CodeTerminal from './CodeTerminal';

const About = () => {
  const highlightBadges = [
    { text: "MERN Stack", color: "bg-tertiary" },
    { text: "System Design", color: "bg-quaternary" },
    { text: "DSA & Algorithms", color: "bg-secondary text-white" },
    { text: "Real-time Web", color: "bg-accent text-white" },
    { text: "Scalable Architecture", color: "bg-muted" },
  ];

  return (
    <section id="about" className="section py-20 px-6 md:px-12 max-w-6xl mx-auto relative overflow-hidden scroll-mt-24">
      {/* Background Decorative Blobs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-tertiary/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="section-title text-4xl md:text-5xl font-black font-heading tracking-tight">
            About <span className="text-accent underline decoration-4 decoration-tertiary">Me</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Code Terminal (5 cols) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md">
              <CodeTerminal />

              {/* Floating Badge - Top Right */}
  

              {/* Floating Badge - Bottom Left */}
              <div className="absolute -bottom-5 -left-4 bg-secondary text-white border-3 border-foreground px-4 py-2 rounded-2xl shadow-hard font-heading font-extrabold text-xs md:text-sm flex items-center gap-1.5 transform -rotate-3 z-20">
                <Code2 className="w-4 h-4 text-white" />
                <span>MERN & System Design</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Bio Card */}
            <div className="bg-white border-4 border-foreground rounded-3xl p-6 md:p-8 shadow-hard relative overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-secondary border border-foreground"></span>
                <span className="w-3 h-3 rounded-full bg-tertiary border border-foreground"></span>
                <span className="w-3 h-3 rounded-full bg-quaternary border border-foreground"></span>
                <span className="text-xs font-bold text-mutedForeground uppercase tracking-wider ml-2">WHO I AM</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-foreground mb-4 leading-snug">
                Building scalable web applications with analytical problem-solving.
              </h3>

              <p className="text-base md:text-lg text-foreground/90 font-medium leading-relaxed mb-6">
                I'm an innovative Software Developer proficient in the <strong className="text-accent underline decoration-2">MERN stack</strong>, Java, C, and C++. I specialize in engineering real-time web applications that deliver optimized performance and seamless user experiences. With a solid foundation in data structures and system architecture, I craft robust software built for scale.
              </p>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t-2 border-foreground/10">
                {highlightBadges.map((badge, index) => (
                  <span 
                    key={index}
                    className={`text-xs md:text-sm font-bold px-3 py-1.5 border-2 border-foreground rounded-xl shadow-sm hover:scale-105 transition-transform cursor-default ${badge.color}`}
                  >
                    {badge.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats Cards Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              
              <div className="bg-tertiary border-3 border-foreground rounded-2xl p-4 shadow-hard flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform">
                <Award className="w-6 h-6 text-foreground mb-1" />
                <h4 className="text-3xl font-black font-heading text-foreground">10+</h4>
                <p className="text-xs font-extrabold uppercase text-foreground/80 tracking-wide mt-0.5">Projects Built</p>
              </div>

              <div className="bg-quaternary border-3 border-foreground rounded-2xl p-4 shadow-hard flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-foreground mb-1" />
                <h4 className="text-3xl font-black font-heading text-foreground">15+</h4>
                <p className="text-xs font-extrabold uppercase text-foreground/80 tracking-wide mt-0.5">Certifications</p>
              </div>

              <div className="col-span-2 md:col-span-1 bg-secondary text-white border-3 border-foreground rounded-2xl p-4 shadow-hard flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform">
                <Sparkles className="w-6 h-6 text-white mb-1" />
                <h4 className="text-3xl font-black font-heading text-white">100%</h4>
                <p className="text-xs font-extrabold uppercase text-white/90 tracking-wide mt-0.5">Dedication</p>
              </div>

            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <a 
                href="https://drive.google.com/file/d/1Om3mAOHWc8H56_ogHkqISL6NQ1k90f8B/view?usp=drive_link" 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary bg-accent hover:bg-accent/90 text-white shadow-hard hover:shadow-hard-hover active:shadow-hard-active transition-all"
              >
                <FileText className="w-5 h-5" strokeWidth={2.5} /> View Resume
              </a>

              <a 
                href="#portfolio" 
                className="btn-secondary shadow-hard hover:shadow-hard-hover active:shadow-hard-active transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </a>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;
