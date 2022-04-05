import React from 'react'
import styled from 'styled-components';
import BackgroundImg from '../../assests/images/Background.jpg';

const BannerBg = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: linear-gradient(0deg, rgba(62, 62, 62, 0.46), rgba(62, 62, 62, 0.46));
`;

const BannerText = styled.div`
padding-top: 50vh;
  text-align: center;
  color: #FFFFFF;
`;

const Title = styled.div`
  font-size: 6rem;
  line-height: 7.0313rem;
`;

const SubTitle = styled.div`
  font-size: 2.25rem;
  line-height: 2.6369rem;
`;

export const Banner = () => {
  return (
    <BannerBg>
      <BannerText>
      <Title>
        STOLARZ
        </Title>
        <SubTitle>
          Ręczne wykonie | Jakość | Kreatywność
        </SubTitle>
      </BannerText>
    </BannerBg>  
  )
}
