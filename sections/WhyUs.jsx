import React from 'react'
import styled from 'styled-components';
import Tiles from '../components/WhyUs/Tiles';
import { motion } from 'framer-motion';
import { fromUpAnimation, fromDownAnimation } from '../components/Animation/Animation';
import { useScroll } from '../components/Hooks/useScroll';

export default function WhyUs() {
  const [element, controls] = useScroll();
  return (
    <WhyUsSection ref={element}>
      <motion.div
        variants={fromUpAnimation}
        animate={controls}
        transition={{delay: 0.1, type: "tween"}}      
      >
        <Title>Dlaczego My</Title>
      </motion.div>
      <motion.div
        variants={fromDownAnimation}
        animate={controls}
        transition={{delay: 0.1, type: "tween"}}            
      >
        <Tiles />
      </motion.div>  
    </WhyUsSection>
  )
}

const WhyUsSection = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background-image: url('/assets/images/WhyUsBackground.png');
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
`;

const Title = styled.h1`
  color: #F17900;
  margin: 0;
  padding-top: 20vh;
  font-family: 'Righteous';
  font-weight: 400;
  font-size: 4rem;
  line-height: 5rem;
  text-align: center;
    @media screen and (max-width: 800px){
        font-size: 3rem;
    }
`;