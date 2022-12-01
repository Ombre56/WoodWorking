import React from 'react'
import styled from 'styled-components'
import Bug from './Bug'
import Success from './Success';
import { BiBrush } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getProduct, getProducts, updateProduct } from '../../../../lib/helper';
import { toggleChangeAction } from '../../../../redux/reducer';

export default function UpdateProductForm({ formId, formData, setFormData }) {

  const visible = useSelector((state) => state.app.client.toggleForm)
  const dispatch = useDispatch()
  const queryClient = useQueryClient();
  const {isLoading, isError, data, error} = useQuery(['products', formId], () => getProduct(formId))
  const UpdateMutation = useMutation((newData) => updateProduct(formId, newData), {
    onSuccess: async () => {
      queryClient.prefetchQuery('products', getProducts)
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    let updated = Object.assign({}, data, formData)
    console.log(updated)
    await UpdateMutation.mutate(updated)
    dispatch(toggleChangeAction(visible));
  };

  if(isLoading) return <div>Loading...!</div>
  if(isError) return <div>Error</div>

  return (
    <>
      <Line />
      <FormContainer onSubmit={handleSubmit}>
        <div className="input-type">
          <input
            type="text"
            name="name"
            defaultValue={data.name}
            placeholder='Nazwa'
            required={true}
            className='input-name'
            maxLength={20}
            onChange={setFormData}
          />
        </div>
        <InputFileContainer>
          <input 
            type="file"
            name="image"
            // defaultValue={data.image}
            accept="image/png, image/jpeg"
            onChange={setFormData}
          />
        </InputFileContainer>
        <div className="input-type">
          <textarea 
            name="description"
            defaultValue={data.description}
            placeholder='Opis'
            onChange={setFormData}
          />
        </div>
        <div className="inputs-numbers">
          <input 
            type="number"
            name="price"
            placeholder='Cena'
            defaultValue={data.price}
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
            defaultValue={data.amount}
            maxLength={10}
            onChange={setFormData}
            pattern="[1-9]{1,9}"
            title='Możesz tu wprowadzić tylko cyfry i maksymalnie (10)'
          />
        <div className="form-check-inputs">
          <input type="radio" name="status" onChange={setFormData} value='Dostępny' defaultChecked={data.status == 'Dostępny'} />
            <label className='active' htmlFor="radioDefault1">Dostępny</label>
          <input type="radio" name="status" onChange={setFormData} value='Niedostępny' defaultChecked={data.status !== 'Dostępny'} />
            <label className='inactive' htmlFor="radioDefault2">Niedostępny</label>
        </div>
      </div>
        <EditButton type="submit">
          Edytuj
          <span style={{paddingLeft: '3px', paddingTop: '5px'}}><BiBrush size={17} /></span>
        </EditButton>
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
  input[type="radio"]:checked{
    background-color: green;
    border: green;
  }
  textarea{
    border: none;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 250px;
    height: 100px;
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
    background: #B63E3B;
    border: 2px solid #B63E3B;
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
    border: 1px solid #535353;
    color: #000;
  }
`;


const EditButton = styled.button`
  width: 100px;
  height: 20.54px;
  background: #B63E3B;
  border-radius: 5px;
  color: #FFFFFF;
  font-weight: bold;
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