import React from 'react'
import styled from 'styled-components';
import Slider from '../components/Specialization/Slider';

export default function Specialization() {
  return (
    <SpecializationSection>
      <Title>specjalizacje</Title>
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
`;