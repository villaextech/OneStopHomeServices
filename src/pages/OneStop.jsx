import React from 'react'
// import navItems from '../components/navItems'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Feature from '../components/Feature'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Portfolio from '../components/Portfolio'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Plans from '../components/Plans'
import Faq from '../components/Faq'
const OneStopHomeService = () => {
    return (
        // <i className="bi bi-list mobile-nav-toggle" />
        <div>
            <Header />
            <Hero />
            <main id="main">
                <About />
                <Services />
                <Plans />
                <Faq />
                <Contact />
            </main>
            <Footer/>
            <a
                href="#"
                className="back-to-top d-flex align-items-center justify-content-center"
            >
                <i className="bi bi-arrow-up-short" />
            </a>
        </div>

    )
}

export default OneStopHomeService