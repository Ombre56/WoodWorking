import React from 'react'
import styled from 'styled-components';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Circles() {
  const amountFirst = 250;
  const amountSecond = 100;
  const amountThird = 300;
  return (
    <CirclesContainer>
      <FirstCircleContainer>
        <FirstCircle>
          <Amount>{amountFirst}</Amount>
        </FirstCircle>
        <TitleCircle>Skończonych projektów</TitleCircle>
      </FirstCircleContainer>
      <SecondCircleContainer>
        <SecondCircle>
          <Amount>{amountSecond}</Amount>
        </SecondCircle>
        <TitleCircle>Wykorzystanego drewna</TitleCircle>
      </SecondCircleContainer>
      <ThirdCircleContainer>
        <ThirdCircle>
            <Amount>{amountThird}</Amount>        
        </ThirdCircle>
        <TitleCircle>Zadowolonych klientów</TitleCircle>
      </ThirdCircleContainer>
    </CirclesContainer>
  )
}

export default Circles

const CirclesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 8.375rem;
    @media screen and (max-width: 800px){
        flex-direction: column;
    }
`;

const FirstCircleContainer = styled.div`
  display: flex;
  flex-direction: column;
    @media screen and (max-width: 800px){
        flex-direction: column;
        padding-bottom: 1.25rem;
    }
`;

const SecondCircleContainer = styled.div`
  display: flex;
  flex-direction: column;
    @media screen and (max-width: 800px){
        flex-direction: column;
        padding-bottom: 1.25rem;
    }
`;

const ThirdCircleContainer = styled.div`
  display: flex;
  flex-direction: column;
    @media screen and (max-width: 800px){
        flex-direction: column;
        padding-bottom: 1.25rem;
    }
`;

const FirstCircle = styled.div`
  width: 11rem;
  height: 11rem;
  align-self: center;
  border-radius: 50%;
  border: solid 13px #F17900;
      @media screen and (max-width: 800px){
          width: 8rem;
          height: 8rem;
    }
`;

const SecondCircle = styled.div`
  width: 11rem;
  height: 11rem;
  align-self: center;
  border-radius: 50%;
  border: solid 13px #F17900;
      @media screen and (max-width: 800px){
          width: 8rem;
          height: 8rem;
    }
`;

const ThirdCircle = styled.div`
  width: 11rem;
  height: 11rem;
  align-self: center;
  border-radius: 50%;
  border: solid 13px #F17900;
      @media screen and (max-width: 800px){
          width: 8rem;
          height: 8rem;
    }
`;

const Amount = styled.p`
  color: #FFFFFF;
  font-weight: 400;
  font-size: 3.625rem;
  line-height: 68px;
  text-align: center;
  margin-top: 2.3125rem;
      @media screen and (max-width: 800px){
          margin-top: .9375rem;
          font-size: 2.375rem;
    }
`;

const TitleCircle = styled.h2`
font-family: 'Roboto';
font-weight: 400;
font-size: 36px;
line-height: 42px;
text-align: center;
color: #FFFFFF;
    @media screen and (max-width: 800px){
        font-size: 1.25rem;
    }
`;