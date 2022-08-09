import React from 'react'
import styled from 'styled-components'

import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';

function SocialMediaFooter() {
  return (
    <SocialMedia>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <BsFacebook />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
    </SocialMedia>
  )
}

export default SocialMediaFooter

const SocialMedia = styled.div`
  color: #8F8F8F;
  text-align: center;
  svg{
    width: 58.29px;
    height: 46.29px;
  }
    @media screen and (max-width: 800px){
      svg{
        width: 38.29px;
        height: 26.29px;
      }
    }
`;