import React from 'react'
import Image from 'next/image'
import styled from 'styled-components';

export default function AboutUsTop() {
  return (
    <AboutUsTopContainer>
      <TextContainer>
        <TitleAboutUs>
          O nas
        </TitleAboutUs>
        <SubTitleAboutUs>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </SubTitleAboutUs>
      </TextContainer>
      <ImagesContainer>
        <ImageOneAboutUs>
          <Image
            src='/assets/images/aboutUsPng1.png'
            alt='AboutUsImage1'
            layout='responsive'
            width={431}
            height={288}
          />
        </ImageOneAboutUs>
        <ImageTwoAboutUs>
          <Image
            src='/assets/images/aboutUsPng2.png'
            alt='AboutUsImage2'
            layout='responsive'
            width={431}
            height={288}
          />
        </ImageTwoAboutUs>
      </ImagesContainer>
    </AboutUsTopContainer>
  );
};

const AboutUsTopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
      @media screen and (max-width: 800px){
          flex-direction: column;
    }
`;

const TextContainer = styled.div`
  width: 50%;
  height: 25rem;
  padding-left: 6.8125rem;
    @media screen and (max-width: 800px){
          width: 100%;
          padding-left: 3rem;
    }
`;

const ImagesContainer = styled.div`
  position: relative;
  width: 50%;
  height: 25rem;
    @media screen and (max-width: 800px){
        margin: 1.25rem 0;
        width: 100%;
    }
`;

const TitleAboutUs = styled.h1`
  font-family: 'Righteous', cursive;
  font-weight: 400;
  font-size: 4rem;
  line-height: 79px;
  padding: .125rem 1.25rem;
  color: #F17900;
    @media screen and (max-width: 800px){
          width: 70vw;
    }
`;

const SubTitleAboutUs = styled.p`
  width: 22vw;
  height: 13vh;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
    @media screen and (max-width: 800px){
        width: 70vw;
        font-size: 1.625rem;
    }
`;

const ImageOneAboutUs = styled.div`
  width: 27rem;
  height: 18rem;
  padding-top: 30px;
    @media screen and (max-width: 800px){
        width: 20.75rem;
        height: 11.75rem;
    }
`;

const ImageTwoAboutUs = styled.div`
  position: absolute;
  left: 6rem;
  top: 11.375rem;
  width: 27rem;
  height: 18rem;
    @media screen and (max-width: 800px){
        left: 1rem;
        width: 20.75rem;
        height: 11.75rem;
    }
`;
