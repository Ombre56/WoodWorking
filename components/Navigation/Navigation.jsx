import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from 'react-scroll';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const iconVariants = {
    opened: {
      rotate: 135
    },
    closed: {
      rotate: 0
    }
  };

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.7
      }
    },
    closed: {
      top: "-100vh"
    }
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 50
    },
    closed: {
      opacity: 0,
      y: 0
    }
  };

  return (
    <div className="App">
      <NavButton>
        <SvgBox
          variants={iconVariants}
          animate={isOpen ? "opened" : "closed"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
              fill="#fff"
            />
          </svg>
        </SvgBox>
      </NavButton>
      <Nav
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
      >
        <LinksContainer>
          <NavLink
            to="home"
            smooth={true}
            duration={1000}
            variants={linkVariants}
            onClick={() => setIsOpen(!isOpen)}
          >Strona główna</NavLink>
          <NavLink
            to="aboutUs"
            smooth={true}
            duration={1000}
            variants={linkVariants}
            onClick={() => setIsOpen(!isOpen)}
          >O nas</NavLink>
          <NavLink
            to="specialization"
            smooth={true}
            duration={1000}
            variants={linkVariants}
            onClick={() => setIsOpen(!isOpen)}
          >Specjalizacje</NavLink>
          <NavLink
            to="whyUs"
            smooth={true}
            duration={1000}
            variants={linkVariants}
            onClick={() => setIsOpen(!isOpen)}
          >Dlaczego My</NavLink>
          <NavLink
            to="team"
            smooth={true}
            duration={1000}
            variants={linkVariants}
            onClick={() => setIsOpen(!isOpen)}
          >Nasz zespół</NavLink>
          <NavLink
            to="reviews"
            smooth={true}
            duration={1000}
            variants={linkVariants}
            onClick={() => setIsOpen(!isOpen)}
          >Recenzje</NavLink>
          <NavLink
            to="contact"
            smooth={true}
            duration={1000}
            variants={linkVariants}
            onClick={() => setIsOpen(!isOpen)}
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
  background-image: linear-gradient(149deg, rgba(241, 121, 0, 1) 43%, rgba(255, 255, 255, 1) 100%);
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

const LinksContainer = styled(motion.li)`
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
  text-transform: uppercase;
  text-shadow: 4px 7px 7px rgba(66, 68, 90, 1);
    @media screen and (max-width: 800px){
          font-size: 1.875rem;
    }
`;

const SvgBox = styled(motion.div)``;