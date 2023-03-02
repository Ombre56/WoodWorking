import React from 'react'
import Head from 'next/head';
import { motion } from 'framer-motion';
import Home from '../../sections/Shop/Home';
import {useSession} from 'next-auth/react'

export default function index() {
  const { data: session, status } = useSession({
    required: true,
  });
  console.log("session", session, status)
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
            <Home />
          </section>
        </motion.div>
      </main>
  </>
  );
};