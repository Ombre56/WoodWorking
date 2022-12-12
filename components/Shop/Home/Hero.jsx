import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fromLeftAnimation, fromRightAnimation } from '../../Animation/Animation';
import Link from 'next/link';

export default function Hero() {
  return (
    <HeroSection>
      <BannerImage>
        <Image
          link='preload'
          rel='preload'
          as='image'
          src="/assets/images/Shop-Hero-Image.jpg"
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
          <Image src='/assets/images/hand-saw.svg' alt='Hand Saw' width='29' height='29'/>
            Sklep stolarski
          </HeroTitle>
        <HeroSubTitle variants={fromRightAnimation}>
          <Line></Line>
          <p>Nasze produkty są wykonane z największą starannością.</p>
        </HeroSubTitle>
      </HeroTextContainer>
      <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFF" fillOpacity="1" height='50px' d="M0,160L120,176C240,192,480,224,720,224C960,224,1200,192,1320,176L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </HeroSection>
  )
}

const HeroSection = styled.section`
  position: relative;
  margin-bottom: 1.25rem;
  background-blend-mode: screen;
  .wave{
    position: absolute;
    bottom: -10px;
    left: 0;
    @media screen and (min-width: 992px){
      bottom: -25px;
    }
  }
`;

const BannerImage = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  background: linear-gradient(0deg, rgba(77, 77, 77, 0.5), rgba(77, 77, 77, 0.5));
  img{
    z-index: -1;
  }
    @media screen and (min-width: 992px){
      min-height: 60vh;
    }
`;

const HeroTextContainer = styled(motion.section)`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 0%);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 2.75rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12.5rem;
    @media screen and (min-width: 992px){
      width: 18.75rem;
      font-size: 2.5rem;
      line-height: 3.375rem;
    }
`;

const Line = styled.div`
  width: 3.5rem;
  border: 1px solid #FFFFFF;
  margin: .625rem 0;
`;

const HeroSubTitle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    color: #FFFFFF;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: .6875rem;
    line-height: .9375rem;
    text-align: center;
      @media screen and (min-width: 992px){
      width: 18.75rem;
      font-size: .9375rem;
      line-height: 1.25rem;
      }
  }
`;