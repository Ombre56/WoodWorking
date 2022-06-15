import React from 'react';
import styled from 'styled-components';
import Card from './Card';

function Cards() {
  return (
    <TeamCards>
      <Card />
    </TeamCards>
  )
}

export default Cards

const TeamCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  margin: 10rem 7rem 0 7rem;
      @media screen and (max-width: 800px){
        grid-template-columns: repeat(1, 1fr);
        margin: 0;
    }
`;
