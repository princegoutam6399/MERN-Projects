import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='sticky-top pt-2'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand"><i className="fa-solid fa-camera-retro"></i> PhotoFolio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-3">
                                <Link to='/' className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to='/about' className="nav-link">About</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to='/gallery' className="nav-link">Gallery</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to='/services' className="nav-link">Services</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to='/contact' className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        <div className="icon ms-auto">
                            <a href=""><i className="fab fa-facebook fs-5 text-white ms-2"></i>
                            </a>
                            <a href=""><i className="fab fa-instagram fs-5 text-white ms-2"></i></a>
                            <a href=""><i className="fab fa-twitter fs-5 text-white ms-2"></i>
                            </a>
                            <a href=""><i className="fab fa-linkedin fs-5 text-white ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
