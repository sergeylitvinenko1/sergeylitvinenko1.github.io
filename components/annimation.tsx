'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedText = ({ text }: any) => {
    const controls = useAnimation();

    useEffect(() => {
      controls.start({ opacity: 1, y: 0 });
    }, []); // Run the animation only once on initial load

    return (
        <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
                scale: .8,
                opacity:0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                delay: .3
                }
            },
            }}>

        {text}

    </motion.div>
  );
};

export default AnimatedText;