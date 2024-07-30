import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className='sticky pt-2'>
                <section className="navbar sticky-top bg-dark">
                    <div className="container-fluid p-2">
                        <div className="container-fluid ">
                            <nav className="navbar navbar-expand-lg ">
                                <a href='/' className="navbar-brand text-white "><FontAwesomeIcon icon={faCameraRetro} /> PhotoFolio</a>
                                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item me-3">
                                            <a className="nav-link text-white" aria-current="page" href="/">HOME</a>
                                        </li>
                                        <li className="nav-item me-3">
                                            <a className="nav-link text-white" href="/about">ABOUT</a>
                                        </li>
                                        <li className="nav-item me-3">
                                            <a className="nav-link text-white" href="/gallery">GALLERY</a>
                                        </li>
                                        <li className="nav-item me-3">
                                            <a className="nav-link text-white" href="/services">SERVICES</a>
                                        </li>
                                        <li className="nav-item me-3">
                                            <a className="nav-link text-white" href="/contact">CONTACT</a>
                                        </li>
                                    </ul>
                                    <div className="icon ms-auto ">
                                        <Link to={'/'}>
                                            <FontAwesomeIcon icon={faTwitter} className='me-2 fs-5 text-white' />
                                            <FontAwesomeIcon icon={faFacebook} className='me-2 fs-5 text-white' />
                                            <FontAwesomeIcon icon={faInstagram} className='me-2 fs-5 text-white' />
                                            <FontAwesomeIcon icon={faLinkedin} className='fs-5 text-white' />
                                            {/* <FontAwesomeIcon icon={faMoon} className='ms-2 fs-5 text-white light' />
                                            <FontAwesomeIcon icon={faSun} className='ms-2 fs-5 text-white dark' /> */}
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Navbar