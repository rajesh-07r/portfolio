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
                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 relative p-8 border border-white/5 rounded-3xl bg-white/5">

                    {/* Layer 1: Edge & IoT */}
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="text-center text-sm font-bold text-gray-400 mb-2">IOT EDGE LAYER</div>
                        <div className="flex-1 p-6 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-indigo-500/40 transition-colors">
                            <Radio size={40} className="text-indigo-400" />
                            <div className="text-center">
                                <h3 className="font-bold text-white">Smart Sensors</h3>
                                <p className="text-xs text-gray-400 mt-1">MQTT / CoAP / RFID</p>
                            </div>
                            <div className="flex gap-2">
                                <span className="text-[10px] bg-indigo-500/20 px-2 py-1 rounded">IntelliLock</span>
                                <span className="text-[10px] bg-indigo-500/20 px-2 py-1 rounded">GPS</span>
                            </div>
                        </div>
                    </div>

                    {/* Arrow Connection (LG) */}
                    <div className="hidden lg:flex items-center justify-center text-gray-600">
                        <ArrowRightLeft size={24} />
                    </div>

                    {/* Layer 2: Ingestion & Processing */}
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="text-center text-sm font-bold text-gray-400 mb-2">EVENT MESH & CORE</div>
                        <div className="flex-1 p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-purple-500/40 transition-colors">
                            <Activity size={40} className="text-purple-400" />
                            <div className="text-center">
                                <h3 className="font-bold text-white">Stream Processing</h3>
                                <p className="text-xs text-gray-400 mt-1">Kafka / RabbitMQ</p>
                            </div>
                            <div className="w-full grid grid-cols-2 gap-2 mt-2">
                                <div className="p-2 bg-black/40 rounded text-center text-xs">Auth Service (JWT)</div>
                                <div className="p-2 bg-black/40 rounded text-center text-xs">Event Engine</div>
                                <div className="p-2 bg-black/40 rounded text-center text-xs">Rule Engine</div>
                                <div className="p-2 bg-black/40 rounded text-center text-xs">Notification</div>
                            </div>
                        </div>
                    </div>

                    {/* Arrow Connection (LG) */}
                    <div className="hidden lg:flex items-center justify-center text-gray-600">
                        <ArrowRightLeft size={24} />
                    </div>

                    {/* Layer 3: Data & AI */}
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="text-center text-sm font-bold text-gray-400 mb-2">DATA & INTELLIGENCE</div>
                        <div className="flex-1 px-6 py-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex flex-col gap-3 hover:border-emerald-500/40 transition-colors">
                            <div className="flex items-center gap-3">
                                <Database size={24} className="text-emerald-400" />
                                <div>
                                    <h4 className="font-bold text-sm">Persistence</h4>
                                    <p className="text-[10px] text-gray-400">PostgreSQL (Partitions)</p>
                                </div>
                            </div>
                            <div className="h-px bg-white/10" />
                            <div className="flex items-center gap-3">
                                <Cpu size={24} className="text-emerald-400" />
                                <div>
                                    <h4 className="font-bold text-sm">AI Models</h4>
                                    <p className="text-[10px] text-gray-400">TensorFlow / YOLO Inference</p>
                                </div>
                            </div>
                            <div className="h-px bg-white/10" />
                            <div className="flex items-center gap-3">
                                <Server size={24} className="text-emerald-400" />
                                <div>
                                    <h4 className="font-bold text-sm">Cache Layer</h4>
                                    <p className="text-[10px] text-gray-400">Redis (Geofence State)</p>
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
