import React from 'react'
import styled from 'styled-components';
import BusinessCard from '../components/Contact/BusinessCard';
import Form from '../components/Contact/Form';
import MapLocation from '../components/Contact/MapLocation';

function Contact() {
  return (
    <ContactSection>
      <Title>Kontakt</Title>
      <CotainerUp>
        <BusinessCard />
      </CotainerUp>
      <CotainerDown>
        <Form />
        <MapLocation />
      </CotainerDown>
    </ContactSection>
  )
}

export default Contact

const ContactSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #F3F1F1;
`;

const CotainerUp = styled.div`
  width: 66.1875rem;
  margin: 2.875rem 11.5625rem;
    @media screen and (max-width: 800px){
      width: 16.0625rem;
      margin: 2.875rem 1.25rem;
    }
`;

const CotainerDown = styled.div`
  display: flex;
  flex-direction: row;    
    @media screen and (max-width: 800px){
      flex-direction: column;
      }
`;

const Title = styled.h1`
  color: #F17900;
  margin: 0;
  padding-left: 11.5rem;
  padding-top: 5.6rem;
  font-family: 'Righteous';
  font-weight: 400;
  font-size: 48px;
  line-height: 60px;
  text-align: left;
    @media screen and (max-width: 800px){
        font-size: 3rem;
        padding-left: 1.25rem;
    }
`;