import React from 'react'
import Services from './Services'
import { Link, NavLink } from 'react-router-dom'
import OneStopHomeService from '../pages/OneStop'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-info">
                                <h3>One Stop Home services</h3>
                                <p>
                                    ONE STOP HOME SERVICES,
                                    <br />
                                    LLC a SILLC PROPERTIES Company
                                    <br />
                                    <br />
                                    <strong>Phone:</strong> 906.401.2064
                                    <br />
                                    <strong>Email:</strong> custsvc@
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <Link to='/' href="#hero">Home</Link>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <Link to='/about' href="#about">About us</Link>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <Link to='/services' href="#services">Services</Link>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <Link to='/policy' href='#services'> Terms of service</Link>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <Link to='/policy' href="#services">Privacy policy</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <NavLink to='/services' href="#services">Utilitiy Services</NavLink>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <NavLink to='./services' href="#services">Home Security</NavLink>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <NavLink to='/services' href="#services">Telecom Services</NavLink>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <NavLink to='/services' href={<Services/>}>Home Warranty</NavLink>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <NavLink to='/services' href="#home_warranty">Home Automation</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    © Copyright{" "}
                    <strong>
                        <span>One Stop Home Services</span>
                    </strong>
                    . All Rights Reserved
                </div>
                <div className="credits">
                    {/* All the links in the footer should remain intact. */}
                    {/* You can delete the links only if you purchased the pro version. */}
                    {/* Licensing information: https://bootstrapmade.com/license/ */}
                    {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/maxim-free-onepage-bootstrap-theme/ */}
                </div>
            </div>
        </footer>
    )
}
export default Footer