import Image from 'next/image';
import styled from 'styled-components';
import React from 'react';
import { TilesDate } from './TilesDate'

export default function Tiles() {
  return (
  <TilesContainer>
      {TilesDate.map(item =>
        <Tile key={item.id}>  
            <h1>{item.title}</h1>
            <p>{item.text}</p>
            <Image src={item.icon} alt={item.id} width={60} height={71} />
      </Tile>
      )}
  </TilesContainer> 
  )
}

const TilesContainer = styled.div`
  margin: 5rem 7rem 0 7rem;
  display: grid;
  grid-gap: .625rem;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 800px){
        grid-template-columns: repeat(1, 1fr);
        margin: 0 2rem;
        padding-bottom: .625rem;
    }
`;

const Tile = styled.div`
  width: 29rem;
  height: 14.625rem;
  color: #fff;
    @media screen and (max-width: 800px){
        width: 19rem;
        margin: .625rem;
    }
`;