import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects /> 
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;