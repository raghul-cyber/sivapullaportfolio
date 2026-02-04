import { motion } from 'framer-motion';
import { Eye, Image, Layout, MousePointer, Type, Zap } from 'lucide-react';
import { useRef } from 'react';

const Skills = () => {
    const containerRef = useRef(null);

    const skills = [
        {
            name: "Thumbnail Design",
            icon: <Image className="w-6 h-6" />,
            description: "Creating click-worthy thumbnails that increase CTR.",
            level: 95
        },
        {
            name: "Visual Hierarchy",
            icon: <Layout className="w-6 h-6" />,
            description: "Structuring elements to guide viewer attention.",
            level: 90
        },
        {
            name: "Color Theory",
            icon: <Eye className="w-6 h-6" />,
            description: "Using psychology effectively to evoke emotion.",
            level: 85
        },
        {
            name: "Typography",
            icon: <Type className="w-6 h-6" />,
            description: "Bold, readable text that complements the imagery.",
            level: 88
        },
        {
            name: "Photo Manipulation",
            icon: <MousePointer className="w-6 h-6" />,
            description: "Blending images seamlessly for realistic composites.",
            level: 92
        },
        {
            name: "Speed Workflow",
            icon: <Zap className="w-6 h-6" />,
            description: "Delivering high-quality work within tight deadlines.",
            level: 90
        }
    ];

    return (
        <section ref={containerRef} id="skills" className="py-20 bg-secondary/20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">My Skills</h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-20 h-1 bg-primary mx-auto rounded-full"
                    />
                    <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
                        Tools and techniques I use to create stunning visuals.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, rotate: [-1, 1, 0] }}
                            className="bg-background p-8 rounded-2xl shadow-lg border border-border/10 hover:border-primary/30 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                >
                                    {skill.icon}
                                </motion.div>
                            </div>

                            <motion.div
                                className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors"
                                whileHover={{ scale: 1.1, rotate: 10 }}
                            >
                                {skill.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
                            <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                                {skill.description}
                            </p>
                            <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                                    className="bg-primary h-2 rounded-full relative"
                                >
                                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 animate-pulse" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
