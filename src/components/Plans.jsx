import React from 'react'
import Header from './Header'
import PlansDetail from './PlansDetail'
const Plans = () => {
    return (
        <>
            <Header />
            <section id="plans" className="plans">
                <div className="container container-plans mt-4 mb-sm-5">
                    <div className="section-title" data-aos="fade-up">
                        <h1 className=' bg-transparent container'><span className='text-light'>Plans</span></h1>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-xl-4 col-lg-4 col-md-6" data-aos="zoom-in-right">
                            <div className="member">
                                <PlansDetail
                                    title={"Utility Services"}
                                    buy="Buy Now"
                                    price={"350"}
                                    feature='Utility Services'
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-4 col-lg-4 col-md-6" data-aos="zoom-in-right">
                            <div className="member">
                                <PlansDetail
                                    title={"Home Security"}
                                    buy="Buy Now"
                                    price={"500"}
                                    feature='Home Security'
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-4 col-lg-4 col-md-6" data-aos="zoom-in-right">
                            <div className="member">
                                <PlansDetail
                                    title={"Telecom Services"}
                                    buy="Buy Now"
                                    price={"100"}
                                    feature='Telecom Services'
                                />
                            </div>
                        </div>


                        <div className="col-sm-12 col-xl-4 col-lg-4 col-md-6" data-aos="fade-up">
                            <div className="member">
                                <PlansDetail
                                    title={"Home Warranty"}
                                    buy="Buy Now"
                                    price={"100"}
                                    feature='Home Warranty'
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-4 col-lg-4 col-md-6" data-aos="fade-up">
                            <div className="member">
                                <PlansDetail
                                    title={"Home Automation"}
                                    buy="Buy Now"
                                    price={"450"}
                                    feature='Home Automation'
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-4 col-lg-4 col-md-6" data-aos="fade-up">
                            <div className="member">
                                <PlansDetail
                                    title={"Custom"}
                                    buy="Conatct Us"
                                    feature='Contact us for custom plan.'
                                    note='Talk with us'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Plans