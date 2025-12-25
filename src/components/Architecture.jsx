import { motion } from 'framer-motion';
import { Database, Server, Cpu, Radio, ShieldCheck, ArrowRightLeft, Activity } from 'lucide-react';

const Architecture = () => {
    return (
        <section className="section bg-black/20">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">System Architecture</h2>
                    <p className="section-subtitle">High-level design of the AI²oT™ Platform designed for scale.</p>
                </motion.div>

                {/* Architecture Diagram */}
                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 relative p-8 border border-[var(--glass-border)] rounded-3xl bg-[var(--glass-bg)] shadow-sm">

                    {/* Layer 1: Edge & IoT */}
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="text-center text-sm font-bold tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>IOT EDGE LAYER</div>
                        <div className="flex-1 p-6 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-indigo-500/40 transition-colors">
                            <Radio size={40} className="text-indigo-500" />
                            <div className="text-center">
                                <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Smart Sensors</h3>
                                <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>MQTT / CoAP / RFID</p>
                            </div>
                            <div className="flex gap-2">
                                <span className="text-[11px] bg-indigo-500/10 text-indigo-600 px-2 py-1 rounded font-medium">IntelliLock</span>
                                <span className="text-[11px] bg-indigo-500/10 text-indigo-600 px-2 py-1 rounded font-medium">GPS</span>
                            </div>
                        </div>
                    </div>

                    {/* Arrow Connection (LG) */}
                    <div className="hidden lg:flex items-center justify-center" style={{ color: 'var(--text-secondary)' }}>
                        <ArrowRightLeft size={24} />
                    </div>

                    {/* Layer 2: Ingestion & Processing */}
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="text-center text-sm font-bold tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>EVENT MESH & CORE</div>
                        <div className="flex-1 p-6 bg-purple-500/5 border border-purple-500/20 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-purple-500/40 transition-colors">
                            <Activity size={40} className="text-purple-500" />
                            <div className="text-center">
                                <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Stream Processing</h3>
                                <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>Kafka / RabbitMQ</p>
                            </div>
                            <div className="w-full grid grid-cols-2 gap-2 mt-2">
                                <div className="p-2 bg-[var(--glass-border)] rounded text-center text-[10px] font-medium" style={{ color: 'var(--text-primary)' }}>Auth Service (JWT)</div>
                                <div className="p-2 bg-[var(--glass-border)] rounded text-center text-[10px] font-medium" style={{ color: 'var(--text-primary)' }}>Event Engine</div>
                                <div className="p-2 bg-[var(--glass-border)] rounded text-center text-[10px] font-medium" style={{ color: 'var(--text-primary)' }}>Rule Engine</div>
                                <div className="p-2 bg-[var(--glass-border)] rounded text-center text-[10px] font-medium" style={{ color: 'var(--text-primary)' }}>Notification</div>
                            </div>
                        </div>
                    </div>

                    {/* Arrow Connection (LG) */}
                    <div className="hidden lg:flex items-center justify-center" style={{ color: 'var(--text-secondary)' }}>
                        <ArrowRightLeft size={24} />
                    </div>

                    {/* Layer 3: Data & AI */}
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="text-center text-sm font-bold tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>DATA & INTELLIGENCE</div>
                        <div className="flex-1 px-6 py-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl flex flex-col justify-center gap-4 hover:border-emerald-500/40 transition-colors">
                            <div className="flex items-center gap-3">
                                <Database size={24} className="text-emerald-500" />
                                <div>
                                    <h4 className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>Persistence</h4>
                                    <p className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>PostgreSQL (Partitions)</p>
                                </div>
                            </div>
                            <div className="h-px bg-[var(--glass-border)]" />
                            <div className="flex items-center gap-3">
                                <Cpu size={24} className="text-emerald-500" />
                                <div>
                                    <h4 className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>AI Models</h4>
                                    <p className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>TensorFlow / YOLO Inference</p>
                                </div>
                            </div>
                            <div className="h-px bg-[var(--glass-border)]" />
                            <div className="flex items-center gap-3">
                                <Server size={24} className="text-emerald-500" />
                                <div>
                                    <h4 className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>Cache Layer</h4>
                                    <p className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>Redis (Geofence State)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8 text-sm text-gray-500">
                    * Simplified view of the event-driven microservices pipeline.
                </div>
            </div>
        </section>
    );
};

export default Architecture;
