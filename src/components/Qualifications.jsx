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

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Education */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-3 mb-6" style={{ color: 'var(--text-primary)' }}>
                            <span className="p-2 bg-indigo-500/20 rounded-lg text-indigo-500"><GraduationCap size={24} /></span>
                            Education
                        </h3>

                        <SpotlightCard className="p-6 h-full">
                            <div className="relative pl-6 border-l-2 border-indigo-500/30 space-y-8">
                                <div className="relative">
                                    <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-[var(--bg-color)] box-content" />
                                    <h4 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Master of Computer Applications (MCA)</h4>
                                    <p className="text-indigo-400 font-medium">Jaya Engineering College, Anna University</p>
                                    <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>2020 – 2022</p>
                                </div>

                                <div className="relative">
                                    <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-indigo-500/50 ring-4 ring-[var(--bg-color)] box-content" />
                                    <h4 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Bachelor of Computer Applications (BCA)</h4>
                                    <p className="text-indigo-400 font-medium">Jaya College of Arts and Science</p>
                                    <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>2017 – 2020</p>
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>

                    {/* Certifications & Achievements */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-3 mb-6" style={{ color: 'var(--text-primary)' }}>
                            <span className="p-2 bg-purple-500/20 rounded-lg text-purple-500"><Award size={24} /></span>
                            Certifications
                        </h3>

                        <SpotlightCard className="p-6 h-full">
                            <div className="space-y-6">
                                <div className="group">
                                    <h4 className="text-lg font-bold group-hover:text-indigo-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                                        Java Spring Framework 6 with Spring Boot 3
                                    </h4>
                                    <div className="flex justify-between items-center mt-1">
                                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Udemy • Feb 2025</p>
                                        <a href="https://www.udemy.com/certificate/UC-c236c92d-4fe9-49c8-80d8-60ec73ba4e31/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                                            <LinkIcon size={16} />
                                        </a>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-[var(--glass-border)]" />

                                <div className="group">
                                    <h4 className="text-lg font-bold group-hover:text-indigo-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                                        Building Microservices with Spring Boot
                                    </h4>
                                    <div className="flex justify-between items-center mt-1">
                                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Udemy • May 2024</p>
                                        <a href="https://www.udemy.com/certificate/UC-d2ba854d-a512-4d85-983e-f094dda94aa7/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                                            <LinkIcon size={16} />
                                        </a>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-[var(--glass-border)]">
                                    <h5 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--text-secondary)' }}>Key Achievements</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                                            <span className="mt-1.5 w-1 h-1 bg-green-500 rounded-full flex-shrink-0" />
                                            Awarded multiple official certificates for successful project deliveries.
                                        </li>
                                        <li className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                                            <span className="mt-1.5 w-1 h-1 bg-green-500 rounded-full flex-shrink-0" />
                                            Honored for cross-project contributions and reliable delivery in production.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualifications;
