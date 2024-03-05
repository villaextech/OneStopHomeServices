import React from 'react'
import Services from './Services'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <h3>One stop services</h3>
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
                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <a href="#hero">Home</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <a href="#about">About us</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <a href="#services">Services</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <a href='#services'> Terms of service</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <a href="#services">Privacy policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <a href="#services">Utilitiy Services</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <a href="#services">Home Security</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <a href="#services">Telecom Services</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <a href="#services">Home Warranty</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <a href="#services">Home Automation</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>
                                Tamen quem nulla quae legam multos aute sint culpa legam noster
                                magna
                            </p>
                            <form action="" method="post">
                                <input type="email" name="email" placeholder='Email' />
                                <input type="submit" defaultValue="Subscribe" />
                            </form>
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