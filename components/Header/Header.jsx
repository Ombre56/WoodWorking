import styled from 'styled-components';
import Image from 'next/image'

import image from '../../assests/images/Logo.png';
import NavigationLines from '../../assests/images/Navigation.png';

import { BsInstagram, BsFacebook } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';

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
        <Image src={image} alt='Logo' width='103' height='76' />
      </Center>
      <RightSide>
        <ShopAndNav>
          <AiOutlineShoppingCart className='shoppingCart' />
          <NavigationImg>
            <Image src={NavigationLines} alt='Navigation' width={22} height={12} />
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
  z-index: 10;
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