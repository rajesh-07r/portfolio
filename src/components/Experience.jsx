import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

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
                        <SpotlightCard className="p-8">
                            <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Java Backend Developer</h3>
                                    <div className="flex items-center gap-2 text-indigo-400 font-medium text-lg">
                                        <Briefcase size={20} />
                                        <span>KritiLabs Technologies</span>
                                    </div>
                                </div>
                                <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0 text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        <span>Feb 2023 – Present</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} />
                                        <span>Chennai, India</span>
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-4 text-gray-300 leading-relaxed">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                                    <span>
                                        Architected, developed, and maintained high-performance <b>Spring Boot microservices</b>, migrating legacy monolithic components into cloud-native services for enterprise applications.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                                    <span>
                                        Designed and optimized RESTful APIs, reducing average response times by <b>25%</b> and improving data throughput by <b>35%</b> through efficient DTO mapping, query tuning, and caching strategies.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                                    <span>
                                        Implemented rate limiting, circuit breaker, retry, and bulkhead patterns using <b>Resilience4j</b> to protect services from overload and downstream failures, achieving <b>99.9% availability</b> during peak traffic.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                                    <span>
                                        Secured distributed services using <b>Spring Security and JWT</b>, enforcing Role-Based Access Control (RBAC) across multiple modules and APIs.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                                    <span>
                                        Integrated <b>Flyway</b> for automated database migrations, enabling zero-downtime production deployments and consistent schema versioning across environments.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                                    <span>
                                        Improved database performance by implementing indexing strategies, optimizing transaction boundaries, and resolving N+1 query issues using <b>Spring Data JPA</b> and Hibernate.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                                    <span>
                                        Actively monitored production systems using observability tools, performing <b>Root Cause Analysis (RCA)</b> for critical incidents and performance bottlenecks.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                                    <span>
                                        Collaborated in Agile/Scrum teams, conducted code reviews, and mentored junior developers, ensuring adherence to SOLID principles, clean architecture, and maintainable codebases.
                                    </span>
                                </li>
                            </ul>
                        </SpotlightCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
