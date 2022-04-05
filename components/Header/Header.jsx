import React from 'react'

import styled from 'styled-components';
import Image from 'next/image'
import image from '../../assests/images/Logo.png';
import NavigationLines from '../../assests/images/Navigation.png';

import { BsInstagram, BsFacebook } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const HeaderBg = styled.div`
width: 100%;
  height: 6.25rem;
  background: rgba(0, 0, 0, 0.37);
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
	top: 0;
  z-index: 10;
`;

const LeftSide = styled.div`
  flex-basis: 10%;
`;

const Images = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  color: #FFFFFF;
    a{
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
        <Image src={image} alt='Logo' width='103' height='76' />
      </Center>
      <RightSide>
        <Images className='left-images'>
          <AiOutlineShoppingCart />
          <Image src={NavigationLines} alt='Navigation' width='19' height='7' />
        </Images>
      </RightSide>
    </HeaderBg>
  )
}
