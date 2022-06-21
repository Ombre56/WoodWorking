import React from 'react'
import styled from 'styled-components';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
import { fromLeftAnimation } from '../Animation/Animation';
import { useScroll } from '../Hooks/useScroll';

export default function AboutUsBottom() {
  const [element, controls] = useScroll();
  const percentageFirst = 80;
  const percentageSecond = 50;
  return (
    <AboutUsBottomContainer ref={element}>
      <FirstCircleContainer
        variants={fromLeftAnimation}
        animate={controls}
        transition={{delay: 0.1, type: "tween"}}        
      >
        <FirstCircle>
          <CircularProgressbar
            value={percentageFirst}
            text={`${percentageFirst}%`}
            styles={buildStyles({
              textColor: '#F17900',
              pathColor: '#F17900',
            })}
          />
        </FirstCircle>
        <TextContainer>
          <TitleCircle>Aktywni Klienci</TitleCircle>
          <SubTitleCircle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sapien lectus, mollis nec mattis sit amet, eleifend at turpis. Morbi vitae tortor nec turpis eleifend pharetra.</SubTitleCircle>
        </TextContainer>
      </FirstCircleContainer>
      <SecondCircleContainer
        variants={fromLeftAnimation}
        animate={controls}
        transition={{delay: 0.1, type: "tween"}}
      >
        <SecondCircle>
          <CircularProgressbar
            value={percentageSecond}
            text={`${percentageSecond}%`}
            styles={buildStyles({
              textColor: '#020053',
              pathColor: '#020053',
            })}
          />
        </SecondCircle>
        <TextContainer>
          <TitleCircle>Aktywni Klienci</TitleCircle>
          <SubTitleCircle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sapien lectus, mollis nec mattis sit amet, eleifend at turpis. Morbi vitae tortor nec turpis eleifend pharetra.</SubTitleCircle>
        </TextContainer>
      </SecondCircleContainer>
    </AboutUsBottomContainer>
  );
};

const AboutUsBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FirstCircleContainer = styled(motion.div)`
  width: 43.5vw;
  display: flex;
  flex-direction: row;
  margin-left: 6.375rem;
    @media screen and (max-width: 800px){
        flex-direction: column;
        margin-left: 20vw;
    }
`;

const SecondCircleContainer = styled(motion.div)`
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

const FirstCircle = styled.div`
  width: 11rem;
  height: 11rem;
  flex-basis: 20%;
`;

const SecondCircle = styled.div`
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

const TitleCircle = styled.h2`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 40px;
  line-height: 47px;
  margin: .625rem 0;
    @media screen and (max-width: 800px){
        font-size: 1.875rem;
    }
`;

const SubTitleCircle = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  opacity: 50%;
  margin: .625rem 0;
`;