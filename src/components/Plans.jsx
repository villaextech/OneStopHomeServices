import Header from './Header'
import PlansDetail from './PlansDetail'

const Plans = () => {
    return (
        <section id="plans" className="plans">
        <Header/>
            <div className="container container-plans mt-4">
                <div className="section-title" data-aos="fade-up">
                    <h1 className='alert alert-primary container'>Plans</h1>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up">
                        <div className="member">
                            <PlansDetail
                                title={"Utility Services"}
                                buy="Buy Now"
                                price={"188.9"}
                                feature='Utility Services'
                            />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up">
                        <div className="member">
                            <PlansDetail
                                title={"Home Security"}
                                buy="Buy Now"
                                price={"188.9"}
                                feature='Home Security'
                            />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up">
                        <div className="member">
                            <PlansDetail
                                title={"Telecom Services"}
                                buy="Buy Now"
                                price={"188.9"}
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
                                price={"188.9"}
                                feature='Home Warranty'
                            />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up">
                        <div className="member">
                            <PlansDetail
                                title={"Home Automation"}
                                buy="Buy Now"
                                price={"188.9"}
                                feature='Home Automation'
                            />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up">
                        <div className="member">
                            <PlansDetail
                                title={"Custom"}
                                buy="Conatct Us"
                                feature='Chose according to your Own requirments'
                                note='Talk with our experts for custom plan.'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Plans