import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer mt-5">
                <div className="container-fluid bg-dark  text-start text-white">
                    <div className="container p-5">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer_about mt-4">
                                    <div className="footer_logo">
                                        <a href="#" className="text-black"><img src="https://themewagon.github.io/malefashion/img/footer-logo.png" alt=""></img></a>
                                    </div>
                                    <p className="mt-4">The customer is at the heart of our unique business model, which includes
                                        design.</p>
                                    <a href="#"><img src="https://themewagon.github.io/malefashion/img/payment.png" alt="" className="mt-3"></img></a>
                                </div>
                            </div>
                            <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                                <div className="footer_widget mt-4">
                                    <h5>Shopping</h5>
                                    <ul className="list-unstyled mt-4">
                                        <li className="mb-3">Clothing Store</li>
                                        <li className="mb-3">Trending Shoes</li>
                                        <li className="mb-3">Accessories</li>
                                        <li className="mb-3">Sale</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="footer_widget mt-4">
                                    <h5>About Us</h5>
                                    <ul className="list-unstyled mt-4">
                                        <li className="mb-3">Contact us</li>
                                        <li className="mb-3">Payment Methods</li>
                                        <li className="mb-3">Delivary</li>
                                        <li className="mb-3">Return &amp; Exchanges</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 offset-lg-1 col-md-3 col-sm-6">
                                <div className="footer_widget mt-4">
                                    <h5>NEWSLETTER</h5>
                                    <div className="footer_newsletter mt-3">
                                        <p>Be the first to know about new arrivals, look books, sales &amp; promos!</p>
                                        <form action="#">
                                            <input type="text" className='border-none outline-none ' placeholder="Your email">
                                            </input>
                                            <button type="submit"><i class="fa-solid fa-envelope border-0 bg-none"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center mt-3">
                                <div className="footer_copyright_text">
                                    <hr></hr>
                                    <p>Copyright © 2024 All rights reserved | This template is made Prince💗</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer