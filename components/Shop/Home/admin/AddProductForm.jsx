import axios from 'axios';
import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi'
import { useQueryClient, useMutation, useQuery } from 'react-query'
import styled from 'styled-components'
import { addProduct, getProducts } from '../../../../lib/helper'
import Bug from './Bug'
import Success from './Success'

export default function AddProductForm({ formId, formData, setFormData }) {
  const queryClient = useQueryClient()
  const [selectedImage, setSelectedImage] = useState();
  const addMutation = useMutation(addProduct, {
    onSuccess: () => {
      queryClient.prefetchQuery('products', getProducts)
    }
  })

  const handleChange = e => {
    setSelectedImage(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(formData).length === 0) {
      return (
        console.log("Wypełnij dane!")
      )
    }
    let { name, description, price, amount, status } = formData;

    const data = new FormData();
    data.append("file", selectedImage);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dmip4z9x4/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const model = {
        name,
        image: url,
        description,
        price,
        amount,
        status : status ?? "Dostępny",
      };

      console.log(uploadRes.data)
      addMutation.mutate(model);
    } catch (err) {
      console.log(err);
    }
  };

  if (Object.keys(formData).length < 0) return <Bug message={"Dane nie zostały dodane!"}></Bug>
  if (addMutation.isLoading) return <div>Ładowanie!</div>
  if (addMutation.isError) return <Bug message={addMutation.error.message}></Bug>
  if (addMutation.isSuccess) return <Success message={"Dane zostały dodane poprawnie!"}></Success>

  return (
    <>
      <Line />
      <FormContainer method='post' onSubmit={handleSubmit}>
        <div className="input-type">
          <input
            type="text"
            name="name"
            placeholder='Nazwa'
            required={true}
            maxLength={20}
            className='input-name'
            onChange={setFormData}
          />
        </div>
        <InputFileContainer>
          <input 
            type="file"
            name="image"
            id='file'
            accept="image/png, image/jpeg"
            max-size="20"
            onChange={handleChange}
          />
        </InputFileContainer>
        <div className="input-type">
          <textarea 
            name="description"
            placeholder='Opis'
            required={true}
            onChange={setFormData}
          />
        </div>
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
            
        <div className="form-check-inputs">
          <input type="radio" name="status" checked onChange={setFormData} value='Dostępny' />
            <label className='active' htmlFor="radioDefault1">Dostępny</label>
          <input type="radio" name="status" onChange={setFormData} value='Niedostępny' />
            <label className='inactive' htmlFor="radioDefault2">Niedostępny</label>
          </div>
      </div>
      
        <AddButton type="submit">
          Dodaj
          <span style={{paddingLeft: '3px', paddingTop: '5px'}}><BiPlus size={17} /></span>
        </AddButton>
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
  .input-name{
    width: 250px;
  }
  .inputs-numbers{
    width: 320px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: .75rem;
    row-gap: 1.1875rem;
  }
  input{
    border: none;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 154px;
    height: 40px;
    padding-left: .625rem;
  }
  input[type="radio"]{
    width: 15px;
    height: 15px;
  }
  textarea{
    border: none;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 250px;
    height: 100px;
    resize: none;
    padding-left: .625rem;
    padding-top: .625rem;
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
  .form-check-inputs{
    width: 120px;
    appearance: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    label{
      font-size: 15px;
      font-weight: bold;
    }
    .active{
      color: #07590F;
    }
    .inactive{
      color: #C10000;
    }
  }
`;

const InputFileContainer = styled.div`
  [type="file"] {
    color: #878787;
    background: none;
    width: 300px;
    padding-left: 0;
  }
  [type="file"]::-webkit-file-upload-button {
    background: #07590F;
    border: 2px solid #07590F;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 12px;
    outline: none;
    padding: 10px 25px;
    text-transform: uppercase;
    transition: all 1s ease;
  }

  [type="file"]::-webkit-file-upload-button:hover {
    background: #fff;
    border: 2px solid #535353;
    color: #000;
  }
`;

const AddButton = styled.button`
  width: 100px;
  height: 20.54px;
  background: #07590F;
  border-radius: 5px;
  font-weight: bold;
  color: #FFFFFF;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 1s ease;
  &:hover{
    background: #fff;
    border: 1px solid #535353;
    color: #000;
  }
`;