import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { BiUpArrow } from 'react-icons/bi';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    }
  }, [])

  return (
    <>
      {visible && <ScrollArrow onClick={scrollToTop}>
        <BiUpArrow />
      </ScrollArrow>}
    </>
  );
};

export default ScrollToTop

const ScrollArrow = styled.div`
  background-color: #F17900;
  border-radius: 100%;
  position: fixed;
  height: 4rem;
  width: 4rem;
  bottom: 40px;
  right: 40px;
  z-index: 2000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
    svg{
      color: white;
      font-size: 2rem;
    }
    &:hover{
      background-color: white;
      svg{
        color: #F17900;
      }
    }
`;