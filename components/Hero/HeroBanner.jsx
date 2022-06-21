import React from 'react'
import Image from 'next/image'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { scaleAnimation } from '../Animation/Animation';
import { useScroll } from '../Hooks/useScroll';

export default function HeroBanner() {
  const [element, controls] = useScroll();
  return (
    <>
      <BannerImage >
        <Image src="/assets/images/Background.jpg" alt='HeroBackgroundImage' layout='fill' objectFit='cover' objectPosition='center'/>
      </BannerImage>
      <HeroTextContainer ref={element}>
        <motion.div
            variants={scaleAnimation}
            animate={controls}
            transition={{ type: "tween" }}               
        >
          <HeroTitle>
            STOLARZ
          </HeroTitle>
        </motion.div>
        <motion.div
            variants={scaleAnimation}
            animate={controls}
            transition={{ delay: 0.2, type: "tween" }}             
        >
          <HeroSubTitle>
            Ręczne wykonanie | Jakość | Kreatywność
          </HeroSubTitle>
        </motion.div>
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

const HeroTextContainer = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  margin: auto;
  text-align: center;
  color: #FFFFFF;
`;

const HeroTitle = styled.h1`
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

const HeroSubTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 1.625rem;
      @media screen and (max-width: 800px){
          font-size: .9375rem;
          line-height: 1.125rem;
    }
`;