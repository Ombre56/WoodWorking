import React from 'react'
import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Home from '../../sections/Shop/Home';

export default function index() {
return (
    <>
      <Head>
        <title>♦ SKLEP STOLARSKI ♦</title>
        <meta name="description" content="SKlep stolarski" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <motion.div initial="hidden" animate="show">
          <section id="home">
            <Home />
          </section>
        </motion.div>
      </main>
    </>
  );
};
