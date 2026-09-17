import { useState, useEffect } from 'react';
import { Mail, ChevronDown } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const Hero = () => {
  const [text, setText] = useState('');
  
  const roles = [
    "Full Stack Developer",
    "Computer Engineer",
    "Enthusiastic Programmer",
    "Problem Solver"
  ];

  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Convert mouse position to rotation
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 30, stiffness: 100 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { damping: 30, stiffness: 100 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize to -0.5 to 0.5
    mouseX.set(x / rect.width - 0.5);
    mouseY.set(y / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingTimeout;

    const type = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (!isDeleting && currentCharIndex < currentRole.length) {
        setText(currentRole.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        typingTimeout = setTimeout(type, 100);
      } else if (isDeleting && currentCharIndex > 0) {
        setText(currentRole.substring(0, currentCharIndex - 1));
        currentCharIndex--;
        typingTimeout = setTimeout(type, 50);
      } else if (!isDeleting && currentCharIndex === currentRole.length) {
        if (currentRoleIndex === roles.length - 1) {
          // Stop at the last role
          return;
        }
        isDeleting = true;
        typingTimeout = setTimeout(type, 1500); // Pause before deleting
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex++;
        typingTimeout = setTimeout(type, 500); // Pause before typing next
      }
    };

    typingTimeout = setTimeout(type, 1500); // Initial delay

    return () => clearTimeout(typingTimeout);
  }, []);

  return (
    <section 
      id="home" 
      className="section pt-32 pb-20 perspective-[1000px] overflow-visible scroll-mt-24"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        className="grid md:grid-cols-2 gap-12 items-center relative z-10"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
          className="order-2 md:order-1 flex flex-col gap-8 relative"
          style={{ transform: "translateZ(30px)" }}
        >
          {/* Big Yellow Circle Decoration */}
          <div className="absolute -left-12 -top-12 w-64 h-64 bg-tertiary rounded-full -z-10 animate-blob"></div>
          
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
              Hi, I'm <br/><span className="text-accent underline decoration-4 decoration-foreground">Sahil Jadhav</span>
            </h1>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground bg-white inline-block px-4 py-2 border-2 border-foreground shadow-hard rounded-lg transform -rotate-1 mt-4">
              {text}
              <span className="animate-pulse">|</span>
            </h3>
          </div>

          <p className="text-xl text-foreground font-medium max-w-md bg-white/50 backdrop-blur-sm p-4 rounded-xl border-2 border-foreground shadow-soft-hard">
            I'm a passionate Full Stack Developer with expertise in the MERN stack, building efficient, scalable, and user-focused web applications.
          </p>

          <div className="flex items-center gap-6 mt-4">
            <a href="#contact" className="btn-primary">
              <Mail className="w-5 h-5" strokeWidth={3} /> Let's Talk!
            </a>
            
            {/* Socials */}
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/sahil-jadhav-1628sj/" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-white border-2 border-foreground rounded-full hover:bg-quaternary hover:text-foreground transition-colors shadow-hard hover:-translate-y-1 hover:shadow-hard-hover active:translate-y-0 active:shadow-hard-active text-xl">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Sahil1617" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-white border-2 border-foreground rounded-full hover:bg-secondary hover:text-white transition-colors shadow-hard hover:-translate-y-1 hover:shadow-hard-hover active:translate-y-0 active:shadow-hard-active text-xl">
                <FaGithub />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Blob Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center items-center relative"
          style={{ transform: "translateZ(50px)" }}
        >
          {/* Background Dotted Square */}
          <div className="absolute right-0 top-0 w-3/4 h-3/4 bg-dot-pattern border-2 border-foreground rounded-3xl -z-10 translate-x-8 -translate-y-8 shadow-soft-hard-pink transform rotate-3"></div>
          
          <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] bg-secondary rounded-blob-1 border-4 border-foreground shadow-hard overflow-hidden animate-wiggle" style={{ animationDuration: '6s' }}>
            {/* The Image inside the Blob Mask */}
            <img src="/Assets/Icons/Sahil.JPG" alt="Sahil Jadhav" className="w-full h-full object-cover object-top scale-110" />
          </div>
          
          {/* Floating decorative shapes */}
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent rounded-full border-2 border-foreground shadow-hard"></div>
          <div className="absolute top-12 -right-4 w-12 h-12 bg-quaternary rotate-45 border-2 border-foreground shadow-hard"></div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <a href="#about" className="w-12 h-12 flex items-center justify-center bg-white border-2 border-foreground rounded-full shadow-hard hover:bg-tertiary transition-colors animate-bounce">
          <ChevronDown strokeWidth={3} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
