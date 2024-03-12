import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import policy from './policy'
import Plans from './Plans'
import OneStopHomeService from '../pages/OneStop'

const Header = () => {
    // <a href="">One stop home services</a>
    return (
        <div>
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex justify-content-between">
                    <div className="logo">
                        <a href={<OneStopHomeService />}>
                            <img src={logo} alt="OneSiteHomeService" />
                        </a>
                    </div>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <NavLink className="nav-link " to='/' href="#hero">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link " to='/plans' href='#plans'>
                                    Plans
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link " to='/about' href="#about">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link " to='/services' href="#services">
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link  " to='/policy'>
                                    Policies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link " to='/contact' href="/">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <div>
                            <a className="hamburger-menu">
                            
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}
export default Header