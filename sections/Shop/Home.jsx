import React from 'react'
import styled from 'styled-components';

import Header from '../../components/Shop/Home/Header';
import Hero from '../../components/Shop/Home/Hero';
import Tiles from '../../components/Shop/Home/Tiles';

import { MdOutlineCategory } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

export default function Home() {
  return (
    <HomeSection>
      <Header />
      <Hero />
      <Title>Nowe i popularne</Title>
      <UnderHeroSection>
        <GridTiles>
          <Tiles />
          <Tiles />
          <Tiles />
          <Tiles />
          <Tiles />
          <Tiles />
        </GridTiles>
        <Navigation>
          <CategoryAndProfile>
            <MdOutlineCategory />
            <span>Kategorie</span>
          </CategoryAndProfile>
          <HomeNav>
            <FaHome />
            <span>Strona główna</span>
          </HomeNav>
          <CategoryAndProfile>
            <CgProfile />
            <span>Profil</span>
          </CategoryAndProfile>
        </Navigation>
      </UnderHeroSection>
    </HomeSection>
  )
}

const HomeSection = styled.section`
  width: 100%;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.1875rem;
  text-align: center;
  color: #000000;
  margin: 0;
  position: relative;
  &::before{
    content: '»';
    color: #F17900;
    padding-right: 10px;
  }
  &::after{
    content: '«';
    color: #F17900;
    padding-left: 10px;   
  }
    @media screen and (min-width: 992px){
      font-size: 3.125rem;
      line-height: 3.5rem;
    }
`;

const GridTiles = styled.div`
  margin: 2.875rem 0 1.25rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.25rem;
  row-gap: 1.25rem;
    @media screen and (max-width: 427px){
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 992px){
      grid-template-columns: repeat(4, 1fr);
      column-gap: 5.625rem;
      row-gap: 2.5rem;
    }
`;

const UnderHeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Navigation = styled.div`
  width: 14.5rem;
  height: 3.5rem;
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-top: 2.1875rem;
  display: flex;
  justify-content: space-evenly;
  span{
    font-weight: 700;
    font-size: 7px;
    line-height: 8px;
    text-align: center;
  }
    @media screen and (min-width: 992px){
      display: none;
    }
`;

const CategoryAndProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  svg{
    align-self: center;
  }
`;

const HomeNav = styled.div`
  color: #F17900;
  display: flex;
  flex-direction: column;
  justify-content: center;
  svg{
    align-self: center;
  }
  border-bottom: 1px solid #F17900;;
`;