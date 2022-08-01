import React from 'react'
import styled from 'styled-components';
import { useFormik } from 'formik';

const initialValues = {
  name: '',
  surname: '',
  email: '',
  telephone: '',
  description: '',
};

const onSubmit = ( values, { resetForm } ) => {
  console.log('Form data', values)
  resetForm();
  alert('Formularz został wysłany!')
}

const validate = values => {
  let errors = {}

  if (!values.name) {
    errors.name = 'To pole jest obowiązkowe!'
  }

  if (!values.surname) {
    errors.surname = 'To pole jest obowiązkowe!'
  }

  if (!values.telephone) {
    errors.telephone = 'To pole jest obowiązkowe!'
  }

  if (!values.description) {
    errors.description = 'To pole jest obowiązkowe!'
  }

  if (!values.email) {
    errors.email = 'To pole jest obowiązkowe!'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Zły format email!'
  }

  return errors
};

function Form() {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <ContainerForm>
      <form onSubmit={formik.handleSubmit}>
        <ContainerInputs>
          <div>
            <input
              type="text"
              id='name'
              name='name'
              placeholder='Imię'
              className='form-input'
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? <span className='form-error'>{formik.errors.name}</span> : null}
          </div>
          <div>
            <input
              type="text"
              id='surname'
              name='surname'
              placeholder='Nazwisko'
              className='form-input'
              {...formik.getFieldProps('surname')}
            />
            {formik.touched.surname && formik.errors.surname ? <span className='form-error'>{formik.errors.surname}</span> : null}
          </div>
          <div>
            <input
              type="text"
              id='email'
              name='email'
              placeholder='E-mail'
              className='form-input'
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? <span className='form-error'>{formik.errors.email}</span> : null}
          </div>
          <div>
            <input
              type="text"
              id='telephone'
              name='telephone'
              placeholder='Telefon'
              className='form-input'
              {...formik.getFieldProps('telephone')}
            />
            {formik.touched.telephone && formik.errors.telephone ? <span className='form-error'>{formik.errors.telephone}</span> : null}
          </div>
        </ContainerInputs>
        <textarea
          id='description'
          name='description'
          placeholder='Opisz swój projekt'
          className='form-textarea'
          {...formik.getFieldProps('description')}
        />
        {formik.touched.description && formik.errors.description ? <span className='form-error'>{formik.errors.description}</span> : null}

        <button type="submit">Wyślij</button>
      </form>
    </ContainerForm>
  )
}

export default Form;

const ContainerForm = styled.div`
  width: 35.6875rem;
  margin: 2.875rem 11.5625rem;
  .form-input, .form-textarea{
    width: 16.68rem;
    height: 3.56rem;
    border-radius: 7px;
    background-color: #FFFFFF;
    border: none;
    font-family: 'Righteous';
    font-size: .9375rem;
    padding-left: 6px;
    &::placeholder{
      color: #8F8F8F;
    }
  }

  .form-textarea{
    width: 100%;
    height: 12.6875rem;
    margin-top: 37px;
    resize: none;
    padding-top: 10px;
  }

  button{
    width: 122px;
    height: 43px;
    background-color: #F17900;
    border: none;
    border-radius: 7px;
    margin-top: 21px;
    margin-left: 450px;
    color: #FFFFFF;
    font-family: 'Righteous';
    font-size: 24px;
    text-align: center;
    cursor: pointer;
  }

  .form-error{
    color: red;
    font-style: italic;
  }
`;

const ContainerInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 37px;
  row-gap: 21px;
`;