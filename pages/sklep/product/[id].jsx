import axios from 'axios';
import Head from 'next/head';
import React from 'react'
import ProductDetails from '../../../components/Shop/Home/ProductDetails';
import { motion } from 'framer-motion';

export default function Product({product}) {
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
            <ProductDetails product={product} />
          </section>
        </motion.div>
      </main>
    </>
  )
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      product: res.data,
    },
  };
};