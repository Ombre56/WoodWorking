import React from 'react'
import styled from 'styled-components';

import Header from '../components/Header/Header';
import HeroBanner from '../components/Hero/HeroBanner';

export default function Hero() {
  return (
    <HeroSection>
      <Header />
      <HeroBanner />
    </HeroSection>
  )
}

const HeroSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(62, 62, 62, 0.78), rgba(62, 62, 62, 0.78));
`;