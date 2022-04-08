import React from 'react'
import styled from 'styled-components';

export default function HeroBanner() {
  return (
    <>
      <BannerVideo
        autoPlay
        loop
        muted
        disablePictureInPicture
        >
        <source src={require('../../assets/video/HeroBackground.mp4')} type="video/mp4" />
      </BannerVideo>
      <HeroTextContainer>
        <HeroTitle>
          STOLARZ
        </HeroTitle>
        <HeroSubTitle>
            Ręczne wykonanie | Jakość | Kreatywność
        </HeroSubTitle>
      </HeroTextContainer>
    </>
  );
};

const BannerVideo = styled.video`
  position: relative;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
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
`;

const HeroSubTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 1.625rem;
`;