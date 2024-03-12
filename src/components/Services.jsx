import React from 'react'
import Header from './Header'
const Services = () => {
    return (
        <div className='services-main'>
            <Header />
            <section id="services" className="services section-bg ">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2 className='mt-3'>Services</h2>
                        <p>Find simple answers to all of your home's problems. Our services are made with contemporary homes in mind, simplifying and enhancing daily living.</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up">
                            <div className="icon-box icon-box-pink">
                                <div className="icon"><i className='bx bxs-flame'></i></div>
                                <h4 className="title"><a href="#plans">Utility Services</a></h4>
                                <p className="description">
                                    Use our specialized solutions to manage your utilities without fuss. We guarantee prompt and effective services whether you require connections for gas, water, or electricity. In order to give you a seamless experience and free you up to concentrate on what really matters—enjoying your home—our staff works closely with leading utility providers.
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up"
                            data-aos-delay="100">
                            <div className="icon-box icon-box-cyan">
                                <div className="icon"><i className='bx bx-target-lock'></i></div>
                                <h4 className="title"><a href="">Home Security </a></h4>
                                <p className="description">
                                    First and foremost, safety! Our cutting-edge home security solutions will help you protect your loved ones and priceless possessions. Our security services, which range from sophisticated alarm systems to CCTV monitoring, are created to offer the highest level of defense against unanticipated attacks and incursions. You can rest easy knowing that we are keeping a close eye on your house.
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up"
                            data-aos-delay="200">
                            <div className="icon-box icon-box-green">
                                <div className="icon"><i className='bx bxs-phone-call'></i></div>
                                <h4 className="title"><a href="">Telecom Services </a></h4>
                                <p className="description">
                                    In today's fast-paced digital world, stay connected! Our telecom services ensure stable mobile networks, fast internet, and clear cable TV services. With our partnerships with the top telecom companies, we can guarantee dependable connectivity, making it easier than ever to work remotely, have fun, and keep in touch.
                                </p>
                            </div>
                        </div>
                        <div className=" col-lg-2 d-flex align-items-stretch mt-2 mt-lg-3" id='home_warranty' data-aos="fade-up"
                            data-aos-delay="200">
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch mt-2 mt-lg-3" data-aos="fade-up"
                            data-aos-delay="300">
                            <div className="icon-box icon-box-blue">
                                <div className="icon"><i className='bx bx-bug-alt'></i></div>
                                <h4 className="title" id=''><a href="">Home Warranty </a></h4>
                                <p className="description">
                                    Protect your appliances and systems from unexpected breakdowns! Our home warranty service covers repair and replacement costs, giving you peace of mind. Whether it's your refrigerator, air conditioner, or heating system, trust us to keep them running smoothly. With our dedicated support team just a call away, you're always covered.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch mt-2 mt-lg-3" data-aos="fade-up"
                            data-aos-delay="300">
                            <div className="icon-box icon-box-cyan">
                                <div className="icon"><i className="bx bx-slider-alt"></i></div>
                                <i className=''></i>
                                <h4 className="title"><a href="">Home Automation </a></h4>
                                <p className="description">
                                    Welcome to the future of living! Elevate your lifestyle with our cutting-edge home automation services: control lighting, temperature, security, and entertainment systems with a touch or voice command. Our solutions offer convenient and energy-efficient smart living controls.
                                </p>
                            </div>
                        </div>
                        <div className=" col-lg-2 d-flex align-items-stretch mt-2 mt-lg-3" data-aos="fade-up"
                            data-aos-delay="200">
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Services