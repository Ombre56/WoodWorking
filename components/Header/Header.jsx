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
        <ShopAndNav>
          <AiOutlineShoppingCart className='shoppingCart' />
          <NavigationImg>
              <Navigation />
          </NavigationImg>
        </ShopAndNav>
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
  flex-basis: 10%;
`;

const Center = styled.div`
  flex-basis: 80%;
  text-align: center;
  padding-top: .625rem;
`;

const RightSide = styled.div`
  flex-basis: 10%;
`;

const InstagramAndFb = styled.div`
  text-align: center;
  color: #FFFFFF;
    a{
      padding: 0 .625rem;
    }
`;

const ShopAndNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #FFFFFF;

  .shoppingCart{
      width: 1.6875rem;
      height: 1.4375rem;
      margin-right: 1rem;
    }
`;

const NavigationImg = styled.div`
  width: 30px;
  margin-bottom: 10px;
`;