import React from 'react'
import styled from 'styled-components';
import Slider from '../components/Specialization/Slider';
import { motion } from 'framer-motion';
import { fromUpAnimation } from '../components/Animation/Animation';

export default function Specialization() {
  return (
    <SpecializationSection>
      <motion.div
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }}
      >
        <Title variants={fromUpAnimation}>specjalizacje</Title>
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

const Title = styled(motion.h2)`
  font-family: 'Righteous';
  font-weight: 400;
  font-size: 64px;
  line-height: 79px;
  text-align: center;
  text-transform: uppercase;
  color: #F17900;
  padding-top: 7rem;
  margin: 0;
      @media screen and (max-width: 800px){
          font-size: 3rem;
    }
`;