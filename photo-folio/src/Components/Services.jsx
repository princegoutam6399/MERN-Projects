import React from 'react'

const Services = () => {
    return (
        <div>
            <section className="services pt-5">
                <div className="container-fluid pt-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="about-text text-center">
                                <h1>Services</h1>
                                <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas
                                    consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi
                                    ratione
                                    sint. Sit quaerat ipsum dolorem.</p>
                                <a><button className="btn pe-4 ps-4 text-center text-white mt-4 w-auto bg-success text-decoration-none">AVAILABLE
                                    FOR HIRE</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="services-part pt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-md-6 ">
                            <div className="services-item rounded p-5 bg-success">
                                <h4>Lorem, ipsum.</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, porro.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 ">
                            <div className="services-item rounded p-5 bg-success">
                                <h4>Lorem, ipsum.</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, porro.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 ">
                            <div className="services-item rounded p-5 bg-success">
                                <h4>Lorem, ipsum.</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, porro.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 ">
                            <div className="services-item rounded p-5 bg-success">
                                <h4>Lorem, ipsum.</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, porro.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="pricing pt-5">
                <div className="container">
                    <div className="section-header">
                        <h6 className="text-decoration-underline">PRICES</h6>
                        <p className="fs-3">Check my adorable pricing</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="pricing-item d-flex justify-content-between mb-3">
                                <h5>Portrait Photography</h5>
                                <h6>$160.00</h6>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pricing-item d-flex justify-content-between mb-3">
                                <h5>Fashion Photography</h5>
                                <h6>$300.00</h6>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pricing-item d-flex justify-content-between mb-3">
                                <h5>Sports Photography</h5>
                                <h6>$200.00</h6>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pricing-item d-flex justify-content-between mb-3">
                                <h5>Still Life Photography</h5>
                                <h6>$120.00</h6>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pricing-item d-flex justify-content-between mb-3">
                                <h5>Wedding Photography</h5>
                                <h6>$500.00</h6>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pricing-item d-flex justify-content-between mb-3">
                                <h5 >Photojournalism</h5>
                                <h6>$200.00</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services