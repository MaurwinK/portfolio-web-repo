import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const Mascot = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const mascotRef = useRef<HTMLDivElement>(null);
    const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        if (mascotRef.current) {
            const mascotRect = mascotRef.current.getBoundingClientRect();
            const mascotCenterX = mascotRect.left + mascotRect.width / 2;
            const mascotCenterY = mascotRect.top + mascotRect.height / 2;

            const angle = Math.atan2(
                mousePosition.y - mascotCenterY,
                mousePosition.x - mascotCenterX
            );

            const maxDistance = 5;
            const eyeX = Math.cos(angle) * maxDistance;
            const eyeY = Math.sin(angle) * maxDistance;

            setEyePosition({ x: eyeX, y: eyeY });
        }
    }, [mousePosition]);

    return (
        <motion.div
            ref={mascotRef}
            className="fixed top-2 left-4 z-[100] pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div
                animate={{
                    y: [0, -3, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {/* Simple pill/capsule shape mascot */}
                <svg
                    width="105"
                    height="135"
                    viewBox="0 0 105 135"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Main body - rounded rectangle (pill shape) */}
                    <rect
                        x="15"
                        y="7"
                        width="75"
                        height="120"
                        rx="37.5"
                        ry="37.5"
                        fill="#FF6B35"
                    />

                    {/* Eyes side by side shifted to right edge */}
                    <ellipse cx="70" cy="45" rx="10" ry="11" fill="white" />
                    <ellipse cx="90" cy="45" rx="10" ry="11" fill="white" />

                    {/* Pupils - cursor tracking */}
                    <motion.circle
                        cx={70}
                        cy={45}
                        r="5"
                        fill="#333"
                        animate={{
                            cx: 70 + eyePosition.x,
                            cy: 45 + eyePosition.y,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                    <motion.circle
                        cx={90}
                        cy={45}
                        r="5"
                        fill="#333"
                        animate={{
                            cx: 90 + eyePosition.x,
                            cy: 45 + eyePosition.y,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />

                    {/* Eye shine */}
                    <circle cx="72" cy="43" r="3" fill="white" opacity="0.9" />
                    <circle cx="92" cy="43" r="3" fill="white" opacity="0.9" />
                </svg>
            </motion.div>
        </motion.div>
    );
};
