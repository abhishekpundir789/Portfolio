import React from 'react';
import './Navbar.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
        const [click, setClick] = useState(false);
        const handleClick = () => setClick(!click);
        const closeMobileMenu = () => setClick(false);
        return(
            <>
            <nav className = "navbar">
                <div className = "navbar-container">
                    <Link to ="/" className = "navbar-logo">
                        WELCOME
                    </Link>
                    <div className = "menu-icon" onClick = {handleClick}>
                        <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = "nav-item">
                            <Link to ='/' className = "nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className = "nav-item">
                            <Link to ='/portfolio' className = "nav-links" onClick={closeMobileMenu}>
                                Portfolio
                            </Link>
                        </li>
                        <li className = "nav-item">
                            <Link to ='/contactme' className = "nav-links" onClick={closeMobileMenu}>
                                Contact Me
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
            </>

        );
    }

    export default Navbar;