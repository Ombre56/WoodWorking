import React from 'react'
import styled from 'styled-components';
import Tiles from '../components/WhyUs/Tiles';
import { motion } from 'framer-motion';
import { fromDownAnimation, fromLeftAnimation } from '../components/Animation/Animation';

export default function WhyUs() {
  return (
    <WhyUsSection>
      <motion.div
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }}          
      >
        <Title variants={fromDownAnimation}>Dlaczego My</Title>
      </motion.div>
      <motion.div>
        <Tiles variants={fromLeftAnimation}/>
      </motion.div>  
    </WhyUsSection>
  )
}

const WhyUsSection = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url('/assets/images/WhyUsBackground.png');
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
`;

const Title = styled(motion.h1)`
  color: #F17900;
  margin: 0;
  padding-top: 7rem;
  font-family: 'Righteous';
  font-weight: 400;
  font-size: 4rem;
  line-height: 5rem;
  text-align: center;
    @media screen and (max-width: 800px){
        font-size: 3rem;
    }
`;