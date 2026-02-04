import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Briefcase, User } from 'lucide-react';
import { useRef } from 'react';

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <section ref={containerRef} id="about" className="py-20 bg-background relative overflow-hidden">
            {/* Background parallax element */}
            <motion.div
                style={{ y, rotate }}
                className="absolute top-10 right-10 w-64 h-64 border-[20px] border-secondary rounded-full opacity-20 pointer-events-none"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1 bg-primary mx-auto rounded-full"
                    />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-foreground">
                            Passionate Graphic Designer & Thumbnail Expert
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">
                            I am Harikrishna S, a dedicated Graphic Designer with over 1 year of professional experience.
                            My journey began with a passion for visual storytelling, which evolved into a specialized focus
                            on creating high-converting YouTube thumbnails and social media graphics.
                        </p>
                        <p className="text-foreground/80 leading-relaxed">
                            As a freelancer, I collaborate with content creators and brands to enhance their visual identity.
                            I understand the psychology behind successful thumbnails—colors, composition, and emotion—that
                            stop the scroll and drive clicks.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                            {[
                                { icon: <Briefcase className="w-8 h-8 text-primary mb-2" />, label: "Experience", value: "1+ Years" },
                                { icon: <User className="w-8 h-8 text-primary mb-2" />, label: "Available", value: "Freelance" },
                                { icon: <Award className="w-8 h-8 text-primary mb-2" />, label: "Skills", value: "Pro" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (index * 0.1) }}
                                    whileHover={{ y: -5, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                                    className="flex flex-col items-center p-4 bg-secondary/30 rounded-xl transition-colors cursor-pointer"
                                >
                                    {item.icon}
                                    <span className="font-bold text-xl">{item.value}</span>
                                    <span className="text-sm text-foreground/60">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, rotate: 5 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="relative"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="aspect-square rounded-full bg-gradient-to-br from-secondary to-background border border-border/10 shadow-2xl relative group flex items-center justify-center p-1"
                        >
                            {/* Rotating Animated Border */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-primary border-r-primary/50 shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                            />

                            <div className="w-full h-full rounded-full overflow-hidden relative z-10">
                                <img
                                    src="/src/assets/profile.jpg"
                                    alt="Harikrishna S"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
