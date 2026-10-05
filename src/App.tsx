import { useState } from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Achievements } from './components/Achievements';
import { JPMCSection } from './components/JPMCSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-black selection:bg-black selection:text-white">
      {/* Layer 0: Mouse-Scrubbed 3D CRT Background Video */}
      <BackgroundVideo />

      {/* Layer 10: Fixed Navbar & Mobile Menu */}
      <Navbar />

      {/* Layer 1: Full-Screen Hero Viewport */}
      <main className="relative z-[1]">
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Layer 2+: High-end Editorial Content Sections */}
        <div className="relative z-[2] shadow-2xl">
          <About onOpenResume={() => setResumeOpen(true)} />
          <Projects />
          <TechStack />
          <Achievements />
          <JPMCSection />
          <Contact />
        </div>
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* High-Fidelity Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
