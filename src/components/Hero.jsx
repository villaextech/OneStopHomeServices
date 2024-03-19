import React from 'react'

const Hero = () => {
    return (
        <section
            id="hero"
            className="d-flex flex-column justify-content-center align-items-center"
        >
            <div className="container text-center text-md-left" data-aos="zoom-out-right">
                <h1>Welcome to One Stop Home Services</h1>
                <h2>The One-Stop Shop for Every Home Service Need</h2>
                <a href="#about" className="btn-get-started scrollto"  >
                    Get Started
                </a>
            </div>
        </section>
    )
}

export default Hero;