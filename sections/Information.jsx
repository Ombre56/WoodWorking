import React from 'react'
import styled from 'styled-components';
import Circles from '../components/Information/Circles';

function Information() {
  return (
    <InformationSection>
      <Circles />
    </InformationSection>
  )
}

export default Information

const InformationSection = styled.section`
  width: 100%;
  min-height: 50vh;
  background-image: url('/assets/images/InformationBackground.png');
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
`;