import React from 'react'
import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from './Header';
import Hero from './Hero';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export default function ShopLayout({children}) {
return (
    <>
      <Head>
        <title>♦ SKLEP STOLARSKI ♦</title>
        <meta name="description" content="SKlep stolarski" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <motion.div initial="hidden" animate="show">
          <Header />
          <Hero />
          <Home>
            {children}
          </Home>
        </motion.div>
      </main>
    
      <Footer>
        <ImageContainer>
          <Image src='/assets/images/Logo.png' alt='Logo' width='42' height='28' layout='responsive' />
        </ImageContainer>
        <p>Copyright © 2022 by <Link href="https://www.ombre.tech">www.ombre.tech</Link></p>
      </Footer>
    </>
  );
};

const Home = styled.section`
  width: 100%;
  min-height: 90vh;
  @media screen and (max-width: 800px){
    min-height: 51.5vh;
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 10vh;
  background-color: #A13635;
  color: #FFFFFF;
  padding-top: .625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px){
    height: 7vh;
  }
`;

const ImageContainer = styled.div`
  width: 2.625rem;
  height: 1.75rem;
    @media screen and (min-width: 992px){
      width: 4.0625rem;
      height: 3.0625rem;     
    }
`;