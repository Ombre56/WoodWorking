import React from 'react'
import styled from 'styled-components';

export default function AboutUs() {
  return (
    <AboutUsSection>
      <TextContainer>
        <TitleSection>
          O nas
        </TitleSection>
        <SubTitleSection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </SubTitleSection>
      </TextContainer>
    </AboutUsSection>
  )
}

const AboutUsSection = styled.section`
  width: 100%;
  min-height: 100vh;
  font-family: 'Righteous', cursive;
  background-color: #F3F1F1;
`;

const TextContainer = styled.div`
  width: 50%;
  height: 25rem;
`;

const TitleSection = styled.h1`
font-family: 'Righteous', cursive;
font-weight: 400;
font-size: 4rem;
line-height: 79px;
margin: .125rem 1.25rem;
color: #F17900;
`;

const SubTitleSection = styled.p`
width: 31.3125rem;
height: 7.625rem;
font-family: 'Roboto';
font-weight: 700;
font-size: 36px;
line-height: 42px;
margin-left: 1.25rem;
`;