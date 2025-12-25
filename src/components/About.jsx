import { motion } from 'framer-motion';
import { User, Server, Code, Zap } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">The Engineering Story.</p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    <p className="text-xl md:text-2xl leading-relaxed text-[var(--text-secondary)]">
                        I am a <strong className="text-[var(--text-primary)]">Backend Engineer</strong> with a deep focus on designing and operating scalable, low-latency systems.
                        My expertise lies in <strong className="text-[var(--text-primary)]">Java 17</strong> and <strong className="text-[var(--text-primary)]">Spring Boot</strong>,
                        where I architect solutions that handle high throughput while maintaining strict performance SLAs.
                    </p>

                    <p className="text-xl md:text-2xl leading-relaxed text-[var(--text-secondary)]">
                        Currently at <strong className="text-[var(--text-primary)]">KritiLabs Technologies</strong>, I specialize in modernizing legacy monoliths into cloud-native microservices.
                        I don't just write code; I own the full lifecycle—from database schema design and API contract definition to deployment and production monitoring.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 pt-8">
                        <div className="flex gap-4">
                            <div className="mt-1 p-3 bg-indigo-500/10 rounded-xl w-fit h-fit text-indigo-500"><Server size={28} /></div>
                            <div>
                                <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">System Architecture</h4>
                                <p className="text-[var(--text-secondary)] leading-relaxed">Designing resilient, event-driven microservices that scale effortlessly.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1 p-3 bg-purple-500/10 rounded-xl w-fit h-fit text-purple-500"><Zap size={28} /></div>
                            <div>
                                <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">Performance Tuning</h4>
                                <p className="text-[var(--text-secondary)] leading-relaxed">Optimizing SQL queries, JVM garbage collection, and caching strategies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
