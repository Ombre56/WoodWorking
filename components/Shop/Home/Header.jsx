import React from 'react'
import Image from 'next/image'
import styled from 'styled-components';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';

export default function Header() {
  return (
    <HeaderSection>
      <ImageContainer>
        <Image src='/assets/images/Logo.png' alt='Logo' width='42' height='28' layout='responsive' />
      </ImageContainer>
      <NavigationContainer>
        <Link href="/sklep">Strona Główna</Link>
        <Link href="/sklep/stoly">Stoły</Link>
        <Link href="/sklep/krzesla">Krzesła</Link>
        <Link href="/sklep/kuchenne">Kuchenne</Link>
        <Link href="/sklep/nazewnatrz">Na zewnątrz</Link>
      </NavigationContainer>
      <Icons>
        <div>
          <AiOutlineShoppingCart />
          <span className="shop">0</span>
        </div>
        <div>
          <AiOutlineHeart />
          <span className="heart">0</span>
        </div>
        <CgProfile />
      </Icons>
    </HeaderSection>
  );
};

const HeaderSection = styled.div`
  width: 100%;
  padding: .6875rem .9375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
	top: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.37);
`;

const ImageContainer = styled.div`
  width: 2.625rem;
  height: 1.75rem;
    @media screen and (min-width: 992px){
      width: 4.0625rem;
      height: 3.0625rem;     
    }
`;

const NavigationContainer = styled.div`
  width: 43.75rem;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 24px;
  line-height: 26px;
  display: flex;
  justify-content: space-evenly;
    @media screen and (max-width: 992px){
      display: none;
    }
  a:first-child{
    color:#F17900;
  }
  a:hover{
    color:#F17900;
  }
`;

const Icons = styled.div`
  width: 5.625rem;
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  position: relative;
    .shop{
      position: absolute;
      top: -0.4375rem;
      left: .9375rem;
      width: .8125rem;
      height: 1.0625rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      background-color: #F17900;
      border-radius: 5px;
    }
    .heart{
      position: absolute;
      top: -0.4375rem;
      left: 3.125rem;
      width: .8125rem;
      height: 1.0625rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: .75rem;
      background-color: #F17900;
      border-radius: 5px;
    }
  svg{
    width: 1.1875rem;
    height: 1.1875rem;
    @media screen and (min-width: 992px){
      width: 1.875rem;
      height: 1.875rem;
        &:hover{
          color:#F17900;
          cursor: pointer;
        }
    }
  }
    @media screen and (min-width: 992px){
      margin-right: 20px;
      width: 7rem;
      .shop{
        position: absolute;
        top: -0.4375rem;
        left: 1.25rem;
        width: .9375rem;
        height: 1.25rem;
        font-size: 1rem;
      }
      .heart{
        position: absolute;
        top: -0.4375rem;
        left: 3.75rem;
        width: .9375rem;
        height: 1.25rem;
        font-size: 1rem;
      }
    }
`;
