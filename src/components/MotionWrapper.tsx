import { motion, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface MotionWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    animateOnLoad?: boolean;
}

export const MotionWrapper = ({
    children,
    className = "",
    delay = 0,
    animateOnLoad = false,
}: MotionWrapperProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });
    const [hasAnimated, setHasAnimated] = useState(animateOnLoad);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        // If animateOnLoad is true, animate immediately
        if (animateOnLoad) {
            setHasAnimated(true);
            return;
        }

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isScrollingDown = currentScrollY > lastScrollY;

            if (isInView && isScrollingDown && !hasAnimated) {
                setHasAnimated(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isInView, hasAnimated, lastScrollY, animateOnLoad]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.3, delay: delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
