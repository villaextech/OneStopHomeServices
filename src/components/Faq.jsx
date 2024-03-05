import React from 'react'

const Faq = () => {
    return (
        <section id="faq" className="faq section-bg">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>F.A.Q</h2>
                    <p>
                        "Answers to Your Common Questions – Simplifying Home Services with One Stop FAQs."
                    </p>
                </div>
                <div className="faq-list">
                    <ul>
                        <li data-aos="fade-up">
                            <a
                                data-bs-toggle="collapse"
                                className="collapse"
                                data-bs-target="#faq-list-1"
                            >
                                What is the 'One Stop Home Services'?
                                <i className="bx bx-chevron-down icon-show" />
                                <i className="bx bx-chevron-up icon-close" />
                            </a>
                            <div
                                id="faq-list-1"
                                className="collapse"
                                data-bs-parent=".faq-list"
                            >
                                <p>
                                    One Stop Home Services is a website devoted to educating people about energy deregulation and helping them choose energy plans that meet their needs. In just a few minutes, our intuitive web platform makes it easy to find energy providers, evaluate plans, and complete the switch.

                                    California, Connecticut, Delaware, Maine, Maryland, Massachusetts, Michigan, Illinois, Texas, New Jersey, New York, Ohio, Pennsylvania, and Washington, D.C. are just a few of the states where we serve clients. Use the search box above to input your ZIP code to see what options are available in your area.
                                </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={100}>
                            <a
                                data-bs-toggle="collapse"
                                data-bs-target="#faq-list-2"
                                className="collapsed"
                            >
                                How does One Stop Home Services guarantee its clients receive dependable and continuous energy service?
                                <i className="bx bx-chevron-down icon-show" />
                                <i className="bx bx-chevron-up icon-close" />
                            </a>
                            <div
                                id="faq-list-2"
                                className="collapse"
                                data-bs-parent=".faq-list"
                            >
                                <p>
                                    One Stop Home Services works with recognized and trustworthy suppliers to guarantee consistent and dependable energy service for its clients. These vendors have a track record of delivering trustworthy energy services. Customers may trust in the dependability and quality of their energy service when they select a plan from One Stop Home Services's list of providers. One Stop Home Services also monitors the expiration dates of clients' energy contracts. It makes sure customers don't lose service by alerting them when it's time to start looking for a new plan.
                                </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={200}>
                            <a
                                data-bs-toggle="collapse"
                                data-bs-target="#faq-list-3"
                                className="collapsed"
                            >
                                What makes One Stop Home Services the best option?
                                <i className="bx bx-chevron-down icon-show" />
                                <i className="bx bx-chevron-up icon-close" />
                            </a>
                            <div
                                id="faq-list-3"
                                className="collapse"
                                data-bs-parent=".faq-list"
                            >
                                <p>
                                    We streamline the process of investigating new energy services, making it clear-cut and practical. You can start comparing plans right away by simply entering your ZIP code. You may rest easy knowing that you'll receive dependable and continuous energy service when you select a plan from our carefully chosen and trustworthy suppliers. Furthermore, One Stop Home Services keeps helping you even after you've made the move. We keep track of your contract's expiration date and will let you know when it's time to start looking for a new plan again.
                                </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={300}>
                            <a
                                data-bs-toggle="collapse"
                                data-bs-target="#faq-list-4"
                                className="collapsed"
                            >
                                Do you offer emergency services? <i className="bx bx-chevron-down icon-show" />
                                <i className="bx bx-chevron-up icon-close" />
                            </a>
                            <div
                                id="faq-list-4"
                                className="collapse"
                                data-bs-parent=".faq-list"
                            >
                                <p>
                                    Yes, we are aware that crises might arise at any time. We provide 24/7 emergency services in order to address pressing problems including burst pipes, electrical malfunctions, situations with heating or cooling systems, and more. Give us a call, and we'll be happy to assist you.
                                </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={400}>
                            <a
                                data-bs-toggle="collapse"
                                data-bs-target="#faq-list-5"
                                className="collapsed"
                            >
                                How do you guarantee the caliber of your output?
                                <i className="bx bx-chevron-down icon-show" />
                                <i className="bx bx-chevron-up icon-close" />
                            </a>
                            <div
                                id="faq-list-5"
                                className="collapse"
                                data-bs-parent=".faq-list"
                            >
                                <p>
                                    At One Stop Home Services, we take great satisfaction in providing each project with top-notch work. For the greatest possible care for your house, our specialists go through extensive training and follow industry best practices. On all of our services, we also provide satisfaction guarantees.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Faq