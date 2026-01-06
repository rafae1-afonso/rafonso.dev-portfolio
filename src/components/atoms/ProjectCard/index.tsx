'use client'
import type { SpringOptions } from 'motion/react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useRef, useState } from 'react';

const springValues: SpringOptions = {
    damping: 30,
    stiffness: 100,
    mass: 2
};

const ProjectCard = ({ thumbnailSrc, title, borderStyling = 'hover:border-white hover:shadow-[0_0_20px_white]' }: { thumbnailSrc: string, title: string, borderStyling?: string }) => {
    const ref = useRef<HTMLElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, {
        stiffness: 350,
        damping: 30,
        mass: 1
    });

    const [lastY, setLastY] = useState(0);

    function handleMouse(e: React.MouseEvent<HTMLElement>) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -14;
        const rotationY = (offsetX / (rect.width / 2)) * 14;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }

    function handleMouseEnter() {
        scale.set(1.1);
        opacity.set(1);
    }

    function handleMouseLeave() {
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
    }

    return <figure
        ref={ref}
        className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
        style={{
            height: '200px',
            width: '300px'
        }}
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        <motion.div
            className={`              
                duration-200 cursor-pointer backdrop-blur-md font-2p
                relative [transform-style:preserve-3d] flex flex-col pb-5 px-3 rounded border-2 border-b-10
                border-chrome-gray
                ${borderStyling}
                `
            }


            style={{
                width: "300px",
                height: "200px",
                rotateX,
                rotateY,
                scale,
            }}
        >
            <motion.img
                src={thumbnailSrc}
                alt={title + ' thumbnail'}
                className="object-cover max-w-full max-h-[80%] rounded-[15px] will-change-transform [transform:translateZ(0)]"
                style={{
                    width: "300px",
                    height: "200px"
                }}
            />
            <motion.h1 className="">{title}</motion.h1>
        </motion.div>
    </figure>

}

export default ProjectCard