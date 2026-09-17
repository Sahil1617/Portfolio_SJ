import React from 'react';
import { motion } from 'framer-motion';

const LogoLoop = ({ items = [], speed = 25 }) => {
  if (!items || items.length === 0) return null;

  // We duplicate the items enough times to ensure it covers the screen width infinitely
  const multipliedItems = [...items, ...items, ...items, ...items];
  
  return (
    <div className="relative overflow-hidden w-full py-6 border-y-4 border-foreground bg-white shadow-soft-hard mt-12">
      {/* Optional: fade out edges */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
      
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
      >
        {multipliedItems.map((logo, index) => (
          <a
            key={index}
            href={logo.href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 text-foreground hover:text-accent transition-colors shrink-0 group"
          >
            <div className="text-4xl md:text-5xl drop-shadow-sm group-hover:scale-110 transition-transform">
              {logo.node}
            </div>
            {logo.title && (
              <span className="text-xl md:text-2xl font-heading font-bold whitespace-nowrap">
                {logo.title}
              </span>
            )}
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoLoop;
