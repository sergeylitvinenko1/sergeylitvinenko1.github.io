'use client'
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AppearAnimation = styled(motion.div)`
  opacity: 0;
  transform: translateY(20px);
`;

const AnimatedObject = ({ children }: any) => {
  return (
    <AppearAnimation
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
    >

      {/* Your content goes here */}
      {children}

    </AppearAnimation>
  );
};

export default AnimatedObject;