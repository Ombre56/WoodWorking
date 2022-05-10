import React from 'react'
import styled from 'styled-components';
import Tiles from '../components/WhyUs/Tiles';

export default function WhyUs() {
  return (
    <WhyUsSection>
      <Title>Dlaczego My</Title>
      <Tiles />
    </WhyUsSection>
  )
}

const WhyUsSection = styled.section`
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
  padding-top: 3.875rem;
  font-family: 'Righteous';
  font-weight: 400;
  font-size: 4rem;
  line-height: 5rem;
  text-align: center;
    @media screen and (max-width: 800px){
        font-size: 3rem;
    }
`;