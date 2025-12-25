import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Mail, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Backend Architect", "Microservices Expert", "Java Specialist", "Cloud-Native Engineer"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before new word
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <section id="about" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge">
              Senior Software Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-title"
          >
            I am <span className="gradient-text">Rajesh R</span>.
            <br />
            <span style={{ minHeight: '1.2em', display: 'inline-block' }}>
              {text}<span className="cursor-blink">|</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hero-subtitle"
          >
            Specialized in designing low-latency backend systems using <b>Java 17</b> & <b>Spring Boot</b>.
            Proven track record in microservices, database optimization, and secure enterprise solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hero-buttons"
          >
            <a href="#experience" className="btn btn-primary">
              View Experience <ArrowRight size={20} />
            </a>

            <a href="/resume.html" target="_blank" className="btn btn-secondary">
              Resume <Download size={20} />
            </a>

            <div className="flex gap-4">
              <a href="https://linkedin.com/in/rajesh-r-26070327a" target="_blank" rel="noopener noreferrer" className="p-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-full hover:bg-[var(--glass-border)] transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                <Linkedin size={20} />
              </a>
              <a href="mailto:rajesh.r072000@gmail.com" className="p-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-full hover:bg-[var(--glass-border)] transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
