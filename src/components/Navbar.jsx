import { useState, useEffect } from 'react';
import { Menu, X, Home, User, FileText, Briefcase, Award, Image as ImageIcon, Mail, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'qualification', 'certificates', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', icon: <Home size={15} /> },
    { name: 'About', href: '#about', id: 'about', icon: <User size={15} /> },
    { name: 'Skills', href: '#skills', id: 'skills', icon: <FileText size={15} /> },
    { name: 'Experience', href: '#qualification', id: 'qualification', icon: <Briefcase size={15} /> },
    { name: 'Certificates', href: '#certificates', id: 'certificates', icon: <Award size={15} /> },
    { name: 'Projects', href: '#portfolio', id: 'portfolio', icon: <ImageIcon size={15} /> },
    { name: 'Contact', href: '#contact', id: 'contact', icon: <Mail size={15} /> },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 px-3 sm:px-6 md:px-8 py-3 transition-all duration-300 pointer-events-none">
      <motion.div 
        layout
        className={`w-full bg-white/95 backdrop-blur-md border-2 border-foreground rounded-2xl md:rounded-full px-4 sm:px-6 py-2.5 shadow-hard flex flex-col md:flex-row md:items-center justify-between pointer-events-auto transition-all duration-300 ${scrolled ? 'shadow-hard-hover bg-white/100' : ''}`}
      >
        {/* Top Header Row (Logo + Mobile Hamburger) */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-tertiary border-2 border-foreground shadow-[2px_2px_0px_0px_#1E293B] flex items-center justify-center font-extrabold text-foreground font-heading group-hover:-rotate-6 transition-transform text-sm md:text-base">
              SJ
            </div>
            <span className="font-extrabold text-lg md:text-xl text-foreground font-heading tracking-tight">
              Sahil<span className="text-accent">.</span>
            </span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-2 border-foreground rounded-xl bg-tertiary text-foreground hover:bg-quaternary transition-colors shadow-[2px_2px_0px_0px_#1E293B] active:translate-x-[1px] active:translate-y-[1px]"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X strokeWidth={2.5} size={18} /> : <Menu strokeWidth={2.5} size={18} />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-muted/60 p-1.5 rounded-full border-2 border-foreground/10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-1.5 rounded-full text-xs lg:text-sm font-extrabold transition-all duration-200 flex items-center gap-1.5 border-2 ${
                  isActive
                    ? 'bg-accent text-white border-foreground shadow-[2px_2px_0px_0px_#1E293B]'
                    : 'text-foreground border-transparent hover:border-foreground hover:bg-white hover:shadow-[2px_2px_0px_0px_#1E293B]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-2 text-xs lg:text-sm font-extrabold px-5 py-2 bg-quaternary text-foreground rounded-full border-2 border-foreground shadow-[2px_2px_0px_0px_#1E293B] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#1E293B] active:translate-y-0 transition-all"
          >
            <Sparkles size={16} strokeWidth={2.5} /> Say Hi!
          </a>
        </div>

        {/* Mobile Expanded Menu inside Unified Container */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="w-full md:hidden pt-3.5 mt-2.5 border-t-2 border-foreground/10 flex flex-col gap-2 overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center gap-2.5 p-2.5 rounded-xl border-2 transition-all font-extrabold text-xs sm:text-sm ${
                        isActive
                          ? 'bg-accent text-white border-foreground shadow-[2px_2px_0px_0px_#1E293B]'
                          : 'bg-muted/40 text-foreground border-foreground/20 hover:border-foreground hover:bg-white hover:shadow-[2px_2px_0px_0px_#1E293B]'
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center border-2 ${
                        isActive ? 'bg-white text-accent border-white' : 'bg-white text-foreground border-foreground shadow-sm'
                      }`}>
                        {link.icon}
                      </div>
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </div>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 p-2.5 mt-1 rounded-xl border-2 border-foreground bg-quaternary text-foreground font-extrabold text-xs sm:text-sm shadow-[2px_2px_0px_0px_#1E293B] active:translate-x-[1px] active:translate-y-[1px]"
              >
                <Sparkles size={16} strokeWidth={2.5} /> Say Hi!
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Navbar;
