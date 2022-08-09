import React from 'react'
import styled from 'styled-components';
import Image from 'next/image'
import ContactFooter from '../components/Footer/ContactFooter';
import SocialMediaFooter from '../components/Footer/SocialMediaFooter';

function Footer() {
  return (
    <FooterSection>
      <div className="logo">
        <Image src='/assets/images/Logo.png' alt='Logo' width='287' height='231' />
      </div>
      <div className="contact">
        <ContactFooter />
      </div>
      <div className="social-media">
        <SocialMediaFooter />
      </div>
    </FooterSection>
  )
}

export default Footer;

const FooterSection = styled.section`
  width: 100%;
  min-height: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(90.08deg, rgba(196, 196, 196, 0.68) 53.62%, rgba(255, 255, 255, 0.68) 100.84%, rgba(2, 0, 83, 0) 100.85%);
  .logo{
    padding: 33px 0;
    padding-left: 80px;
    flex: 1 25rem;
      @media screen and (max-width: 800px){
        padding: 30px;
      }
  }
  .contact{
    flex: 2 35rem;
  }
  .social-media{
    flex: 3;
  }
`;