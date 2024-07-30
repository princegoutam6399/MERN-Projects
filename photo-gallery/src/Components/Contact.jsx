import React from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faMobile } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <div className="main">
                <div className="container-fluid pt-5">
                    <div className="row justify-content-center pt-5">
                        <div className="col-lg-6">
                            <div className="about-text text-center">
                                <h1>Contact</h1>
                                <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas
                                    consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione
                                    sint. Sit quaerat ipsum dolorem.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="contact mt-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-3">
                                <div className="info-item">
                                    <FontAwesomeIcon icon={faLocationDot} className='fs-3 text-success ms-auto' /><br></br>
                                    <div>
                                        <h2>Location:</h2>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="info-item">
                                    <FontAwesomeIcon icon={faEnvelope} className='fs-3 text-success ms-auto' /><br></br>
                                    <div>
                                        <h2>E-mail:</h2>
                                        <p>info@example.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="info-item">
                                    <FontAwesomeIcon icon={faMobile} className='fs-3 text-success ms-auto' /><br></br>
                                    <div>
                                        <h2>Call:</h2>
                                        <p>+1 5589 55488 55</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-9">
                                <form action="update" method="POST">
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Your Name</label>
                                        <input type="text" name="name" className="form-control" id="exampleFormControlInput1"
                                            placeholder="name"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                        <input type="email" name="email" className="form-control" id="exampleFormControlInput1"
                                            placeholder="name@example.com"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Subject</label>
                                        <input type="text" name="subject" className="form-control" id="exampleFormControlInput1"
                                            placeholder="subject"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlTextarea1" name="message"
                                            className="form-label">Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                            placeholder="write an some text"></textarea>
                                        <div className="text justify-content-center mt-4 text-center">
                                            <button type="submit"
                                                className="btn p-2 text-white bg-success w-auto text-decoration-none">Send
                                                Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Contact