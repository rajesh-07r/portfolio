import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Architecture from './components/Architecture';
import Experience from './components/Experience';
import ProblemSolving from './components/ProblemSolving';
import Achievements from './components/Achievements';
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
        <About />
        <Skills />
        <Projects />
        <Architecture />
        <Experience />
        <ProblemSolving />
        <Achievements />
        <Qualifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
