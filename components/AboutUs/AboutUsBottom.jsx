import React from 'react'
import styled from 'styled-components';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
import { fromDownAnimation, fromUpAnimation } from '../Animation/Animation';

export default function AboutUsBottom() {
  const percentageFirst = 80;
  const percentageSecond = 50;
  return (
    <AboutUsBottomContainer>
      <FirstCircleContainer
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{staggerChildren: 0.5}}
      >
        <FirstCircle variants={fromDownAnimation}>
          <CircularProgressbar
            value={percentageFirst}
            text={`${percentageFirst}%`}
            styles={buildStyles({
              textColor: '#F17900',
              pathColor: '#F17900',
            })}
          />
        </FirstCircle>
        <TextContainer variants={fromUpAnimation}>
          <TitleCircle>Aktywni Klienci</TitleCircle>
          <SubTitleCircle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sapien lectus, mollis nec mattis sit amet, eleifend at turpis. Morbi vitae tortor nec turpis eleifend pharetra.</SubTitleCircle>
        </TextContainer>
      </FirstCircleContainer>
      <SecondCircleContainer
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }}
        transition={{staggerChildren: 0.5}}
      >
        <SecondCircle variants={fromDownAnimation}>
          <CircularProgressbar
            value={percentageSecond}
            text={`${percentageSecond}%`}
            styles={buildStyles({
              textColor: '#020053',
              pathColor: '#020053',
            })}
          />
        </SecondCircle>
        <TextContainer variants={fromDownAnimation}>
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

const FirstCircle = styled(motion.div)`
  width: 11rem;
  height: 11rem;
  flex-basis: 20%;
`;

const SecondCircle = styled(motion.div)`
  width: 11rem;
  height: 11rem;
`;

const TextContainer = styled(motion.div)`
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