import React from 'react'
import styled from 'styled-components';
import Review from '../components/Reviews/Review';

function Reviews() {
  return (
    <ReviewsSection>
      <Title>Co klienci sądzą o nas</Title>      
      <Review />
    </ReviewsSection>
  )
}

export default Reviews

const ReviewsSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #EAEAEA;;
`;

const Title = styled.h1`
  color: #F17900;
  margin: 0;
  padding-top: 5.6rem;
  font-family: 'Righteous';
  font-weight: 400;
  font-size: 4rem;
  text-transform: uppercase;
  line-height: 5rem;
  text-align: center;
  position: relative;
  &::after{
    content: '';
    position: absolute;
    width: 71px;
    height: 6px;
    top: 216px;
    left: calc(50% - 71px/2 + 0.5px);
    background: #FFFFFF;;    
  }
    @media screen and (max-width: 800px){
        font-size: 3rem;
        &::after{
          top: 300px;
        }
    }
`;