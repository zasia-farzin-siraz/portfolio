import Navbar from "./components/Navbar";
import PixelCursor from "./components/PixelCursor";
import FloatingStars from "./components/FloatingStars";
import PixelStars from "./components/PixelStars";
import BackToTop from "./components/BackToTop";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";


import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";


function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1800);

  return () => clearTimeout(timer);
}, []);



  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FFF7F5] text-[#49355A]">
      {loading && <LoadingScreen />}

      {/* Background Blobs */}

      <div className="fixed left-[-120px] top-[-100px] h-[420px] w-[420px] rounded-full bg-pink-200/40 blur-[140px]" />

      <div className="fixed right-[-150px] top-40 h-[450px] w-[450px] rounded-full bg-violet-200/40 blur-[160px]" />

      <div className="fixed bottom-[-100px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-pink-100/60 blur-[170px]" />

      <PixelCursor />

      <FloatingStars />

      <PixelStars />

      <Navbar />


      {/* Main Content */}

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <BackToTop />
      
      {/* Footer */}

      <Footer />

    </div>
  );
}

export default App;