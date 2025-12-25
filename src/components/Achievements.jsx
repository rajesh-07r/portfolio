import { motion } from 'framer-motion';
import { Award, Star, Trophy } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const Achievements = () => {
    return (
        <section id="achievements" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">Achievements & Recognition</h2>
                    <p className="section-subtitle">Milestones that mark my commitment to excellence.</p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
                    <div className="flex gap-5 items-start">
                        <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500 flex-shrink-0 mt-1">
                            <Trophy size={28} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-[var(--text-primary)]">
                                Project Delivery Excellence
                            </h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                Awarded multiple official certificates for successful project deliveries, recognizing ownership, quality of code, and adherence to strict timelines.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-5 items-start">
                        <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-500 flex-shrink-0 mt-1">
                            <Star size={28} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-[var(--text-primary)]">
                                Critical Contributions
                            </h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                Received recognition for meaningful contributions to legacy system modernization, demonstrating consistent performance in high-pressure production environments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
