import Head from 'next/head';
import React from 'react'
import styled from 'styled-components'
import ViewData from '../../../components/Shop/Home/admin/ViewData';

export default function index() {
  return (
    <div>
      <Head>
        <title>» Panel administratora «</title>
        <meta name="description" content="SKlep stolarski" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header>Panel administratora</Header>
        <ViewData />
      </main>
    </div>
  )
}

const Header = styled.div`
  width: 100%;
  height: 5.3125rem;
  font-size: 3rem;
  color: #FFFFFF;
  text-align: center;
  padding-top: 5px;
  text-transform: uppercase;
  background-color: #B63E3B;
    @media screen and (max-width: 992px){
      font-size: 2rem;
      padding-top: .9375rem;
    }
`;