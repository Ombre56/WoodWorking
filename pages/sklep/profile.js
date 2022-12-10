import React from 'react'
import Profile from '../../sections/Shop/Profile'
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function profile() {
  return (
    <>
      <Head>
        <title>♦ SKLEP STOLARSKI ♦</title>
        <meta name="description" content="SKlep stolarski" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <motion.div initial="hidden" animate="show">
        <section id="home">
            <Profile />
          </section>
        </motion.div>
      </main>
    </>
  )
}