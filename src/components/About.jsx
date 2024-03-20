import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
const About = () => {
    return (
        <div>
            <Header />
            <section id="about" className="about">
                <div className="container mb-5">
                    <div className="row mt-3">
                        <div className="col-xl-6 col-lg-7 about-image" data-aos="fade-right">
                            <img src="./img/about-img.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-xl-6 col-lg-5 pt-sm-0 pt-md-3 pt-lg-0">
                            <h1 className='text-light' data-aos="fade-up">About Us</h1>
                            <p className='text-light' data-aos="fade-up">
                                At One Stop Home Services, where quality and convenience meet, discover the difference.
                            </p>
                            <div className="icon-box" data-aos="fade-up">
                                <i className="bx bx-receipt" />
                                <h4>Who We Are?</h4>
                                <p>
                                    Get to know the devoted group at One Stop Home Services, who are committed to providing excellent home improvement and maintenance services with skill and consideration.
                                </p>
                            </div>
                            <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                                <i className="bx bx-cube-alt" />
                                <h4>Our Mission</h4>
                                <p>
                                    Our goal at One Stop Home Services is to give homeowners dependable, cost-effective, and efficient services so they can enjoy safe, cozy, and attractive homes.
                                </p>
                            </div>
                            <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                                <i className="bx bx-run" />
                                <h4>Why Opt for Us?</h4>
                                <p>
                                    For comfort and peace of mind, pick One Stop Home Services. We're your reliable partner in home care thanks to our certified staff, open communication about costs, and commitment to client happiness.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About