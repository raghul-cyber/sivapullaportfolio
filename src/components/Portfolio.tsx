import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import img1 from '../assets/portfolio/1.jpg';
import img2 from '../assets/portfolio/2.jpg';
import img3 from '../assets/portfolio/3.jpg';
import img4 from '../assets/portfolio/4.jpg';
import img5 from '../assets/portfolio/5.jpg';
import { useRef } from 'react';

const PortfolioCard = ({ work, index }: { work: any, index: number }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative aspect-video rounded-2xl bg-secondary/30 cursor-pointer group perspective-1000"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 rounded-xl overflow-hidden shadow-2xl"
            >
                <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="text-primary font-medium text-sm mb-1"
                    >
                        {work.category}
                    </motion.span>
                    <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="text-white font-bold text-xl"
                    >
                        {work.title}
                    </motion.h3>
                </div>
            </div>

            {/* Reflection effect */}
            <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                    transform: "translateZ(80px)",
                }}
            />
        </motion.div>
    );
};

const Portfolio = () => {
    const works = [
        { id: 1, image: img1, title: 'Viral Thumbnail', category: 'YouTube' },
        { id: 2, image: img2, title: 'Gaming Montage', category: 'YouTube' },
        { id: 3, image: img3, title: 'Vlog Esthetic', category: 'Social Media' },
        { id: 4, image: img4, title: 'Finance Explainer', category: 'YouTube' },
        { id: 5, image: img5, title: 'Lifestyle Cover', category: 'Branding' },
    ];

    return (
        <section id="portfolio" className="py-20 bg-background perspective-3000">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">My Work</h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-1 bg-primary mx-auto rounded-full"
                    />
                    <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
                        A selection of my recent projects and designs. Hover to interact.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {works.map((work, index) => (
                        <PortfolioCard key={work.id} work={work} index={index} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10 shadow-xl shadow-primary/20 relative overflow-hidden group"
                    >
                        <span className="relative z-10">Start a Project</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
