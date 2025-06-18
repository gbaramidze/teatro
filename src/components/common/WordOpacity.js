"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";



const WordOpacity = ({ paragraph }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.8"],
    });


    const words = paragraph.split(" ");

    return (
        <span
            ref={container}
        >
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;

                return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]}>
                        {word}
                    </Word>
                );
            })}
        </span>
    );
}

export default WordOpacity

const Word = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0.15, 1]);
    return (
        <motion.span style={{ opacity: opacity }}>{children}  </motion.span>
    );
};