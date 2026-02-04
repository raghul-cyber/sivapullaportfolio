import { motion } from 'framer-motion';
import Logo from './Logo';
const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-16 bg-background relative overflow-hidden"
        >
            {/* Static Fire Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">

                {/* Simple Fade-in Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <div className="p-4 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 shadow-[0_0_50px_rgba(249,115,22,0.4)] backdrop-blur-sm border border-primary/20">
                        <Logo size="large" />
                    </div>
                </motion.div>

                {/* Static Animated Name (Simple Fade Up) */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-orange-200 to-orange-500 drop-shadow-2xl"
                >
                    Harikrishna S
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl md:text-3xl text-foreground/60 mb-8 font-light flex items-center gap-2 justify-center"
                >
                    Graphic Designer <span className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_#f97316]" /> Thumbnail Specialist
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="max-w-2xl text-lg text-foreground/80 mb-10 leading-relaxed"
                >
                    Igniting brands with high-impact visuals.
                    Specializing in thumbnails that burn through the noise.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex gap-4"
                >
                    <a
                        href="#portfolio"
                        className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-bold shadow-[0_0_20px_rgba(234,88,12,0.5)] hover:shadow-[0_0_30px_rgba(234,88,12,0.7)] hover:scale-105 transition-all"
                    >
                        View Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-white/5 border border-white/10 text-foreground rounded-full font-medium hover:bg-white/10 transition-colors"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
