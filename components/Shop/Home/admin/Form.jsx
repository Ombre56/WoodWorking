import React, { useReducer } from 'react'
import styled from 'styled-components'
import Bug from './Bug'
import Success from './Success'

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value
  }
}

export default function Form() {
  const [formData, setFormData] = useReducer(formReducer, {})

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(formData).length === 0) {
      return (
        console.log("Wypełnij dane!")
      )
    }
    console.log(formData)
  }

  if(Object.keys(formData).length>0) return <Bug message={"Dane nie zostały dodane!"}></Bug>

  return (
    <>
      <Line />
      <FormContainer onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder='Nazwa'
          required={true}
          maxLength={20}
          onChange={setFormData}
        />
        <input 
          type="text" 
          name="image" 
          placeholder='Link do zdjęcia'
          required={true}
          onChange={setFormData}
        />
        <input 
          type="text"
          name="description"
          placeholder='Opis'
          required={true}
          onChange={setFormData}
        />
        <div className="inputs-numbers">
          <input 
            type="number"
            name="price"
            placeholder='Cena'
            required={true}
            maxLength={9}
            onChange={setFormData}
            pattern="[1-9]{1,9}"
            title='Możesz tu wprowadzić tylko cyfry i maksymalnie (9)'
          />
          <input 
            type="number"
            name="amount"
            placeholder='Ilość'
            required={true}
            maxLength={10}
            onChange={setFormData}
            pattern="[1-9]{1,9}"
            title='Możesz tu wprowadzić tylko cyfry i maksymalnie (10)'
          />
        </div>
        <AddButton type="submit">Dodaj</AddButton>
      </FormContainer>
    </>
  )
}

const Line = styled.div`
  margin-bottom: 1.4375rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: .75rem;
  row-gap: 1.1875rem;
  margin-bottom: 1.25rem;
  .inputs-numbers{
    width: 320px;
    display: flex;
    justify-content: space-between;
  }
  input{
    border: none;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 154px;
    height: 40px;
    padding-left: .625rem;
  }
  input::placeholder{
    font-weight: 700;
    font-size: .9375rem;
    line-height: 1.25rem;
    color: rgba(0, 0, 0, 0.2);
  }
  input:focus{
    padding-left: .625rem;
  }
`;

const AddButton = styled.button`
  width: 69px;
  height: 20.54px;
  background: #07590F;
  border-radius: 5px;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
`;