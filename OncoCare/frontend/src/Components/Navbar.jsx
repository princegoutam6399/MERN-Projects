import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets/assets_admin/assets_frontend/assets';

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger-subtle">
                <div className="container">
                    <Link to='/' className="navbar-brand text-dark">OncoCare</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-3">
                                <Link to='/' className="nav-link text-dark">Home</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to='/doctors' className="nav-link text-dark">All Doctors</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to='/about' className="nav-link text-dark">About</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to='/contact' className="nav-link text-dark">Contact</Link>
                            </li>
                        </ul>
                        <div className="buttons ms-auto">
                            {
                                token ?
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img className='rounded-circle' style={{width:"33px"}} src={assets.profile_pic} alt="" />
                                        <div class="dropdown dropdown-toggle" data-bs-toggle="dropdown">
                                            <ul class="dropdown-menu">
                                                <li><a href='#'  onClick={()=>navigate('/my-profile')} class="dropdown-item" >My Profile</a></li>
                                                <li><a href='#' onClick={()=>navigate('/my-appointments')} class="dropdown-item" >My Appointments</a></li>
                                                <li><a href='#' onClick={()=>setToken(false)} class="dropdown-item" >Log out</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    : <button onClick={() => navigate('/login')} className='btn btn-primary rounded-pill'>Create Account</button>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar