import React from 'react'
import Header from './Header'
const Contact = () => {

    const alertt = (e) => {
        // e.preventDefault();
        // alert('Your infomation submitted!')
    }

    return (
        <section id="contact" className="contact">
            <Header />
            <div className="container mt-3">
                <div className="section-title" data-aos="fade-up">
                    <h2 className=''>Contact</h2>
                    <p>
                        Please contact us whenever you like. We pledge to get back to you as soon as we can!
                    </p>
                </div>
                <div
                    className="row no-gutters justify-content-center gap-5"
                    data-aos="fade-up"
                >
                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info d-flex flex-column justify-content-center align-items-stretch ">
                            <div className="address">
                                <i className="bi bi-geo-alt" />
                                <h4>Location:</h4>
                                <p>919 Terscott Ln Sugar Land, TX 77479, USA\
                                    ONE STOP HOME SERVICES, LLC</p>
                            </div>
                            <div className="email mt-4">
                                <i className="bi bi-envelope" />
                                <h4>Email:</h4>
                                <p>info@example.com</p>
                            </div>
                            <div className="phone mt-4">
                                <i className="bi bi-phone" />
                                <h4>Call:</h4>
                                <p>906.401.2064</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-flex  justify-content-center">
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe

                                    width={602}
                                    height={400}
                                    id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=sugar+land&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameBorder={0}
                                    scrolling="no"
                                    marginHeight={0}
                                    marginWidth={0}
                                />
                                <a href="https://online-timer.me/">online timer</a>
                                <br />
                                <a href="https://www.analarmclock.com/" />
                                <br />
                                <style
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            ".mapouter{position: relative;text-align: right;height: 400px;width: 702px;}"
                                    }}
                                />
                                <a href="https://www.mapembed.net">google maps embed</a>
                                <style
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            ".gmap_canvas{overflow: hidden;background: none !important;height: 400px;width: 550px;}"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center" data-aos="fade-up">
                    <div className="col-lg-10">
                        <form
                            className="php-email-form"
                        >
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        required='1' />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    placeholder="Subject"
                                    required />
                            </div>
                            <div className="form-group mt-3">
                                <textarea
                                    className="form-control"
                                    name="message"
                                    rows={5}
                                    placeholder="Message"
                                    required
                                />
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">
                                    Your message has been sent. Thank you!
                                </div>
                            </div>
                            <div className="text-center">
                                <button onClick={(e) => alertt(e)} className='btn btn-success' >Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact