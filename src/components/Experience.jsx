import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">Professional Experience</h2>
                    <p className="section-subtitle">My professional journey in the software industry.</p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Timeline Wrapper - Removed Card to fix spacing issues */}
                        <div className="relative pl-8 md:pl-12 border-l-2 border-indigo-500/20 py-4">

                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-[var(--bg-color)] box-content shadow-[0_0_15px_rgba(99,102,241,0.5)]" />

                            {/* Job Header */}
                            <div className="mb-8">
                                <h3 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Java Backend Developer</h3>
                                <div className="text-xl font-medium mb-4 flex items-center gap-2" style={{ color: 'var(--accent-primary)' }}>
                                    <Briefcase size={20} />
                                    <span>KritiLabs Technologies</span>
                                </div>
                                <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                                    <span className="flex items-center gap-1 bg-[var(--glass-border)] px-3 py-1 rounded-full">
                                        <Calendar size={14} /> Feb 2023 – Present
                                    </span>
                                    <span className="flex items-center gap-1 bg-[var(--glass-border)] px-3 py-1 rounded-full">
                                        <MapPin size={14} /> Chennai, India
                                    </span>
                                </div>
                            </div>

                            {/* Achievements List - Spacious & Readable */}
                            <ul className="space-y-6">
                                {[
                                    "Architected, developed, and maintained high-performance <b>Spring Boot microservices</b>, migrating legacy monolithic components into cloud-native services for enterprise applications.",
                                    "Designed and optimized RESTful APIs, reducing average response times by <b>25%</b> and improving data throughput by <b>35%</b> through efficient DTO mapping, query tuning, and caching strategies.",
                                    "Implemented rate limiting, circuit breaker, retry, and bulkhead patterns using <b>Resilience4j</b> to protect services from overload and downstream failures, achieving <b>99.9% availability</b> during peak traffic.",
                                    "Secured distributed services using <b>Spring Security and JWT</b>, enforcing Role-Based Access Control (RBAC) across multiple modules and APIs.",
                                    "Integrated <b>Flyway</b> for automated database migrations, enabling zero-downtime production deployments and consistent schema versioning across environments.",
                                    "Improved database performance by implementing indexing strategies, optimizing transaction boundaries, and resolving N+1 query issues using <b>Spring Data JPA</b> and Hibernate.",
                                    "Actively monitored production systems using observability tools, performing <b>Root Cause Analysis (RCA)</b> for critical incidents and performance bottlenecks.",
                                    "Collaborated in Agile/Scrum teams, conducted code reviews, and mentored junior developers, ensuring adherence to SOLID principles, clean architecture, and maintainable codebases."
                                ].map((item, index) => (
                                    <li key={index} className="relative pl-6">
                                        {/* Custom bullet to avoid tightly packed default list */}
                                        <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }} />
                                        <p className="text-lg leading-relaxed text-opacity-90" style={{ color: 'var(--text-primary)' }} dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
