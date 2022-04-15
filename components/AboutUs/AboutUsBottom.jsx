import React from 'react'
import styled from 'styled-components';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function AboutUsBottom() {
  const percentageFirst = 80;
  const percentageSecond = 50;
  return (
    <AboutUsBottomContainer>
      <FirstCycleContainer>
        <FirstCycle>
          <CircularProgressbar
            value={percentageFirst}
            text={`${percentageFirst}%`}
            styles={buildStyles({
              textColor: '#F17900',
              pathColor: '#F17900',
            })}
          />
        </FirstCycle>
        <TextContainer>
          <TitleCycle>Aktywni Klienci</TitleCycle>
          <SubTitleCycle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sapien lectus, mollis nec mattis sit amet, eleifend at turpis. Morbi vitae tortor nec turpis eleifend pharetra.</SubTitleCycle>
        </TextContainer>
      </FirstCycleContainer>
      <SecondCycleContainer>
        <SecondCycle>
          <CircularProgressbar
            value={percentageSecond}
            text={`${percentageSecond}%`}
            styles={buildStyles({
              textColor: '#020053',
              pathColor: '#020053',
            })}
          />
        </SecondCycle>
        <TextContainer>
          <TitleCycle>Aktywni Klienci</TitleCycle>
          <SubTitleCycle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sapien lectus, mollis nec mattis sit amet, eleifend at turpis. Morbi vitae tortor nec turpis eleifend pharetra.</SubTitleCycle>
        </TextContainer>
      </SecondCycleContainer>
    </AboutUsBottomContainer>
  );
};

const AboutUsBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FirstCycleContainer = styled.div`
  width: 43.5vw;
  display: flex;
  flex-direction: row;
  margin-left: 6.375rem;
    @media screen and (max-width: 800px){
        flex-direction: column;
        margin-left: 20vw;
    }
`;

const SecondCycleContainer = styled.div`
  width: 43.5vw;
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  margin-left: 6.375rem;
    @media screen and (max-width: 800px){
        flex-direction: column;
        margin-left: 20vw;
    }
`;

const FirstCycle = styled.div`
  width: 11rem;
  height: 11rem;
  flex-basis: 20%;
`;

const SecondCycle = styled.div`
  width: 11rem;
  height: 11rem;
`;

const TextContainer = styled.div`
  padding-left: 1.875rem;
  flex-basis: 80%;
      @media screen and (max-width: 800px){
        width: 60vw;
        padding-left: 0;
    }
`;

const TitleCycle = styled.h2`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 40px;
  line-height: 47px;
  margin: .625rem 0;
    @media screen and (max-width: 800px){
        font-size: 1.875rem;
    }
`;

const SubTitleCycle = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  opacity: 50%;
  margin: .625rem 0;
`;