import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';

export default function Tiles() {
  return (
    <Tile>
      <ImageContainer>
        <Image
          src='/assets/images/TileImage.jpg'
          alt='TileImage'
          width='90'
          height='62'
          layout='responsive'
          priority
        />
      </ImageContainer>
      <Title>Stół z dębowego drewna</Title>
      <Price>300zł</Price>
      <Button>
        <span>Sprawdź</span>
      </Button>
    </Tile>
  )
}

const Tile = styled.section`
  width: 7.25rem;
  height: 9.5rem;
  background: #FFFFFF;
  box-shadow: 2px 5px 9px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    @media screen and (min-width: 992px){
      width: 14.1875rem;
      height: 18.625rem;
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

const Title = styled.p`
  width: 5rem;
  font-weight: 500;
  font-size: .625rem;
  line-height: .6875rem;
  text-align: center;
  color: #000000;
    @media screen and (min-width: 992px){
      width: 9.375rem;
      font-size: 1rem;
      line-height: 1.125rem;
    }
`;

const Price = styled.span`
  font-weight: 600;
  font-size: .875rem;
  line-height: .9375rem;
  text-align: center;
  color: #F17900;
  margin-bottom: .3125rem;
    @media screen and (min-width: 992px){
      font-size: 1.5rem;
      line-height: 1.625rem;
    }
`;

const Button = styled.button`
  width: 3.375rem;
  height: 1.0625rem;
  background: #F17900;
  border-radius: .4688rem;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  span{
    font-weight: 400;
    font-size: .625rem;
    line-height: .6875rem;
      @media screen and (min-width: 992px){
        font-size: 1.0625rem;
        line-height: 1.375rem;
      }
    }
    @media screen and (min-width: 992px){
      width: 5.4375rem;
      height: 1.75rem;
      margin-top: .625rem;
      &:hover{
          background-color: #357960;
        }
    }
`;
