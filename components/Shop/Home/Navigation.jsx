import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
// import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import Link from "next/link";

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
            href="/sklep"
            onClick={() => { setIsOpen(!isOpen), setToggleNavbar(!toggleNavbar)}}
          >Strona główna</NavLink>
          <NavLink
            href="/sklep/category/stoly"
            onClick={() => { setIsOpen(!isOpen), setToggleNavbar(!toggleNavbar)}}
          >Stoły</NavLink>
          <NavLink
            href="/sklep/category/krzesla"
            onClick={() => { setIsOpen(!isOpen), setToggleNavbar(!toggleNavbar)}}
          >Krzesła</NavLink>
          <NavLink
            href="/sklep/category/kuchenne"
            onClick={() => { setIsOpen(!isOpen), setToggleNavbar(!toggleNavbar)}}
          >Kuchenne</NavLink>
          <NavLink
            href="/sklep/category/naZewnatrz"
            onClick={() => { setIsOpen(!isOpen), setToggleNavbar(!toggleNavbar)}}
          >Na zewnątrz</NavLink>
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
  a{
    text-transform: uppercase;
    font-size: 1.5rem;
    text-shadow: 4px 7px 7px rgba(66, 68, 90, 1);
  }
`;

const NavLink = styled(Link)`
  padding: 10px 0;
  position: relative;
`;

const SvgBox = styled(motion.div)`
  svg{
    width: 1.5rem;
    height: 1.5rem;
  }
`;