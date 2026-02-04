import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-screen layer-blur-xl"
                style={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    background: "radial-gradient(circle, rgba(249,115,22,1) 0%, rgba(220,38,38,0.5) 50%, rgba(0,0,0,0) 70%)",
                    boxShadow: "0 0 20px 5px rgba(249, 115, 22, 0.6)"
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-yellow-400 rounded-full pointer-events-none z-[10000] hidden md:block"
                style={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                }}
            />
        </>
    );
};

export default CustomCursor;
