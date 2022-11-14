import React, { useReducer } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AddProductForm from './AddProductForm'
import UpdateProductForm from './UpdateProductForm';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value
  }
}

export default function Form() {
  const [formData, setFormData] = useReducer(formReducer, {})
  const formId = useSelector((state) => state.app.client.formId);
  return (
    <FormContainer>
      {formId ? UpdateProductForm({formId, formData, setFormData}) : AddProductForm({formData, setFormData})}
    </FormContainer>
  )
}

const FormContainer = styled.div`
  width: 600px;
`;

