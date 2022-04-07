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
          <source src="/video/HeroBackground.mp4" type="video/mp4" />
      </BannerVideo>
      <BannerText>
        <Title>
          STOLARZ
        </Title>
        <SubTitle>
            Ręczne wykonie | Jakość | Kreatywność
        </SubTitle>
      </BannerText>
    </>
  );
};

const BannerVideo = styled.video`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const BannerText = styled.section`
  padding-top: 30vh;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #FFFFFF;
`;

const Title = styled.p`
  font-size: 6rem;
  /* line-height: 7.0313rem; */
`;

const SubTitle = styled.p`
  font-size: 2.25rem;
  line-height: 2.6369rem;
`;
