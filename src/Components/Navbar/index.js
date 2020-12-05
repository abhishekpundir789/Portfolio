import React from 'react'
import { FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, 
    Navlogo, MobileIcon, 
    NavMenu, NavItem, 
    NavLinks, NavBtn, 
    NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <Navlogo to="/">
                        Welcome
                    </Navlogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to= "about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to= "portfolio">Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to= "contact">Contact</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to= "signup">SignUp</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar