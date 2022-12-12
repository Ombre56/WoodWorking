import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import { deleteProduct, getProducts } from '../../../../lib/helper';
import { useQuery, useQueryClient } from 'react-query';
import { BiEdit, BiTrashAlt, BiCheck, BiX } from 'react-icons/bi';
import { IoIosAddCircle } from 'react-icons/io';
import Form from './Form';
import { useSelector, useDispatch } from 'react-redux'
import { toggleChangeAction, updateAction, deleteAction } from '../../../../redux/reducer';

export default function ViewData() {
  const { isLoading, isError, data, error } = useQuery('products', getProducts);
  const visible = useSelector((state) => state.app.client.toggleForm)
  const deleteId = useSelector((state) => state.app.client.deleteId)
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const handleVisible = () => {
    dispatch(toggleChangeAction(visible));
  }

  const deleteHandler = async () => {
    if (deleteId) {
      await deleteProduct(deleteId)
      await queryClient.prefetchQuery('products', getProducts);
      await dispatch(deleteAction(null))
    }  
  }

  const cancleHandler = async () => {
    await dispatch(deleteAction(null))
  }

  if (isLoading) {
    return <div>Produkt jest ładowany...</div>;
  }
  if (isError) {
    return <div>Błąd ładowania {error}</div>;
  }
  
  return (
    <>
      <TitleTable>Produkty</TitleTable>
      <Container>
        <UpsideContainer>
          <div>
            <ButtonAddNewProduct onClick={handleVisible}>
              <span>Dodaj produkt</span>
              <IoIosAddCircle size={15} />
            </ButtonAddNewProduct>
            {visible ? <Form /> : <></>}
          </div>
          <div>
            {deleteId ? DeleteComponent({deleteHandler, cancleHandler}) : <></>}
          </div>
        </UpsideContainer>
        <Table>
          <thead>
            <tr>
              <th>
                <span>Zdjęcie</span>
              </th>
              <th>
                <span>Nazwa</span>
              </th>
              <th>
                <span>Opis</span>
              </th>
              <th>
                <span>Cena</span>
              </th>
              <th>
                <span>Ilość</span>
              </th>
              <th>
                <span>Status</span>
              </th>
              <th>
                <span>Akcje</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {
                data.map((obj, i) => <Tr {...obj} key={i} />)
            }
          </tbody>
        </Table>
      </Container>
    </>
  )
}

function Tr({ _id, name, image, description, price, amount, status }) {
  const visible = useSelector((state) => state.app.client.toggleForm)
  const dispatch = useDispatch()

    const onUpdate = () => {
        dispatch(toggleChangeAction(_id))
        if(visible){
            dispatch(updateAction(_id))
        }
    }

    const onDelete = () => {
        if(!visible){
          dispatch(deleteAction(_id))
      }
    }
  
  return (
    <tr>
      <td style={{width: '29px'}}>
        <ImageContainer>
          <Image
            link='preload'
            rel='preload'
            as='image'
            src={image}
            alt='TileImage'
            width='90'
            height='62'
            layout='responsive'
            priority
          />
        </ImageContainer>
      </td>
      <td style={{width: '150px', fontWeight: 'bold'}}>
        <span>
          {name}
        </span>
      </td>
      <TableDescription>
        <span>
          {description}
        </span>
      </TableDescription>
      <td style={{width: '80px'}}>
        <span style={{fontWeight: 'bold'}}>
          {price} zł
        </span>
      </td>
      <td style={{width: '80px'}}>
        <span style={{fontWeight: 'bold'}}>
          {amount} szt
        </span>
      </td>
      <td>
        {status == 'Dostępny' ?
          <div className='status green'>{status}</div> :
          <div className='status red'>{status}</div>}
      </td>
      <TableActions style={{width: '150px'}}>
        <div className='Button-edit' onClick={onUpdate}>
          <BiEdit size={20} />
        </div>
        <div className='Button-delete' onClick={onDelete}>
          <BiTrashAlt size={20} />
        </div>
      </TableActions>
    </tr>
  )
}

// Delete Component

function DeleteComponent({deleteHandler, cancleHandler}) {
  return (
    <div>
      <p className='title'>Na pewno?</p>
      <div className="buttons">
        <button className='button-yes' onClick={deleteHandler}>
          Tak
          <span><BiX color='rgb(255 255 255)' size={25} /></span>
        </button>
        <button className='button-no' onClick={cancleHandler}>
          Nie
          <span><BiCheck color='rgb(255 255 255)' size={25} /></span>
        </button>
      </div> 
    </div>
  )
}

// Delete Component
const UpsideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  .title{
    font-size: 20px;
  }
  .buttons{
    display: flex;
    justify-content: space-evenly;
    border: none;
    width: 150px;
    margin-right: 20px;
    padding-bottom: 10px;
    color: #FFFFFF;
    .button-yes{
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      color: #FFFFFF;
      font-size: 1.0625rem;
      background-color: #C10000;
      border-radius: 5px;
      cursor: pointer;
    }
    .button-no{
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      color: #FFFFFF;
      font-size: 1.0625rem;
      background-color: #205D1C;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

const TitleTable = styled.h1`
  color: #B63E3B;
  font-size: 3rem;
  text-align: center;
  margin: 0;
  padding: 2.25rem 0;
  text-transform: uppercase;
    @media screen and (max-width: 800px){
      font-size: 2rem;
    }
`;

const Container = styled.div`
  margin: .625rem 12.875rem 0 7.875rem;
  overflow: auto;
  &::-webkit-scrollbar{
    height: 5px;
    width: 5px;
  }
  &::-webkit-scrollbar-track{
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb{
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
    @media screen and (max-width: 992px){
      margin: 0 .625rem .625rem .625rem;
    }
`;

const ButtonAddNewProduct = styled.div`
  width: 9.125rem;
  height: 1.5625rem;
  color: #FFFFFF;
  background: #184B93;
  border-radius: 5px;
  font-weight: bold;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  margin-bottom: 30px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: auto;
  tbody{
    background-color: #F6F4F4;
  }
  th{
    font-weight: bold;
    background-color: #000000;
    color: #FFFFFF;
  }
  td, th { 
    padding: 6px;
    text-align: center;
  }
  .status{
    width: 7.5rem;
    height: 30px;
    border-radius: 13px;
    color: #FFFFFF;
    font-weight: bold;
    padding-bottom: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .green{
    background-color: #205D1C;
  }
  .red{
    background-color: #C10000;
  }
`;

const ImageContainer = styled.div`
  width: 90px;
  height: 62px;
  img{
    border-radius: 7px;
  }
    @media screen and (min-width: 992px){
      width: 11rem;
      height: 7.5rem;
    }
`;

const TableDescription = styled.td`
  max-width: 46.875rem;
    @media screen and (max-width: 992px){
      width: 12.5rem;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
`;

const TableActions = styled.td`
  width: 100px;
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  margin-top: 2.8125rem;
  color: #FFFFFF;
    @media screen and (max-width: 992px){
      padding-top: 6.25rem;
    }
  .Button-edit{
    width: 1.875rem;
    height: 1.875rem;
    background: #46A9F1;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .Button-delete{
    width: 1.875rem;
    height: 1.875rem;
    background: #C10000;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;