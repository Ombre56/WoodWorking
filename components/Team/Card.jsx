import React from 'react'
import styled from 'styled-components';
import Image from 'next/image'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const SocialMediaList = (
  <>
    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
      <BsFacebook  style={{ marginRight: 23 }} />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
      <BsInstagram style={{ marginRight: 23 }} />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noreferrer">
      <BsTwitter />
    </a>
  </>
);

function Card() {
  return (
    <>
      <TeamCard>
        <ProfilePhoto>
          <Image src="/assets/images/firstPhotoProfile.png" alt="First photo" width={232} height={252} />
        </ProfilePhoto>
        <Name>Jan Kowalski</Name>
        <Profession>st.Stolarz</Profession>
        <SocialMedia>
          { SocialMediaList }
        </SocialMedia>
      </TeamCard>
      <TeamCard>
        <ProfilePhoto>
          <Image src="/assets/images/secondPhotoProfile.png" alt="First photo" width={232} height={252} />
        </ProfilePhoto>
        <Name>Jan Kowalski</Name>
        <Profession>Stolarz</Profession>      
        <SocialMedia>
          { SocialMediaList }
          </SocialMedia>
      </TeamCard>
      <TeamCard>
        <ProfilePhoto>
          <Image src="/assets/images/thirdPhotoProfile.png" alt="First photo" width={232} height={252} />
        </ProfilePhoto>
        <Name>Jan Kowalski</Name>
        <Profession>st.Stolarz</Profession>
        <SocialMedia>
          { SocialMediaList }
        </SocialMedia>
      </TeamCard>
    </>
  )
}

export default Card;

const TeamCard = styled.div`
  width: 22.25rem;
  height: 27.1875rem;
  background: #FFFFFF;
  border-radius: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
        @media screen and (max-width: 800px){
        margin-top: 3.125rem;
        width: 16rem;
        height: 20.9375rem;
        margin-bottom: 1.875rem;
    }
`;

const ProfilePhoto = styled.div`
  position: absolute;
  top: -2.75rem;
  left: 3.5625rem;
  z-index: 10;
      @media screen and (max-width: 800px){
        margin-top: 6.25rem;
        width: 9.375rem;
        height: 10.625rem;
        top: -7.5rem;
        left: 3.125rem;
    }
`;

const Name = styled.h2`
  font-family: 'Righteous';
  font-weight: 400;
  margin: 0;
  font-size: 2rem;
  line-height: 2.5rem;
  padding-top: 12.5rem;
  text-align: center;
      @media screen and (max-width: 800px){
        padding-top: 8.125rem;
        font-size: 1.5rem;
    }
`;

const Profession = styled.span`
  font-family: 'Righteous';
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.5rem;
  color: #F17900;
      @media screen and (max-width: 800px){
        font-size: 1rem;
    }
`;

const SocialMedia = styled.div`
  width: 8.6875rem;
  height: 1.75rem;
  padding-top: 1.25rem;
  text-align: center;
      svg{
        width: 1.6rem;
        height: 1.6rem;
          @media screen and (max-width: 800px){
              width: 1.06rem;
              height: 1.06rem;
            }
  }
`;