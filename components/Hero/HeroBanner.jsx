import React from 'react'
import Image from 'next/image'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fromLeftAnimation, fromRightAnimation } from '../Animation/Animation';

export default function HeroBanner() {
  return (
    <>
      <BannerImage >
        <Image
          link='preload'
          rel='preload'
          as='image'
          src="/assets/images/Background.jpg"
          alt='HeroBackgroundImage'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          priority
        />
      </BannerImage>
      <HeroTextContainer
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }}
      >
          <HeroTitle variants={fromLeftAnimation}>
            STOLARZ
          </HeroTitle>
          <HeroSubTitle variants={fromRightAnimation}>
            Ręczne wykonanie | Jakość | Kreatywność
          </HeroSubTitle>
      </HeroTextContainer>
    </>
  );
};

const BannerImage = styled.div`
  position: relative;
  z-index: -1;
  width: 100%;
  height: 100vh;
  `;

const HeroTextContainer = styled(motion.section)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  margin: auto;
  text-align: center;
  color: #FFFFFF;
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 6rem;
  line-height: 7rem;
  margin: 0;
    @media screen and (max-width: 800px){
        font-size: 3.125rem;
        line-height: 3rem;
    }
`;

const HeroSubTitle = styled(motion.p)`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 1.625rem;
      @media screen and (max-width: 800px){
          font-size: .9375rem;
          line-height: 1.125rem;
    }
`;