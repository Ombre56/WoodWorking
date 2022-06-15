import styled from 'styled-components';
import Image from 'next/image'

import { BsInstagram, BsFacebook } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <HeaderBg>
      <LeftSide>
        <InstagramAndFb>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <BsInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <BsFacebook />
          </a>
        </InstagramAndFb>
      </LeftSide>
      <Center>
        <Image src='/assets/images/Logo.png' alt='Logo' width='103' height='76' />
      </Center>
      <RightSide>
        <NavigationImg>
          <Navigation />
        </NavigationImg>
      </RightSide>
    </HeaderBg>
  );
};

const HeaderBg = styled.section`
  width: 100%;
  height: 6.25rem;
  background: rgba(0, 0, 0, 0.37);
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
	top: 0;
  z-index: 1000;
`;

const LeftSide = styled.div`
  flex-basis: 15%;
`;

const Center = styled.div`
  flex-basis: 80%;
  text-align: center;
  padding-top: .625rem;
    @media screen and (max-width: 800px){
        padding-left: 1.25rem;
    }
`;

const RightSide = styled.div`
  flex-basis: 5%;
`;

const InstagramAndFb = styled.div`
  text-align: center;
  color: #FFFFFF;
    a{
      padding: 0 .625rem;
    }
`;

const NavigationImg = styled.div`
  width: 30px;
  margin-bottom: 10px;
  color: #FFFFFF;
`;