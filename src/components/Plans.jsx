import Header from './Header'
import PlansDetail from './PlansDetail'

const Plans = () => {
    return (
        <section id="plans" className="plans">
        <Header/>
            <div className="container container-plans mt-4">
                <div className="section-title" data-aos="fade-up">
                    <h1 className=' bg-transparent container'><span className='text-dark'>Plans</span></h1>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up">
                        <div className="member">
                            <PlansDetail
                                title={"Utility Services"}
                                buy="Buy Now"
                                price={"289.99"}
                                feature='Utility Services'
                            />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up">
                        <div className="member">
                            <PlansDetail
                                title={"Home Security"}
                                buy="Buy Now"
                                price={"399.99"}
                                feature='Home Security'
                            />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up">
                        <div className="member">
                            <PlansDetail
                                title={"Telecom Services"}
                                buy="Buy Now"
                                price={"399.99"}
                                feature='Telecom Services'
                            />
                        </div>
                    </div>

                </div>
                <div className='row'>
                    <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up">
                        <div className="member">
                            <PlansDetail
                                title={"Home Warranty"}
                                buy="Buy Now"
                                price={"299.99"}
                                feature='Home Warranty'
                            />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up">
                        <div className="member">
                            <PlansDetail
                                title={"Home Automation"}
                                buy="Buy Now"
                                price={"510.99"}
                                feature='Home Automation'
                            />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up">
                        <div className="member">
                            <PlansDetail
                                title={"Custom"}
                                buy="Conatct Us"
                                feature='Contact us for custom plan.'
                                note='Talk with us for custom plan.'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Plans