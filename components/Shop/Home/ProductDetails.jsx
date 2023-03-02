import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import ShopLayout from './ShopLayout'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/cartSlice';
import { useState } from 'react';

export default function ProductDetails({ product }) {
  const [price, setPrice] = useState(product.price);
  const [name, setName] = useState(product.name);
  const [image, setImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProduct({ ...product, price, quantity, name, image }));
  }

  return (
    <ShopLayout>
      <Container>
        <DetailsContainer>
          <ImageContainer>
            <Image
              src={product.image}
              alt='TileImage'
              width='556'
              height='380'
              layout='responsive'
              priority
            />
          </ImageContainer>
          <Details>
            <ul>
              <li className='name'>{product.name}</li>
              <li className='price'>{product.price} zł</li>
              <li className='amount'>{product.amount} szt.</li>
            {product.status == 'Dostępny' ?
              <div className='status green'>✔ {product.status}</div> :
              <div className='status red'>✖ {product.status}</div>}
            </ul>
            <ButtonContainer>
              <div
                className='addCart'
                onClick={handleClick}
                onChange={(e) => setQuantity(e.target.value)}
              >
                Dodaj do koszyka
                <AiOutlineShoppingCart />
              </div>
              <div className='addFavorite'><AiOutlineHeart /></div>
            </ButtonContainer>
          </Details>
        </DetailsContainer>
        <Divider />
        <Description>
          <h2>Opis produktu:</h2>
          <p>{product.description}</p>
        </Description>
      </Container>
    </ShopLayout>
  )
}

const Container = styled.div`
  margin: 0 9.6875rem;
  @media screen and (max-width: 880px){
    margin: 0 1.25rem;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 880px){
    flex-wrap: wrap;
  }
`;

const Details = styled.div`
  width: 25rem;
  height: 23.75rem;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: -10px 6px 15px rgba(0, 0, 0, 0.25);
  ul{
    display: flex;
    flex-direction: column;
    gap: 2.0625rem;
  }
  .name{
    font-size: 2.25rem;
    text-align: center;
  }
  .price{
    font-size: 2rem;
    line-height: 2.1875rem;
    color: #F17900;
  }
  .amount{
    font-size: 1.5rem;
    line-height: 1.625rem;
  }
  .status{
    font-weight: bold;
  }
  .green{
    color: #205D1C;
  }
  .red{
    color: #C10000;
  }
  @media screen and (max-width: 880px){
    margin-top: 9.375rem;
    width: 20.625rem;
    height: 21.875rem;
    ul{
      padding-left: 1.25rem;
    }
    .name{
      font-size: 26px;
      padding-right: 15px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.3125rem;
  padding: 1.25rem 0 0 1.75rem;
  .addCart{
    width: 10rem;
    height: 1.875rem;
    background: #F17900;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    cursor: pointer;
    transition: all 0.7s ease;
    &:hover{
      background: #fff;
      border: 1px solid #535353;
      color: #000;
    }
  }
  .addFavorite{
    width: 2.5rem;
    height: 1.875rem;
    border: 1px solid #F17900;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg{
      width: 20px;
      height: 18.35px;
    }
  }
`;

const Description = styled.div`
  
`;

const ImageContainer = styled.div`
  width: 556px;
  height: 380px;
  img{
    border-radius: 7px;
  }
    @media screen and (max-width: 800px){
      width: 330px;
      height: 7.5rem;
    }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 4.6875rem;
`;
