import { motion } from 'framer-motion';
import { Layers, Truck, Video, Droplets, Shield, Map } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const projects = [
    {
        title: "AI²oT™ Platform",
        subtitle: "Unified Industrial Asset Intelligence",
        description: "Architected a proprietary AI²oT framework used to manage over $100 Billion in assets annually. The platform enables 24/7 automated decision-making and predictive maintenance for global leaders in Oil & Gas, Mining, and Logistics.",
        impact: "Manages 50+ Enterprise Clients",
        tags: ["Java", "Spring Boot", "Kafka", "Microservices"],
        gradientClass: "gradient-blue",
        icon: Layers
    },
    {
        title: "Fuel Logistics Security",
        subtitle: "Nationwide IOCL & BPCL Network",
        description: "Secured over 45,000+ oil tankers and 210+ terminals covering 1.3 million KM/day. Integrated IntelliLock (OTP smart locks) and GPS telemetry to create a tamper-proof supply chain, eliminating fuel pilferage.",
        impact: "Zero-Pilferage Supply Chain",
        tags: ["IoT", "GPS Telemetry", "Real-time Geofencing"],
        gradientClass: "gradient-orange",
        icon: Truck
    },
    {
        title: "VAIOT™ Ecosystem",
        subtitle: "Edge-AI Video Analytics",
        description: "Developed VAIOT Box and Camera for on-device inference using OpenCV/YOLO. Automated PPE compliance, intrusion detection, and fire alerts on existing CCTV infrastructure, reducing manual monitoring costs.",
        impact: "70% Manual Cost Reduction",
        tags: ["OpenCV", "YOLO", "TensorFlow", "Edge AI"],
        gradientClass: "gradient-purple",
        icon: Video
    },
    {
        title: "Urban Flood Management",
        subtitle: "Smart City Infrastructure (Chennai)",
        description: "Deployed IoT monitoring across 200+ water pump stations. Features real-time water level sensing and automated boom barriers for flood-prone zones, providing a city-wide early warning system.",
        impact: "City-wide Early Warning System",
        tags: ["IoT Sensors", "Automation", "Smart City"],
        gradientClass: "gradient-cyan",
        icon: Droplets
    },
    {
        title: "Digital Vault Security",
        subtitle: "High-Value Asset Control",
        description: "Implemented Advanced Locking Solution (ALS) for Tier-1 Banks and Jewelry chains. Secured high-value storage with zero-key dependency, multi-factor authentication, and remote audit trails.",
        impact: "100% Accountability",
        tags: ["Security", "MFA", "Audit Trails"],
        gradientClass: "gradient-red",
        icon: Shield
    },
    {
        title: "Barrier-less Tolling",
        subtitle: "Smart Highway Infrastructure (NHAI)",
        description: "Executed a pilot for NHAI utilizing ANPR and RFID integration for high-speed vehicle identification, demonstrating 'Free Flow' tolling to reduce highway congestion and automate revenue collection.",
        impact: "Automated Revenue Collection",
        tags: ["ANPR", "RFID", "High-Speed Vision"],
        gradientClass: "gradient-green",
        icon: Map
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">Strategic Projects</h2>
                    <p className="section-subtitle">Impact-driven engineering for enterprise and smart cities.</p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SpotlightCard className="h-full">
                                {/* Project Header Gradient */}
                                <div className={`h-2 w-full ${project.gradientClass}`} />

                                <div className="project-content h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="project-title text-xl mb-1">{project.title}</h3>
                                            <span className="text-sm text-indigo-400 font-medium">{project.subtitle}</span>
                                        </div>
                                        <div className={`p-2 rounded-lg bg-white/5 text-white/80`}>
                                            <project.icon size={24} />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/90">
                                            🚀 {project.impact}
                                        </span>
                                    </div>

                                    <p className="project-description mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="project-tags">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
