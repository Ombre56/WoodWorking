import React from 'react'
import Image from 'next/image';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';

const items = [
  {
    id: 1,
    title: '/assets/images/slider1.png'
  },
  {
    id: 2,
    title: '/assets/images/slider2.png'
  },
  {
    id: 3,
    title: '/assets/images/slider3.png'
  },
  {
    id: 4,
    title: '/assets/images/slider4.png'
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
];

function Slider() {
  return (
      <Carousel breakPoints={breakPoints} itemsToShow={3} preventDefaultTouchmoveEvent={true}>
      {items.map(item => 
        <SliderItems key={item.id}>
          <Image src={item.title} alt={item.id} width='357' height='535' />
        </SliderItems>
      )}
      </Carousel>
  )
}

export default Slider

const SliderItems = styled.div`
  padding-top: 6rem;
`;