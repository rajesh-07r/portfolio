import { motion } from 'framer-motion';

const skills = [
    {
        category: "Languages & Databases",
        items: ["Java 8/11/17", "SQL", "PostgreSQL", "MySQL", "Query Optimization", "Hibernate", "Deadlock Handling"]
    },
    {
        category: "Frameworks & Security",
        items: ["Spring Boot 3.x", "Spring Framework", "Spring Data JPA", "Spring Security", "JWT", "RBAC"]
    },
    {
        category: "Microservices & Architecture",
        items: ["RESTful API", "Microservices", "Resilience4j", "API Gateway", "Rate Limiting", "Event-Driven"]
    },
    {
        category: "Cloud, DevOps & Tools",
        items: ["AWS (EC2, S3)", "Docker", "Redis", "Flyway", "Maven", "JIRA", "Git", "Postman"]
    }
];

const Skills = () => {
    return (
        <section className="section" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">Technical Expertise</h2>
                    <p className="section-subtitle">Core technologies powering intelligent systems.</p>
                </motion.div>

                <div className="skills-grid">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="skill-card hover:border-indigo-500/50 transition-colors"
                        >
                            <h3 className="skill-category">{skillGroup.category}</h3>
                            <div className="skill-items">
                                {skillGroup.items.map((item) => (
                                    <span key={item} className="skill-item">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
