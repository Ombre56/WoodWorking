import React from 'react'
import styled from 'styled-components';
import Slider from '../components/Specialization/Slider';
import { motion } from 'framer-motion';
import { fromLeftAnimation } from '../components/Animation/Animation';
import { useScroll } from '../components/Hooks/useScroll';

export default function Specialization() {
  const [element, controls] = useScroll();
  return (
    <SpecializationSection ref={element}>
      <motion.div
        variants={fromLeftAnimation}
        animate={controls}
        transition={{delay: 0.1, type: "tween"}}      
      >
        <Title>specjalizacje</Title>
      </motion.div>
      <Slider />
    </SpecializationSection>
  )
}

const SpecializationSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #EAEAEA;
`;

const Title = styled.h2`
  font-family: 'Righteous';
  font-weight: 400;
  font-size: 64px;
  line-height: 79px;
  text-align: center;
  text-transform: uppercase;
  color: #F17900;
  padding-top: 5rem;
  margin: 0;
      @media screen and (max-width: 800px){
          font-size: 3rem;
    }
`;