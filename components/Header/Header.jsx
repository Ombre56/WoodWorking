import React from 'react'
import styled from 'styled-components';
import Image from 'next/image'
import image from '../../assests/images/Logo.png';
import { BsInstagram, BsFacebook } from 'react-icons/bs';

const HeaderBg = styled.div`
width: 100%;
  height: 6.25rem;
  background: rgba(0, 0, 0, 0.37);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LeftSide = styled.div`
  flex-basis: 10%;
`;

const Images = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
    a{
      color: #FFFFFF;
      padding: 0 .625rem;
    }
`;

const Center = styled.div`
  flex-basis: 80%;
  text-align: center;
  padding-top: .625rem;
`;

const RightSide = styled.div`
  flex-basis: 10%;
`;

export const Header = () => {
  return (
    <HeaderBg>
      <LeftSide>
        <Images>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <BsInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <BsFacebook />
          </a>
        </Images>
      </LeftSide>
      <Center>
        <Image src={image} alt='sss' width='103' height='76' />
      </Center>
      <RightSide>
        sad
      </RightSide>
    </HeaderBg>
  )
}
