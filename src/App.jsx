import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TargetCursor from './components/TargetCursor';

function App() {
  return (
    <div className="min-h-screen relative font-sans text-foreground bg-background">
      <TargetCursor 
        cursorColor="#1E293B" 
        cursorColorOnTarget="#8B5CF6"
        targetSelector="a, button, input, textarea, select, .card-sticker, .cursor-target"
      />
      {/* Background Dots Pattern */}
      <div className="fixed inset-0 pointer-events-none bg-dot-pattern opacity-50 z-0"></div>
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Qualification />
          <Certificates />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
