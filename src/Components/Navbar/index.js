import React, {useState, useEffect} from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, 
    NavLogo, MobileIcon, 
    NavMenu, NavItem, 
    NavLinks, NavBtn, 
    NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
    const[scrollNav, setScrollNav] =useState(false)

    const changeNav = () =>{
        if(window.scrollY>=80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome =()=>{
        scroll.scrollToTop();
    };

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        Welcome
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to= "about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to= "portfolio" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to= "contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/join">Join</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar