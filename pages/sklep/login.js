import React from 'react'
import styled from 'styled-components';
import ShopLayout from '../../components/Shop/Home/ShopLayout';
import LoginForm from '../../components/Shop/LoginForm';

export default function login() {
  return (
    <ShopLayout>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </ShopLayout>
  )
}

const FormContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;