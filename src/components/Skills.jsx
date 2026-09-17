import { motion } from 'framer-motion';
import LogoLoop from './LogoLoop';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiJavascript, SiPython, SiMongodb, SiNodedotjs, 
  SiMysql, SiDocker, SiGit, 
  SiGithub, SiHtml5, SiCss, SiExpress, SiPostman,
  SiC, SiCplusplus
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { Globe, Sparkles } from 'lucide-react';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org/" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com/" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org/" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com/" },
  { node: <FaAws />, title: "AWS", href: "https://aws.amazon.com/" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com/" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com/" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com/" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiExpress />, title: "Express JS", href: "https://expressjs.com/" },
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com/" },
  { node: <FaJava />, title: "Java", href: "https://www.java.com/" }
];

const skillsData = [
  { name: "Java", icon: <FaJava className="text-[#ED8B00] text-xl" />, color: "bg-tertiary text-foreground" },
  { name: "C", icon: <SiC className="text-[#A8B9CC] text-xl" />, color: "bg-white text-foreground" },
  { name: "C++", icon: <SiCplusplus className="text-[#00599C] text-xl" />, color: "bg-quaternary text-foreground" },
  { name: "Python", icon: <SiPython className="text-[#3776AB] text-xl" />, color: "bg-accent text-white" },
  { name: "HTML 5", icon: <SiHtml5 className="text-[#E34F26] text-xl" />, color: "bg-secondary text-white" },
  { name: "CSS", icon: <SiCss className="text-[#1572B6] text-xl" />, color: "bg-white text-foreground" },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] text-xl" />, color: "bg-tertiary text-foreground" },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] text-xl" />, color: "bg-accent text-white" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] text-xl" />, color: "bg-quaternary text-foreground" },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] text-xl" />, color: "bg-secondary text-white" },
  { name: "Express JS", icon: <SiExpress className="text-foreground text-xl" />, color: "bg-white text-foreground" },
  { name: "React", icon: <SiReact className="text-[#61DAFB] text-xl" />, color: "bg-accent text-white" },
  { name: "Next.js", icon: <SiNextdotjs className="text-foreground text-xl" />, color: "bg-tertiary text-foreground" },
  { name: "Node JS", icon: <SiNodedotjs className="text-[#339933] text-xl" />, color: "bg-quaternary text-foreground" },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1] text-xl" />, color: "bg-secondary text-white" },
  { name: "Rest APIs", icon: <Globe className="text-[#8B5CF6] text-xl" />, color: "bg-white text-foreground" },
  { name: "Git", icon: <SiGit className="text-[#F05032] text-xl" />, color: "bg-tertiary text-foreground" },
  { name: "GitHub", icon: <SiGithub className="text-foreground text-xl" />, color: "bg-quaternary text-foreground" },
  { name: "Postman", icon: <SiPostman className="text-[#FF6C37] text-xl" />, color: "bg-white text-foreground" },
  { name: "AWS", icon: <FaAws className="text-[#FF9900] text-xl" />, color: "bg-accent text-white" },
  { name: "Docker", icon: <SiDocker className="text-[#2496ED] text-xl" />, color: "bg-secondary text-white" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", bounce: 0.4 }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="section relative py-20 px-6 max-w-7xl mx-auto scroll-mt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="relative z-10"
      >
        <div className="flex flex-col items-center mb-4 text-center">
          <h2 className="section-title text-4xl md:text-5xl font-black font-heading tracking-tight">
            Skills & <span className="text-accent underline decoration-4 decoration-tertiary">Technologies</span>
          </h2>
        </div>

        {/* Revamped Attractive Window Box */}
        <div className="max-w-5xl mx-auto mt-10 bg-white border-4 border-foreground rounded-3xl overflow-hidden shadow-hard relative">
          
          {/* Retro Window Top Header Bar */}
          <div className="bg-muted px-6 py-3 border-b-4 border-foreground flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-foreground/30 inline-block"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-foreground/30 inline-block"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-foreground/30 inline-block"></span>
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-foreground bg-white px-3.5 py-1 rounded-full border border-foreground flex items-center gap-1.5">
              <Sparkles size={13} className="text-accent" /> Tooling & Frameworks
            </span>
          </div>

          {/* Interactive Skill Badges Container */}
          <div className="p-6 md:p-10 flex flex-wrap justify-center gap-3.5 md:gap-4 bg-dot-pattern/30">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.06, 
                  y: -4,
                  transition: { type: "spring", stiffness: 400, damping: 15 } 
                }}
                className={`cursor-target flex items-center gap-2.5 border-3 border-foreground px-5 py-2.5 rounded-2xl shadow-hard font-heading font-black text-sm md:text-base transition-all duration-200 select-none ${skill.color}`}
              >
                <span className="p-1 rounded-lg bg-white/90 border border-foreground/20 shadow-xs flex items-center justify-center">
                  {skill.icon}
                </span>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
      
      {/* LogoLoop below the skills grid */}
      <div className="relative z-20 mt-12 w-screen left-1/2 -translate-x-1/2">
        <LogoLoop items={techLogos} />
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full border-8 border-tertiary border-dashed opacity-50 animate-spin -z-10" style={{ animationDuration: '10s' }}></div>
      <div className="absolute bottom-1/4 right-10 w-20 h-20 bg-secondary rounded-blob-2 border-2 border-foreground shadow-hard transform rotate-12 -z-10"></div>
    </section>
  );
};

export default Skills;

