import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Architecture from './components/Architecture';
import Skills from './components/Skills';
import Qualifications from './components/Qualifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NetworkBackground from './components/NetworkBackground';

function App() {
  return (
    <div className="relative min-h-screen">
      <NetworkBackground />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Architecture />
        <Skills />
        <Qualifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
