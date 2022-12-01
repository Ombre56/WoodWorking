import React from 'react'
import Home from '../../sections/Shop/Home';
import ShopLayout from '../../components/Shop/Home/ShopLayout'

export default function index() {
return (
<<<<<<< HEAD
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
=======
    <ShopLayout>
      <Home />
    </ShopLayout>
>>>>>>> shop
  );
};
