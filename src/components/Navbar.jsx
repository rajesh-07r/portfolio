import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="navbar"
        >
            <div className="container navbar-content">
                <a href="#" className="logo">
                    Rajesh <span className="text-indigo-500">R.</span>
                </a>

                <div className="nav-links desktop-only">
                    <a href="#projects" className="nav-link">Work</a>
                    <a href="#experience" className="nav-link">Experience</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>

                <div className="social-links">
                    <ThemeToggle />
                    <div className="w-px h-6 bg-gray-200 dark:bg-white/10 mx-2 hidden sm:block"></div>
                    <a href="https://linkedin.com/in/rajesh-r-26070327a" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:rajesh.r072000@gmail.com" className="social-icon">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
