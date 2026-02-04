import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, Target, UserCheck } from 'lucide-react';

const Services = () => {
    const steps = [
        {
            title: "Discovery",
            description: "We discuss your channel's niche, target audience, and video topic to understand the goal.",
            icon: <MessageCircle className="w-6 h-6" />
        },
        {
            title: "Concept",
            description: "I sketch 2-3 thumbnail concepts focusing on high CTR curiosity gaps and composition.",
            icon: <Target className="w-6 h-6" />
        },
        {
            title: "Design",
            description: "Bringing the chosen concept to life with high-end manipulation, lighting, and typography.",
            icon: <CheckCircle2 className="w-6 h-6" />
        },
        {
            title: "Refinement",
            description: "Unlimited revisions until we get that perfect, click-worthy result.",
            icon: <UserCheck className="w-6 h-6" />
        }
    ];

    return (
        <section id="services" className="py-20 bg-secondary/20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Client Success Process</h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="h-1 bg-primary rounded-full mb-8"
                        />
                        <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                            My approach isn't just about making things look "cool". It's about strategic design that converts views into subscribers.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-background p-8 rounded-2xl shadow-sm border border-border/10"
                        >
                            <h3 className="text-xl font-bold mb-4">Why Work With Me?</h3>
                            <ul className="space-y-3">
                                {['CTR-Focused Designs', 'Fast Turnaround Time', '100% Satisfaction Guarantee', 'Trend-Aware Aesthetics'].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + (i * 0.1) }}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                                        <span className="text-foreground/80">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>

                    <div className="space-y-8 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border/50 hidden md:block" />

                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="flex gap-6 bg-background p-6 rounded-xl shadow-md border border-border/10 hover:border-primary/30 transition-all relative z-10"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative z-10 group-hover:text-white transition-colors">
                                            {step.icon}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-foreground/70">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
