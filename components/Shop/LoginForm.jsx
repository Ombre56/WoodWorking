import { signIn } from 'next-auth/react';
import React from 'react'
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import styled from 'styled-components'
import { getCsrfToken } from 'next-auth/react';
import { useReducer } from 'react';
import Router from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value
  }
}

export default function LoginForm({ csrfToken }) {
  const [formData, setFormData] = useReducer(formReducer, {})
  const [pageState, setPageState] = useState({
    error: '',
    processing: false,
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    let { email, password } = formData;

    setPageState(old => ({ ...old, processing: true, error: '' }));
    
    const res = await signIn("username-login", {
      email: email,
      password: password,
      redirect: true
    }).then(response => {
      console.log(response)
      if (response.ok) {
        Router.push('/sklep')
      } else {
        setPageState(old => ({...old, processing: false, error: response.error}))
      }
    }).catch(error => {
      console.log(error)
      setPageState(old => ({ ...old, processing: false, error: error.message ??  "Coś poszło nie tak!"}));
    });

  };

  return (
    <FormContainer>
      <FormTitle>Logowanie</FormTitle>
      <Form method='POST' onSubmit={handleSubmit} action="/api/auth/callback/credentials">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <Inputs>
              <InputContainer>
                <div className='left-side'>
                  <FaUser />
                  <LineBorder />
                </div>
                <div className='right-side'>
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    // pattern="[a-z0-9._%+-]"
                    required
                    maxLength={20}
                    placeholder='e-mail'
                    onChange={setFormData}
                  />
                </div>
              </InputContainer>
              <InputContainer>
                <div className='left-side'>
                  <RiLockPasswordFill />
                  <LineBorder />
                </div>
                <div className='right-side'>
                  <input 
                    type="password" 
                    name="password"
                    required
                    id="password"
                    placeholder='hasło'
                    onChange={setFormData}
                  />
                </div>
              </InputContainer>
          </Inputs>
          {
            pageState.error !== '' &&
              <Error>
                <p>{pageState.error}</p>
              </Error>
            }
          <LoginButton type='submit' disabled={pageState.processing}>
            <p>Zaloguj</p>
          </LoginButton>
      </Form>
      <Info>Nie masz konta? <Link href="/sklep/register">Zarejestruj się!</Link></Info>
    </FormContainer>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const FormTitle = styled.h1`
  font-weight: 400;
  font-size: 96px;
  line-height: 106px;
  margin: 15px 0 50px 0;
    @media screen and (max-width: 800px){
      font-size: 50px;
      margin-bottom: 30px;
    }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`;

const InputContainer = styled.div`
  width: 30.375rem;
  height: 4.875rem;
  border: 1px solid #000000;
  border-radius: 24.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    width: 2rem;
    height: 2rem;
    color: rgba(0, 0, 0, 0.2)
  }
  .left-side{
    width: 2.8125rem;
    display: flex;
    align-items: center;
  }
  .right-side{
    flex-basis: 80%;
    color: rgba(0, 0, 0, 0.2)
  }
  input{
    border: none;
    width: 100%;
    padding: 10px 0;
    &::placeholder{
      font-family: 'Akshar';
      font-weight: 700;
      font-size: 24px;
      line-height: 26px;
      color: rgba(0, 0, 0, 0.2);
    }
  }
    @media screen and (max-width: 800px){
      width: 19rem;
      height: 3.0625rem;
    }
`;

const LineBorder = styled.div`
  width: 32px;
  height: 1px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transform: rotate(90deg);
`;

const LoginButton = styled.button`
  width: 168px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 33px;
  margin-top: 1.25rem;
  gap: 10px;
  background: #F17900;
  border-radius: 24.5px;
  border: none;
  cursor: pointer;
  p{
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.375rem;
    color: #FFFFFF;
  }
`;

const Error = styled.div`
  margin-top: 1.3125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  width: 448px;
  height: 35px;
  background: #B63E3B;
  border-radius: 6px;
  p{
    margin: 0;
    font-family: 'Akshar';
    font-weight: 700;
    font-size: 15px;
  }
`;

const Info = styled.p`
  font-family: 'Akshar';
  font-size: 1.125rem;
  font-weight: 700;
  a{
    text-decoration-line: underline;
    color: #F17900;
  }
`;