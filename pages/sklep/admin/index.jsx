import Head from 'next/head';
import React, {useState} from 'react'
import styled from 'styled-components'
import LoginForm from '../../../components/Shop/Home/admin/LoginForm';
import ViewData from '../../../components/Shop/Home/admin/ViewData';
import ViewUsers from '../../../components/Shop/Home/admin/ViewUsers';

export default function index() {
  const [checkAdmin, setCheckAdmin] = useState("");
  return (
    <div>
      <Head>
        <title>» Panel administratora «</title>
        <meta name="description" content="Sklep stolarski" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {checkAdmin ?
          <PanelAdmin>
            <Header>Panel administratora</Header>
            <ViewData />
            <ViewUsers />
          </PanelAdmin>
          :
          <FormAdmin>
            <div className="glass-container">
              <LoginForm checkAdmin={checkAdmin} setCheckAdmin={setCheckAdmin} />
            </div>
          </FormAdmin>
        }
          {/* <PanelAdmin>
            <Header>Panel administratora</Header>
            <ViewData />
            <ViewUsers />
          </PanelAdmin> */}
      </main>
    </div>
  )
}

const PanelAdmin = styled.section`
  width: 100%;
  max-height: 100vh;
  background-color: #F9F9F9;
`;

const FormAdmin = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/images/AdminForm-Background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .glass-container{
      min-width: 30vw;
      min-height: 45vh;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      border-radius: 10px;
      backdrop-filter: blur(6px);
      background-color: rgba(0,0,0, 0.075);
      box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
      border: 2px rgba(255,255,255,0.4) solid;
      border-bottom: 2px rgba(40,40,40,0.35) solid;
      border-right: 2px rgba(40,40,40,0.35) solid;
  }
`;

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