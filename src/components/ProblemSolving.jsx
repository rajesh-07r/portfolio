import { motion } from 'framer-motion';
import { Network, Cpu, ShieldCheck, Box } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const ProblemSolving = () => {
    return (
        <section id="problem-solving" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">Engineering Mindset</h2>
                    <p className="section-subtitle">How I approach complex system challenges.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: Network,
                            color: "text-blue-500",
                            title: "Distributed Resilience",
                            desc: "Designing for failure using Circuit Breakers and Bulkheads (Resilience4j) to ensure 99.9% availability."
                        },
                        {
                            icon: Cpu,
                            color: "text-green-500",
                            title: "Performance First",
                            desc: "Reducing latency by 25% through meticulous N+1 query elimination and aggressive caching strategies."
                        },
                        {
                            icon: ShieldCheck,
                            color: "text-red-500",
                            title: "Security by Design",
                            desc: "Implementing Role-Based Access Control (RBAC) and JWT at the architectural level, not as an afterthought."
                        },
                        {
                            icon: Box,
                            color: "text-purple-500",
                            title: "Cloud Native",
                            desc: "Containerizing services with Docker and automating reliable deployments for consistent environments."
                        }
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col gap-3 group">
                            <div className={`p-3 rounded-xl bg-[var(--glass-border)] w-fit ${item.color} group-hover:scale-110 transition-transform`}>
                                <item.icon size={28} />
                            </div>
                            <h3 className="font-bold text-lg text-[var(--text-primary)]">{item.title}</h3>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSolving;
