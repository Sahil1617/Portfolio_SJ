import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, RotateCcw, Copy, Check, Sparkles, Trash2, Send, Maximize2, Minimize2, X, Command, Code2, User, Briefcase, Mail, Cpu } from 'lucide-react';

const defaultProfileJson = `{
  "developer": "Sahil Jadhav",
  "role": "Full-Stack Engineer",
  "location": "Pune, India 📍",
  "status": "Available for Hire 🚀",
  "techStack": {
    "frontend": ["React.js", "Next.js", "TailwindCSS", "TypeScript"],
    "backend": ["Node.js", "Express.js", "REST APIs", "WebSockets"],
    "database": ["MongoDB", "MySQL"],
    "languages": ["Java", "C++", "JavaScript", "C"]
  },
  "contact": {
    "email": "sahiljadhav1617@gmail.com",
    "phone": "+91-8767953954"
  }
}`;

const CodeTerminal = () => {
  const [codeContent, setCodeContent] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [copied, setCopied] = useState(false);
  const [commandInput, setCommandInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const textIndexRef = useRef(0);
  const timeoutRef = useRef(null);
  const terminalEndRef = useRef(null);
  const textareaRef = useRef(null);
  const modalTextareaRef = useRef(null);

  // Initial auto-typing effect
  useEffect(() => {
    textIndexRef.current = 0;
    setCodeContent('');
    setIsTyping(true);

    const typeNextChar = () => {
      if (textIndexRef.current < defaultProfileJson.length) {
        setCodeContent(defaultProfileJson.slice(0, textIndexRef.current + 1));
        textIndexRef.current += 1;
        const char = defaultProfileJson[textIndexRef.current - 1];
        const delay = char === '\n' ? 60 : char === ':' ? 40 : Math.random() * 15 + 10;
        timeoutRef.current = setTimeout(typeNextChar, delay);
      } else {
        setIsTyping(false);
      }
    };

    timeoutRef.current = setTimeout(typeNextChar, 100);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Listen for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isExpanded]);

  // Focus textarea when modal opens
  useEffect(() => {
    if (isExpanded) {
      setTimeout(() => {
        modalTextareaRef.current?.focus();
      }, 200);
    }
  }, [isExpanded]);

  const handleOpenModal = () => {
    setIsExpanded(true);
  };

  const handleRestart = (e) => {
    e?.stopPropagation();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    textIndexRef.current = 0;
    setCodeContent('');
    setIsTyping(true);
    setTerminalLogs([]);

    const typeNextChar = () => {
      if (textIndexRef.current < defaultProfileJson.length) {
        setCodeContent(defaultProfileJson.slice(0, textIndexRef.current + 1));
        textIndexRef.current += 1;
        const char = defaultProfileJson[textIndexRef.current - 1];
        const delay = char === '\n' ? 50 : char === ':' ? 30 : Math.random() * 15 + 10;
        timeoutRef.current = setTimeout(typeNextChar, delay);
      } else {
        setIsTyping(false);
      }
    };

    timeoutRef.current = setTimeout(typeNextChar, 50);
  };

  const handleClear = (e) => {
    e?.stopPropagation();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsTyping(false);
    setCodeContent('{\n  // Terminal output cleared. Type custom code or commands below!\n}');
    setTerminalLogs([]);
  };

  const handleCopy = (e) => {
    e?.stopPropagation();
    navigator.clipboard.writeText(codeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTextareaChange = (e) => {
    if (isTyping) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsTyping(false);
    }
    setCodeContent(e.target.value);
  };

  // Comprehensive command parser & details generator
  const getDetailedResponseForQuery = (cmdStr) => {
    const query = cmdStr.trim().toLowerCase();

    if (!query) return null;

    // 1. HELP
    if (query === 'help' || query === 'commands' || query === 'man') {
      return {
        title: "AVAILABLE SYSTEM COMMANDS",
        type: "help",
        lines: [
          "- about / whoami    - Learn more about Sahil's background & role",
          "- skills / stack    - Detailed list of technologies, frameworks & tools",
          "- projects / work   - Overview of key engineering projects built",
          "- experience        - Work history, internships & education details",
          "- contact / hire    - Email, phone, location & hiring details",
          "- resume            - Quick link & status of resume",
          "- clear / reset     - Clear terminal logs or reset initial code view"
        ]
      };
    }

    // 2. ABOUT / WHOAMI / BIO
    if (query.includes('about') || query.includes('whoami') || query.includes('bio') || query.includes('sahil')) {
      return {
        title: "SAHIL JADHAV - ABOUT ME",
        type: "info",
        lines: [
          "- Name: Sahil Jadhav",
          "- Role: Software Developer",
          "- Specialization: MERN Stack, System Design, DSA & Algorithms",
          "- Bio: I'm an innovative Software Developer proficient in the MERN stack, Java, C, and C++.",
          "- Focus: I specialize in engineering real-time web applications that deliver optimized performance and seamless user experiences.",
          "- Approach: With a solid foundation in data structures and system architecture, I craft robust software built for scale."
        ]
      };
    }

    // 3. SKILLS / STACK / TECH
    if (query.includes('skill') || query.includes('stack') || query.includes('tech') || query.includes('react') || query.includes('node') || query.includes('java') || query.includes('c++') || query.includes('mern')) {
      return {
        title: "SKILLS & TECHNOLOGIES",
        type: "skills",
        lines: [
          "- Frontend: React, Next.js, HTML 5, CSS, JavaScript, TypeScript, Tailwind CSS",
          "- Backend: Node JS, Express JS, Rest APIs",
          "- Databases: MongoDB, MySQL",
          "- Languages: Java, C, C++, Python",
          "- Tools & Cloud: Git, GitHub, Postman, AWS, Docker"
        ]
      };
    }

    // 4. PROJECTS / WORK / PORTFOLIO
    if (query.includes('project') || query.includes('work') || query.includes('portfolio') || query.includes('app')) {
      return {
        title: "FEATURED PROJECTS",
        type: "projects",
        lines: [
          "1. Feeding Hands: Food redistribution platform (React, Node.js)",
          "2. Nexa AI: Intelligent chat assistant using GPT-4o mini (OpenAI, React)",
          "3. Vision Boost: AI Image Enhancer for photo quality (Python, AI Model)",
          "4. Books Hub: Full-featured Library Management System (PHP, MySQL)",
          "5. Weather API: Fast RESTful API for real-time weather (JavaScript)",
          "6. Wanderlust: Complete travel companion app (MongoDB, Express)",
          "7. Cookify India: Traditional Indian recipes sharing platform (Node.js)"
        ]
      };
    }

    // 5. EXPERIENCE / EDUCATION / QUALIFICATION
    if (query.includes('exp') || query.includes('education') || query.includes('college') || query.includes('qualification') || query.includes('degree')) {
      return {
        title: "QUALIFICATION & EXPERIENCE",
        type: "experience",
        lines: [
          "Work Experience:",
          "   - Software Engineer-I @ Dexpert Systems Pvt. Ltd. (Jul 2026 - Present)",
          "   - Software Engineer Intern @ Dexpert Systems Pvt. Ltd. (Jan 2026 - Jun 2026)",
          "   - Full-Stack Developer Intern @ DW Innovation Pvt. Ltd. (Sep 2025 - Dec 2025)",
          "   - Web Developer (MERN) @ EY-GDS & AICTE (Feb 2025 - Mar 2025)",
          "Education:",
          "   - Computer Engineering @ TCOER, Pune (8.84 CGPA) [2022 - 2026]",
          "   - Shri Chhatrapati Jr. College (80.69%) [2021 - 2022]",
          "   - Gurukul English School (92%) [2019 - 2020]"
        ]
      };
    }

    // 6. CONTACT / HIRE / EMAIL / PHONE / LOCATION
    if (query.includes('contact') || query.includes('hire') || query.includes('email') || query.includes('phone') || query.includes('call') || query.includes('mail') || query.includes('location') || query.includes('address')) {
      return {
        title: "GET IN TOUCH WITH SAHIL",
        type: "contact",
        lines: [
          "- Email: sahiljadhav1617@gmail.com",
          "- Phone: +91-8767953954",
          "- Location: Pune, India",
          "- LinkedIn: https://linkedin.com/in/sahil-jadhav",
          "- GitHub: https://github.com/Sahil1617",
          "- Feel free to reach out via the Message Box in the Contact section!"
        ]
      };
    }

    // 7. RESUME
    if (query.includes('resume') || query.includes('cv')) {
      return {
        title: "RESUME STATUS",
        type: "resume",
        lines: [
          "- Sahil's latest Software Engineer resume is attached to the portfolio.",
          "- Click the 'View Resume' button in the About section to preview or download."
        ]
      };
    }

    // 8. FALLBACK / GENERAL QUERY MATCHER
    return {
      title: `SEARCH RESULTS FOR: "${cmdStr}"`,
      type: "general",
      lines: [
        `Received command/query: "${cmdStr}"`,
        "- Sahil Jadhav is a Software Developer specializing in the MERN Stack, Java, C, and C++.",
        "- Quick Tip: Type 'help', 'skills', 'projects', 'experience', or 'contact' for full details!"
      ]
    };
  };

  const executeCommand = (cmdStr) => {
    if (!cmdStr.trim()) return;

    if (cmdStr.trim().toLowerCase() === 'clear') {
      setTerminalLogs([]);
      setCommandInput('');
      return;
    }

    const detailObj = getDetailedResponseForQuery(cmdStr);
    
    // Also update code editor content if desired or add to log
    setTerminalLogs(prev => [...prev, { command: cmdStr, data: detailObj }]);
    setCommandInput('');

    // Optional: Also reflect typed topic in the code window for full interactive feel!
    if (detailObj && detailObj.lines) {
      const codeViewText = `{\n  "query": "${cmdStr}",\n  "title": "${detailObj.title}",\n  "details": [\n${detailObj.lines.map(l => `    "${l.replace(/"/g, '\\"')}"`).join(',\n')}\n  ]\n}`;
      setCodeContent(codeViewText);
    }

    setTimeout(() => {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const runPresetCommand = (cmdText) => {
    setCommandInput(cmdText);
    executeCommand(cmdText);
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    executeCommand(commandInput);
  };

  // Syntax highlighter renderer for code editor view
  const renderHighlightedLines = (code) => {
    const lines = code.split('\n');
    return lines.map((line, lineIdx) => {
      return (
        <div key={lineIdx} className="table-row">
          <span className="table-cell text-slate-500 select-none pr-3 text-right text-xs font-mono opacity-50 w-6">
            {lineIdx + 1}
          </span>
          <span className="table-cell whitespace-pre font-mono text-xs md:text-sm leading-relaxed">
            {line.split(/("[^"]+":|"[^"]*"|true|false|\[|\]|\{|\})/g).map((token, tokIdx) => {
              if (!token) return null;

              if (token.startsWith('"') && token.endsWith('":')) {
                return (
                  <span key={tokIdx} className="text-[#38bdf8] font-semibold">
                    {token.slice(0, -1)}
                    <span className="text-foreground">:</span>
                  </span>
                );
              }
              if (token.startsWith('"') && token.endsWith('"')) {
                return (
                  <span key={tokIdx} className="text-[#4ade80] font-medium">
                    {token}
                  </span>
                );
              }
              if (token === 'true' || token === 'false') {
                return (
                  <span key={tokIdx} className="text-[#f472b6] font-bold">
                    {token}
                  </span>
                );
              }
              if (['[', ']', '{', '}'].includes(token)) {
                return (
                  <span key={tokIdx} className="text-[#facc15] font-black">
                    {token}
                  </span>
                );
              }

              return <span key={tokIdx} className="text-slate-100">{token}</span>;
            })}
          </span>
        </div>
      );
    });
  };

  return (
    <>
      {/* 1. COMPACT CARD VIEW (In Section) */}
      <div className="relative w-full max-w-md mx-auto">
        {/* Back Offset Card Frame */}
        <div className="absolute inset-0 bg-accent rounded-3xl border-4 border-foreground translate-x-3 translate-y-3 shadow-hard -z-10 transform rotate-2"></div>

        {/* Main Terminal Window Card */}
        <div 
          onClick={handleOpenModal}
          className="bg-[#1e1e2e] text-slate-100 border-4 border-foreground rounded-3xl overflow-hidden shadow-hard relative cursor-pointer group/card transition-transform hover:-translate-y-1"
        >
          
          {/* Retro Header Bar */}
          <div className="bg-[#11111b] px-4 py-3 border-b-3 border-foreground flex items-center justify-between select-none">
            
            {/* Traffic Light Control Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-black/40 inline-block shadow-xs"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-black/40 inline-block shadow-xs"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-black/40 inline-block shadow-xs"></span>
            </div>

            {/* Window Title Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold text-slate-200">
              <Terminal size={13} className="text-accent" />
              <span>sahil@dev-box: ~/interactive.sh</span>
            </div>

            {/* Action Control Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleRestart}
                title="Reset Code"
                className="cursor-target p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              >
                <RotateCcw size={14} className={isTyping ? 'animate-spin' : ''} />
              </button>

              <button
                onClick={handleOpenModal}
                title="Expand Fullscreen Modal"
                className="cursor-target p-1.5 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors shadow-xs"
              >
                <Maximize2 size={14} />
              </button>
            </div>
          </div>

          {/* Compact Terminal Body */}
          <div className="p-4 md:p-5 min-h-[310px] max-h-[350px] overflow-hidden flex flex-col justify-between font-mono bg-[#181825] relative">
            
            {/* Overlay hint banner */}
            <div className="absolute top-3 right-4 z-20 opacity-0 group-hover/card:opacity-100 transition-opacity bg-accent text-white px-3 py-1 rounded-full text-[11px] font-black shadow-hard flex items-center gap-1">
              <Maximize2 size={11} />
              <span>Click to Expand Live IDE</span>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div className="relative w-full min-h-[190px] cursor-text">
                <div className="table w-full select-none pointer-events-none">
                  {renderHighlightedLines(codeContent)}
                </div>
              </div>

              {/* Terminal Logs Preview */}
              {terminalLogs.length > 0 && (
                <div className="my-2 pt-2 border-t border-white/10 flex flex-col gap-1 text-xs">
                  <div className="text-emerald-400 font-bold text-[11px]">
                    sahil@dev-box:~$ {terminalLogs[terminalLogs.length - 1].command}
                  </div>
                  <div className="text-yellow-300 text-[10px] font-semibold">
                    {terminalLogs[terminalLogs.length - 1].data.title}
                  </div>
                </div>
              )}
            </div>

            {/* Command Prompt preview */}
            <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="text-accent font-bold">guest@portfolio:~$</span>
                <span className="text-slate-400 animate-pulse text-[11px]">Click or type commands...</span>
              </div>
              <Maximize2 size={13} className="text-accent group-hover/card:scale-125 transition-transform" />
            </div>

          </div>
        </div>
      </div>


      {/* 2. EXPANDED FULLSCREEN MODAL (When Activated) */}
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-md">
            
            {/* Modal Backdrop Click to Close */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="absolute inset-0 z-0"
            />

            {/* Main Expanded Modal Window */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-4xl h-[88vh] bg-[#1e1e2e] text-slate-100 border-4 border-foreground rounded-3xl overflow-hidden shadow-[12px_12px_0px_rgba(0,0,0,1)] flex flex-col"
            >
              {/* Modal Header Bar */}
              <div className="bg-[#11111b] px-5 py-3.5 border-b-3 border-foreground flex items-center justify-between select-none">
                
                {/* Traffic Controls */}
                <div className="flex items-center gap-2.5">
                  <button onClick={() => setIsExpanded(false)} className="w-4 h-4 rounded-full bg-[#FF5F56] border border-black/40 flex items-center justify-center group">
                    <X size={10} className="text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <span className="w-4 h-4 rounded-full bg-[#FFBD2E] border border-black/40 inline-block"></span>
                  <span className="w-4 h-4 rounded-full bg-[#27C93F] border border-black/40 inline-block"></span>
                </div>

                {/* Title Badge */}
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs md:text-sm font-mono font-black text-white">
                  <Terminal size={15} className="text-accent" />
                  <span>Sahil's Interactive IDE Workstation</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">LIVE REPL</span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleRestart}
                    title="Reset Code"
                    className="cursor-target px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <RotateCcw size={14} className={isTyping ? 'animate-spin' : ''} />
                    <span className="hidden sm:inline">Reset</span>
                  </button>

                  <button
                    onClick={handleClear}
                    title="Clear All Text"
                    className="cursor-target px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <Trash2 size={14} />
                    <span className="hidden sm:inline">Clear</span>
                  </button>

                  <button
                    onClick={handleCopy}
                    title="Copy Content"
                    className="cursor-target px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                    <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
                  </button>

                  <button
                    onClick={() => setIsExpanded(false)}
                    title="Minimize Modal"
                    className="cursor-target p-2 rounded-xl bg-accent text-white hover:bg-accent/90 transition-colors shadow-xs ml-1"
                  >
                    <Minimize2 size={16} />
                  </button>
                </div>
              </div>

              {/* Preset Quick Shortcut Buttons Bar */}
              <div className="bg-[#181825] px-5 py-2.5 border-b border-white/10 flex items-center gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] text-xs">
                <span className="text-slate-400 font-bold shrink-0 flex items-center gap-1">
                  <Command size={13} className="text-accent" />
                  Quick Commands:
                </span>
                {[
                  { name: 'about', icon: <User size={12} /> },
                  { name: 'skills', icon: <Cpu size={12} /> },
                  { name: 'projects', icon: <Code2 size={12} /> },
                  { name: 'experience', icon: <Briefcase size={12} /> },
                  { name: 'contact', icon: <Mail size={12} /> },
                  { name: 'help', icon: <Sparkles size={12} /> }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => runPresetCommand(item.name)}
                    className="cursor-target shrink-0 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-accent text-slate-200 hover:text-white border border-white/10 font-mono text-xs font-bold transition-all hover:scale-105 flex items-center gap-1.5 shadow-xs"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>

              {/* Modal Body Container */}
              <div className="flex-1 p-5 md:p-6 flex flex-col font-mono bg-[#181825] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                
                {/* Combined Content Area */}
                <div className="flex flex-col flex-1">
                  {/* Editable Code Display Area */}
                  <div 
                    className="relative w-full cursor-text group select-text min-h-[200px]"
                    onClick={() => modalTextareaRef.current?.focus()}
                  >
                    <div className="table w-full select-none pointer-events-none z-0">
                      {renderHighlightedLines(codeContent)}
                    </div>
                    <textarea
                      ref={modalTextareaRef}
                      value={codeContent}
                      onChange={handleTextareaChange}
                      placeholder="// Type or edit code here..."
                      spellCheck="false"
                      className="absolute inset-0 w-full h-full bg-transparent text-transparent caret-accent resize-none outline-none font-mono text-xs md:text-sm leading-relaxed z-10 selection:bg-accent/40 selection:text-white"
                    />
                  </div>

                  {/* Formatted Terminal Output Response History */}
                  {terminalLogs.length > 0 && (
                    <div className="mt-4 flex flex-col gap-5">
                      {terminalLogs.map((log, index) => (
                        <div key={index} className="flex flex-col gap-3">
                          {/* Log Input Header */}
                          <div className="flex items-center gap-2 text-accent font-bold text-xs md:text-sm">
                            <span>guest@portfolio:~$</span>
                            <span className="text-white">{log.command}</span>
                          </div>

                          {/* Log Response Content */}
                          {log.data && (
                            <div className="flex flex-col gap-2 pl-2 border-l-2 border-white/10 ml-1 py-1">
                              <div className="text-yellow-300 font-extrabold text-xs md:text-sm flex items-center gap-1.5 pl-2">
                                <Sparkles size={13} className="text-yellow-400" />
                                <span>{log.data.title}</span>
                              </div>

                              <div className="flex flex-col gap-1.5 font-mono text-xs md:text-sm text-slate-300 pl-2">
                                {log.data.lines.map((line, lIdx) => (
                                  <div key={lIdx} className="leading-relaxed hover:text-white transition-colors flex items-start gap-1">
                                    <span>{line}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex-1"></div> {/* Pushes form to bottom if space available */}
                  
                  {/* Interactive Shell Command Form */}
                  <form 
                    onSubmit={handleCommandSubmit}
                    className="mt-6 flex items-center gap-2 text-sm shrink-0 border-t border-white/5 pt-4"
                  >
                    <span className="text-accent font-bold select-none shrink-0 text-xs md:text-sm">guest@portfolio:~$</span>
                    <input
                      type="text"
                      value={commandInput}
                      onChange={(e) => setCommandInput(e.target.value)}
                      placeholder="Type 'skills', 'about', 'projects'..."
                      className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 font-mono outline-none py-1 text-xs md:text-sm focus:ring-0"
                    />
                    {commandInput.trim() ? (
                      <button
                        type="submit"
                        className="cursor-target text-accent hover:text-white transition-colors shrink-0 px-3 py-2 bg-accent/10 hover:bg-accent/20 rounded-lg"
                      >
                        <Send size={14} />
                      </button>
                    ) : (
                      <div className="px-3 py-2 opacity-0"><Send size={14} /></div>
                    )}
                  </form>
                  <div ref={terminalEndRef} />
                </div>
              </div>

              {/* Modal Bottom Status Bar */}
              <div className="bg-[#11111b] px-6 py-2.5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 select-none">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="font-bold text-emerald-400">Node.js REPL Active</span>
                  </div>
                  <span className="text-slate-600">|</span>
                  <span className="text-slate-400 hidden sm:inline">Press ESC to minimize</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles size={13} className="text-yellow-400" />
                  <span className="font-semibold text-slate-300">Sahil Jadhav Developer CLI v2.0</span>
                </div>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CodeTerminal;
