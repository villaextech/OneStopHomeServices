import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import policy from './policy'
import Plans from './Plans'
import OneStopHomeService from '../pages/OneStop'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GoX } from "react-icons/go";

const Header = () => {
    // <a href="">One stop home services</a>
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <header id="header" className="fixed-top d-flex align-items-center header">
                <div className="container d-flex justify-content-between">
                    <div className="logo">
                        <a href={<OneStopHomeService />}>
                            <img src={logo} alt="OneSiteHomeService" />
                        </a>
                    </div>
                    <nav id="navbar" className="navbar">
                        <ul className={isOpen ? 'open' : 'close'} >
                            <li>
                                <NavLink className="nav-link " to='/'>
                                    <span>
                                    </span>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link " to='/plans' >
                                    <span>
                                    </span>
                                    Plans
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link " to='/about' >
                                    <span>
                                    </span>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link " to='/services' >
                                    <span>
                                    </span>
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link  " to='/policy'>
                                    <span>
                                    </span>
                                    Policies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link " to='/contact' >
                                    <span>
                                    </span>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <div>
                            <span className="hamburger-menu" onClick={() => setIsOpen(!isOpen)} >
                                <GiHamburgerMenu hidden={isOpen} className='hamicon' />
                                <GoX hidden={!isOpen} className='hamicon' />
                            </span>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}
export default Header