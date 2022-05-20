import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const menuVariants = {
    visible: {
      top: 0,
      transition: {
        duration: 0.9,
      }
    },
    hidden: {
      top: "-100vh",
      transition: {
        duration: 0.9,
      }
    }
  };

  return (
    <div className="App">
      <NavButton
        animate={isOpen ? "visible" : "hidden"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <SvgBox
          whileHover={{ scale: 1.4 }}
          onClick={() => setToggleNavbar(!toggleNavbar)}
        >
          {toggleNavbar ? (
            <FaTimes  />
          ) : (
              <GiHamburgerMenu  />
          )}
        </SvgBox>
      </NavButton>
      <Nav
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "visible" : "hidden"}
      >
        <LinksContainer>
          <NavLink
            to="home"
            smooth={true}
            duration={1000}
            onClick={() => { setIsOpen(!isOpen), setToggleNavbar(!toggleNavbar)}}
          >Strona główna</NavLink>
          <NavLink
            to="aboutUs"
            smooth={true}
            duration={1000}
            onClick={() => { setIsOpen(!isOpen), setToggleNavbar(!toggleNavbar)}}
          >O nas</NavLink>
          <NavLink
            to="specialization"
            smooth={true}
            duration={1000}
            onClick={() => { setIsOpen(!isOpen), setToggleNavbar(!toggleNavbar)}}
          >Specjalizacje</NavLink>
          <NavLink
            to="whyUs"
            smooth={true}
            duration={1000}
            onClick={() => { setIsOpen(!isOpen), setToggleNavbar(!toggleNavbar)}}
          >Dlaczego My</NavLink>
          <NavLink
            to="team"
            smooth={true}
            duration={1000}
            onClick={() => { setIsOpen(!isOpen), setToggleNavbar(!toggleNavbar)}}
          >Nasz zespół</NavLink>
          <NavLink
            to="reviews"
            smooth={true}
            duration={1000}
            onClick={() => { setIsOpen(!isOpen), setToggleNavbar(!toggleNavbar)}}
          >Recenzje</NavLink>
          <NavLink
            to="contact"
            smooth={true}
            duration={1000}
            onClick={() => { setIsOpen(!isOpen), setToggleNavbar(!toggleNavbar)}}
          >Kontakt</NavLink>
        </LinksContainer>
      </Nav>
    </div>
  );
}

const NavButton = styled.header`
  position: fixed;
  z-index: 200;
`;

const Nav = styled(motion.nav)`
  background-image: url('/assets/images/BackgroundNav.png');
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  box-shadow: 0px 22px 35px -19px rgba(66, 66, 72, 1);
  height: 90vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinksContainer = styled(motion.div)`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const NavLink = styled(Link)`
  padding: 10px 0;
  font-size: 2.5rem;
  position: relative;
  text-transform: uppercase;
  text-shadow: 4px 7px 7px rgba(66, 68, 90, 1);
    &:hover{
      color: #F17900;
    }
    &::after{
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #fff;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform .5s;
    }
    &:hover::after{
      transform: scaleX(1);
      transform-origin: left;
    }

    @media screen and (max-width: 800px){
          font-size: 1.875rem;
    }
`;

const SvgBox = styled(motion.div)`
  svg{
    width: 1.5rem;
    height: 1.5rem;
  }
`;