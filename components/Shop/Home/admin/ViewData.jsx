import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import { getProducts } from '../../../../lib/helper';
import { useQuery } from 'react-query';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';
import { IoIosAddCircle } from 'react-icons/io';
import Form from './Form';

export default function ViewData({product}) {
  const { isLoading, isError, data, error } = useQuery('product', getProducts);

  if (isLoading) {
    return <div>Produkt jest ładowany...</div>;
  }
  if (isError) {
    return <div>Błąd ładowania {error}</div>;
  }
  
  return (
    <Container>
      <ButtonAddNewProduct>
        <span>Dodaj produkt</span>
        <IoIosAddCircle size={15} />
      </ButtonAddNewProduct>
      <FormContainer>
        <Form />
      </FormContainer>
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
          {data.map((product) =>
            <tr>
              <td style={{width: '29px'}}>
                <ImageContainer>
                  <Image
                    link='preload'
                    rel='preload'
                    as='image'
                    src={product.image}
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
                  {product.name}
                </span>
              </td>
              <TableDescription>
                <span>
                  {product.description}
                </span>
              </TableDescription>
              <td>
                <span style={{fontWeight: 'bold'}}>
                  {product.price}
                </span>
              </td>
              <td>
                <span style={{fontWeight: 'bold'}}>
                  {product.amount}
                </span>
              </td>
              <td>
                <TableStatus>
                  <span>
                    {product.status}
                  </span>
                </TableStatus>
              </td>
              <TableActions>
                <div className='Button-edit'>
                  <BiEdit size={20} />
                </div>
                <div className='Button-delete'>
                  <BiTrashAlt size={20} />
                </div>
              </TableActions>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  )
}

const Container = styled.div`
  margin: 6.9375rem 12.875rem 0 7.875rem;
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
      margin: 6.25rem .625rem;
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

const FormContainer = styled.div`
  width: 400px;
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
    @media screen and (max-width: 992px){
      width: 12.5rem;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
`;

const TableStatus = styled.div`
  width: 7.5rem;
  height: 30px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #205D1C;
  border-radius: 13px;
  font-weight: bold;
`;

const TableActions = styled.td`
  width: 100px;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
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