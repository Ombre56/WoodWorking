import React from 'react'
import styled from 'styled-components';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { RiMapPinAddFill } from 'react-icons/ri';

export default function BusinessCard() {
  return (
    <BusinessCardContainer>
      <LeftSide>
        <Title>Nazwa Firmy</Title>
        <Address>
          Przykładowy adres <br />
          Al. Niepodległości 56 <br />
          10-045 Miasto
        </Address>
      </LeftSide>
      <Center>
        <Telephone>
          <BsFillTelephoneFill />
          <TelephoneTxt>+48 234 234 234</TelephoneTxt>
        </Telephone>
        <Mail>
          <IoMdMail />
          <MailTxt>kontakt@firma.pl</MailTxt>
        </Mail>
      </Center>
      <RightSide>
        <RiMapPinAddFill />
      </RightSide>
    </BusinessCardContainer>
  )
}

const BusinessCardContainer = styled.div`
  width: 56vw;
  height: 14.6875rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFFFF;
  border-radius: 7px;
    @media screen and (max-width: 800px){
      width: 16.0625rem;
      margin: 2.875rem 1.25rem;
    }
`;

const LeftSide = styled.div`
  flex: 1 20.4rem;
`;

const Center = styled.div`
  flex: 2 25rem;
`;

const RightSide = styled.div`
  flex: 3 50px;
    svg{
      width: 5rem;
      height: 7rem;
    }
`;

const Telephone = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 2rem;
`;

const Mail = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  margin: 0;
  font-family: 'Righteous';
  font-weight: 400;
  text-transform: uppercase;
  font-size: 36px;
  line-height: 45px;
  color: #000000;
  padding-top: 1.25rem;
  padding-left: 1.8125rem;
`;

const Address = styled.p`
  margin: 0;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 22px;
  line-height: 38px;
  color: #8F8F8F;
  padding-left: 1.8125rem;
  padding-top: 1.25rem;
`;

const TelephoneTxt = styled.p`
  margin: 0;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 22px;
  line-height: 38px;
  color: #8F8F8F;
  padding-left: 10px;
`;

const MailTxt = styled.p`
  margin: 0;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 22px;
  line-height: 38px;
  color: #8F8F8F;
  padding-left: .625rem;
`;