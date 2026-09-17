import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Shuffle from './Shuffle';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white pt-16 pb-12 mt-24 relative overflow-hidden border-t-4 border-foreground">
      {/* Decorative Top Accent Bar */}
      <div className="absolute top-0 left-0 w-full h-3 flex">
        <div className="w-1/4 bg-accent"></div>
        <div className="w-1/4 bg-secondary"></div>
        <div className="w-1/4 bg-tertiary"></div>
        <div className="w-1/4 bg-quaternary"></div>
      </div>

      {/* Background Pattern & Ambient Glow */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 text-center flex flex-col gap-8 items-center relative z-10">
        
        {/* Social Icons Row */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex gap-5 text-2xl"
        >
          <a 
            href="https://www.linkedin.com/in/sahil-jadhav-1628sj/" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="LinkedIn Profile"
            className="cursor-target w-14 h-14 flex items-center justify-center bg-[#0A66C2] text-white rounded-2xl border-3 border-foreground shadow-hard hover:-translate-y-1.5 active:translate-y-0 transition-all duration-200"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/Sahil1617" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="GitHub Profile"
            className="cursor-target w-14 h-14 flex items-center justify-center bg-white text-foreground rounded-2xl border-3 border-foreground shadow-hard hover:-translate-y-1.5 active:translate-y-0 transition-all duration-200"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.instagram.com/sahilvj_678/" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Instagram Profile"
            className="cursor-target w-14 h-14 flex items-center justify-center bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#833AB4] text-white rounded-2xl border-3 border-foreground shadow-hard hover:-translate-y-1.5 active:translate-y-0 transition-all duration-200"
          >
            <FaInstagram />
          </a>
        </motion.div>

        {/* Copyright Badge (Straight Horizontal with Shuffle text) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white text-foreground px-7 py-3 rounded-2xl border-3 border-foreground shadow-hard rotate-0 transition-all duration-300"
        >
          <strong className="font-heading font-black text-base md:text-lg tracking-tight inline-flex items-center gap-1.5">
            <span>© {new Date().getFullYear()}</span>
            <Shuffle
              text="Sahil Jadhav"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.01}
              rootMargin="0px"
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
              className="inline-block text-accent font-black tracking-tight cursor-target"
            />
          </strong>
        </motion.div>

        {/* Contact Info Pills (Straight Horizontal) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm font-extrabold tracking-wider uppercase flex flex-col md:flex-row gap-4 items-center"
        >
          <a 
            href="tel:+918767953954"
            className="cursor-target bg-tertiary text-foreground px-5 py-2.5 rounded-xl border-3 border-foreground shadow-hard rotate-0 hover:-translate-y-1 transition-all duration-200"
          >
            +91-8767953954
          </a>
          
          <span className="hidden md:inline-block text-tertiary text-xl font-black animate-pulse select-none">
            ✦
          </span>
          
          <a 
            href="mailto:sahiljadhav1617@gmail.com"
            className="cursor-target bg-quaternary text-foreground px-5 py-2.5 rounded-xl border-3 border-foreground shadow-hard rotate-0 hover:-translate-y-1 transition-all duration-200"
          >
            sahiljadhav1617@gmail.com
          </a>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
