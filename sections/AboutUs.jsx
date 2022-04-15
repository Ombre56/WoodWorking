import React from 'react'
import styled from 'styled-components';
import AboutUsBottom from '../components/AboutUs/AboutUsBottom';
import AboutUsTop from '../components/AboutUs/AboutUsTop';

export default function AboutUs() {
  return (
    <AboutUsSection>
      <AboutUsTop />
      <AboutUsBottom />
    </AboutUsSection>
  );
};

const AboutUsSection = styled.section`
  width: 100%;
  min-height: 100vh;
  font-family: 'Righteous', cursive;
  background-color: #F3F1F1;
`;