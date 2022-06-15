import React from 'react'
import styled from 'styled-components';
import Cards from '../components/Team/Cards';

export default function Team() {
  return (
    <TeamSection>
      <Title>Nasz zespół</Title>
      <Cards />
    </TeamSection>
  )
}

const TeamSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #F3F1F1;
`;

const Title = styled.h1`
  color: #F17900;
  margin: 0;
  padding-top: 14vh;
  font-family: 'Righteous';
  font-weight: 400;
  font-size: 4rem;
  line-height: 5rem;
  text-align: center;
    @media screen and (max-width: 800px){
        font-size: 3rem;
    }
`;