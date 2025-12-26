import { motion } from 'framer-motion';
import { Award, GraduationCap, Link as LinkIcon } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const Qualifications = () => {
    return (
        <section id="qualifications" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">Education & Certifications</h2>
                    <p className="section-subtitle">Academic background and professional milestones.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-bold flex items-center gap-3 mb-8" style={{ color: 'var(--text-primary)' }}>
                            <span className="p-2 bg-indigo-500/20 rounded-lg text-indigo-500"><GraduationCap size={24} /></span>
                            Education
                        </h3>

                        <div className="relative pl-8 border-l-2 border-indigo-500/20 space-y-10 py-2">
                            {/* MCA */}
                            <div className="relative">
                                <span className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-[var(--bg-color)] box-content shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                                <h4 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Master of Computer Applications (MCA)</h4>
                                <p className="text-lg font-medium mb-1" style={{ color: 'var(--accent-primary)' }}>Jaya Engineering College, Anna University</p>
                                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-[var(--glass-border)] text-[var(--text-secondary)]">
                                    2020 – 2022
                                </span>
                            </div>

                            {/* BCA */}
                            <div className="relative">
                                <span className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-[var(--bg-color)] box-content opacity-75" />
                                <h4 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Bachelor of Computer Applications (BCA)</h4>
                                <p className="text-lg font-medium mb-1" style={{ color: 'var(--accent-primary)' }}>Jaya College of Arts and Science</p>
                                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-[var(--glass-border)] text-[var(--text-secondary)]">
                                    2017 – 2020
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div>
                        <h3 className="text-2xl font-bold flex items-center gap-3 mb-8" style={{ color: 'var(--text-primary)' }}>
                            <span className="p-2 bg-purple-500/20 rounded-lg text-purple-500"><Award size={24} /></span>
                            Certifications
                        </h3>

                        <div className="relative pl-8 border-l-2 border-purple-500/20 space-y-10 py-2">
                            {/* Cert 1 */}
                            <div className="relative group">
                                <span className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-[var(--bg-color)] box-content shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                                <h4 className="text-xl font-bold mb-1 group-hover:text-purple-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                                    Java Spring Framework 6 with Spring Boot 3
                                </h4>
                                <div className="flex flex-wrap items-center gap-3 mt-2">
                                    <span className="text-md" style={{ color: 'var(--text-secondary)' }}>Udemy • Feb 2025</span>
                                    <a href="https://www.udemy.com/certificate/UC-d2ba854d-a512-4d85-983e-f094dda94aa7/" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full hover:bg-[var(--glass-border)] transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                                        <LinkIcon size={16} />
                                    </a>
                                </div>
                            </div>

                            {/* Cert 2 */}
                            <div className="relative group">
                                <span className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-[var(--bg-color)] box-content" />
                                <h4 className="text-xl font-bold mb-1 group-hover:text-purple-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                                    Building Microservices with Spring Boot
                                </h4>
                                <div className="flex flex-wrap items-center gap-3 mt-2">
                                    <span className="text-md" style={{ color: 'var(--text-secondary)' }}>Udemy • May 2024</span>
                                    <a href="https://www.udemy.com/certificate/UC-c236c92d-4fe9-49c8-80d8-60ec73ba4e31/" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full hover:bg-[var(--glass-border)] transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                                        <LinkIcon size={16} />
                                    </a>
                                </div>
                            </div>

                            {/* Key Achievements */}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualifications;
