import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Plans from '../components/Plans'
import Faq from '../components/Faq'
const OneStopHomeService = () => {
    return (
        <div>
            <Hero />
            <main id="main">
                <About />
                <Services />
                <Plans />
                <Faq />
                <Contact />
            </main>
        </div>

    )
}

export default OneStopHomeService