import { useEffect, useRef } from "react";

interface Meteor {
    x: number;
    y: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
}

interface Star {
    x: number;
    y: number;
    radius: number;
    opacity: number;
    twinkleSpeed: number;
}

export const MeteorBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId: number;

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        // Initialize stars
        const stars: Star[] = [];
        const starCount = 100;

        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.5,
                opacity: Math.random(),
                twinkleSpeed: 0.005 + Math.random() * 0.01,
            });
        }

        // Initialize meteors
        const meteors: Meteor[] = [];

        const createMeteor = (): Meteor => {
            return {
                x: Math.random() * width + width * 0.5, // Start more to the right/top
                y: -100,
                length: 50 + Math.random() * 100,
                angle: Math.PI / 4 + (Math.random() - 0.5) * 0.1, // ~45 degrees
                speed: 5 + Math.random() * 5,
                opacity: 0,
            };
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw Stars
            stars.forEach((star) => {
                star.opacity += star.twinkleSpeed;
                if (star.opacity > 1 || star.opacity < 0.2) {
                    star.twinkleSpeed = -star.twinkleSpeed;
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.opacity)})`;
                ctx.fill();
            });

            // Manage and Draw Meteors
            // Randomly add new meteor
            if (Math.random() < 0.015 && meteors.length < 5) {
                meteors.push(createMeteor());
            }

            for (let i = meteors.length - 1; i >= 0; i--) {
                const meteor = meteors[i];

                meteor.x -= meteor.speed * Math.cos(meteor.angle);
                meteor.y += meteor.speed * Math.sin(meteor.angle);

                // Fade in/out
                if (meteor.y < height * 0.2) {
                    meteor.opacity = Math.min(1, meteor.opacity + 0.05);
                } else {
                    meteor.opacity -= 0.01;
                }

                if (meteor.opacity <= 0 || meteor.x < -100 || meteor.y > height + 100) {
                    meteors.splice(i, 1);
                    continue;
                }

                // Draw Meteor
                const endX = meteor.x + meteor.length * Math.cos(meteor.angle);
                const endY = meteor.y - meteor.length * Math.sin(meteor.angle);

                const gradient = ctx.createLinearGradient(meteor.x, meteor.y, endX, endY);
                gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`);
                gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

                ctx.beginPath();
                ctx.moveTo(meteor.x, meteor.y);
                ctx.lineTo(endX, endY);
                ctx.lineWidth = 2;
                ctx.strokeStyle = gradient;
                ctx.lineCap = "round";
                ctx.stroke();

                // Meteor Head Glow
                ctx.beginPath();
                ctx.arc(meteor.x, meteor.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${meteor.opacity})`;
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] bg-background"
            style={{ opacity: 1 }}
        />
    );
};
