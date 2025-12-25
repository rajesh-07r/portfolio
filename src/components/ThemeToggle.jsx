import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    // Default to 'dark' as requested
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors relative"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: theme === 'dark' ? 0 : 1,
                    rotate: theme === 'dark' ? 180 : 0,
                    opacity: theme === 'dark' ? 0 : 1
                }}
                transition={{ duration: 0.2 }}
                className="text-gray-600 dark:text-gray-300"
            >
                <Sun size={20} />
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    scale: theme === 'light' ? 0 : 1,
                    rotate: theme === 'light' ? -180 : 0,
                    opacity: theme === 'light' ? 0 : 1
                }}
                transition={{ duration: 0.2 }}
                className="absolute top-2 left-2 text-indigo-400"
            >
                <Moon size={20} />
            </motion.div>
        </button>
    );
};

export default ThemeToggle;
