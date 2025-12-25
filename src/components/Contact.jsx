import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="contact-card"
                >
                    <div className="contact-content">
                        <h2 className="section-title text-center">Let's work together</h2>
                        <p className="contact-text">
                            Interested in building something awesome? I'm currently open to new opportunities and collaborations.
                        </p>

                        <div className="contact-info">
                            <a href="mailto:rajesh.r072000@gmail.com" className="info-item hover:text-white transition-colors">
                                <Mail className="info-icon" size={20} />
                                <span>rajesh.r072000@gmail.com</span>
                            </a>
                            <div className="info-item">
                                <MapPin className="info-icon" size={20} />
                                <span>Chennai, India</span>
                            </div>
                        </div>

                        <a href="mailto:rajesh.r072000@gmail.com" className="btn btn-primary contact-btn">
                            Say Hello
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
