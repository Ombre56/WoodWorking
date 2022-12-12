import React from 'react'
import styled from 'styled-components';
import ShopLayout from '../../components/Shop/Home/ShopLayout';
import RegisterForm from '../../components/Shop/RegisterForm';

export default function register() {
  return (
    <ShopLayout>
      <FormContainer>
        <RegisterForm />
      </FormContainer>
    </ShopLayout>
  )
}

const FormContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;