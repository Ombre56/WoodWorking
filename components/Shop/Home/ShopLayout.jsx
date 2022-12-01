import React from 'react'
import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from './Header';
import Hero from './Hero';

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
        <section id="home">
            {children}
          </section>
        </motion.div>
      </main>
    </>
  );
};