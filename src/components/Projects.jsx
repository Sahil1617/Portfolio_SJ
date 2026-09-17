import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, FolderGit2, Sparkles } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    id: 1,
    title: "Feeding Hands",
    category: "Web Apps",
    desc: "A food redistribution platform to reduce wastage and fight hunger by connecting donors with shelters.",
    img: "/Assets/fh.png",
    link: "https://github.com/Sahil1617/Feeding_Hands",
    tags: ["React", "Node.js", "Social Good"],
    badgeColor: "bg-tertiary text-foreground"
  },
  {
    id: 2,
    title: "Nexa AI",
    category: "AI & ML",
    desc: "Intelligent chat assistant powered by OpenAI's GPT-4o mini model with real-time response generation.",
    img: "/Assets/nai.png",
    link: "https://nexa-ai-1.netlify.app/",
    tags: ["OpenAI", "React", "TailwindCSS"],
    badgeColor: "bg-accent text-white"
  },
  {
    id: 3,
    title: "Vision Boost",
    category: "AI & ML",
    desc: "AI Image Enhancer that improves the quality, clarity, and sharpness of photos instantly.",
    img: "/Assets/vb.png",
    link: "https://visionboostai.onrender.com/",
    tags: ["AI Model", "Python", "Image Processing"],
    badgeColor: "bg-secondary text-white"
  },
  {
    id: 4,
    title: "Books Hub",
    category: "Web Apps",
    desc: "A full-featured Library Management System built using PHP and MySQL with administrative control.",
    img: "/Assets/php.png",
    link: "https://github.com/Sahil1617/Books-Hub",
    tags: ["PHP", "MySQL", "Library System"],
    badgeColor: "bg-quaternary text-foreground"
  },
  {
    id: 5,
    title: "Weather API",
    category: "APIs & Tools",
    desc: "A fast RESTful API service providing real-time weather metrics and forecast data worldwide.",
    img: "/Assets/wa.png",
    link: "https://sahil1617.github.io/Weather-API/",
    tags: ["JavaScript", "REST API", "Weather"],
    badgeColor: "bg-tertiary text-foreground"
  },
  {
    id: 6,
    title: "Wanderlust",
    category: "Web Apps",
    desc: "A complete travel companion app for discovering exotic destinations and booking hotel stays.",
    img: "/Assets/wn.png",
    link: "https://wanderlust-8qok.onrender.com",
    tags: ["Full Stack", "MongoDB", "Express"],
    badgeColor: "bg-accent text-white"
  },
  {
    id: 7,
    title: "Cookify India",
    category: "Web Apps",
    desc: "An interactive platform for discovering, saving, and sharing authentic traditional Indian recipes.",
    img: "/Assets/ci.png",
    link: "https://cookifyindia.onrender.com/",
    tags: ["Node.js", "Express", "Recipes"],
    badgeColor: "bg-secondary text-white"
  }
];

const categories = ["All", "AI & ML", "Web Apps", "APIs & Tools"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="section py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden scroll-mt-24" id="portfolio">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="flex flex-col items-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="section-title text-4xl md:text-5xl font-black font-heading tracking-tight mb-2">
            Featured <span className="text-accent underline decoration-4 decoration-tertiary">Projects</span>
          </h2>
        </motion.div>

        {/* Swiper Carousel Container */}
        <div className="w-full relative px-2 md:px-6">
          <Swiper
            key={selectedCategory}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={28}
            slidesPerView={1}
            navigation={{
              prevEl: '#swiper-prev-proj',
              nextEl: '#swiper-next-proj',
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-16 !overflow-visible"
          >
            {filteredProjects.map((project, index) => (
              <SwiperSlide key={project.id || index} className="h-auto pb-4">
                <div className="bg-white border-3 border-foreground rounded-3xl overflow-hidden shadow-hard hover:-translate-y-2 hover:shadow-hard-hover transition-all duration-300 flex flex-col h-full group relative">
                  
                  {/* Browser Style Window Header */}
                  <div className="bg-muted px-4 py-2.5 border-b-3 border-foreground flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-foreground/30 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-foreground/30 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-foreground/30 inline-block"></span>
                    </div>
                    <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full border border-foreground ${project.badgeColor}`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Project Screenshot / Thumbnail Area */}
                  <div className="relative h-48 border-b-3 border-foreground overflow-hidden bg-slate-900 group">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    
                    {/* Fallback Graphic if Image Missing */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 -z-10 flex items-center justify-center">
                      <FolderGit2 className="text-white/20 w-16 h-16" />
                    </div>

                    {/* Hover Link Overlay */}
                    <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="cursor-target bg-white text-foreground font-black px-5 py-2.5 rounded-2xl border-2 border-foreground shadow-hard hover:-translate-y-1 transition-transform flex items-center gap-2 text-xs uppercase tracking-wider"
                      >
                        Visit Project <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-black text-foreground font-heading mb-2 group-hover:text-accent transition-colors flex items-center justify-between">
                        {project.title}
                      </h3>
                      
                      <p className="text-xs font-medium text-mutedForeground mb-4 leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    <div>
                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx}
                            className="text-[11px] font-extrabold bg-muted text-foreground px-2.5 py-0.5 rounded-md border border-foreground/30"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="cursor-target w-full inline-flex items-center justify-center gap-2 font-black text-xs text-foreground bg-tertiary hover:bg-accent hover:text-white px-4 py-2.5 rounded-xl border-2 border-foreground shadow-sm hover:shadow-hard transition-all duration-200 uppercase tracking-wider"
                      >
                        <span>Explore Project</span>
                        <ArrowUpRight size={15} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Neo-Brutalist Swiper Controls */}
          <div className="flex items-center justify-center gap-4 mt-2">
            <button 
              id="swiper-prev-proj" 
              aria-label="Previous Slide"
              className="cursor-target w-12 h-12 bg-white text-foreground rounded-2xl border-3 border-foreground shadow-hard hover:bg-tertiary hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center"
            >
              <ChevronLeft size={24} strokeWidth={3} />
            </button>
            <button 
              id="swiper-next-proj" 
              aria-label="Next Slide"
              className="cursor-target w-12 h-12 bg-white text-foreground rounded-2xl border-3 border-foreground shadow-hard hover:bg-tertiary hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center"
            >
              <ChevronRight size={24} strokeWidth={3} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;

