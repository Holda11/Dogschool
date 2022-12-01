import React from "react";
import {FaBars} from 'react-icons/fa'
import {  IconContext } from "react-icons/lib";
import {
    Nav,
    NavContainer,
    NavLogo,
    NavItem,
    MobileIcon,
    NavMenu,
    NavLinks
} from './NavbarStyled'

const Navbar = () => {
  return (
    <>
    <IconContext.Provider value={{color: "black"}}>
    <Nav>
        <NavContainer>
            <NavLogo to="/">
                DogschoolK9
            </NavLogo>
            <MobileIcon>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="/">Domů</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/Novinky">Novinky</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/NasiPsy">Naši Psy</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/Treneri">Treneři</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/Onas">O nás</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/Kontakt">Kontakt</NavLinks>
                </NavItem>
            </NavMenu>
        </NavContainer>
    </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar