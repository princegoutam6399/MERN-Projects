import React from 'react'
import image from '../assets/logo.png'

const Navbar = ({ setCategory }) => {
    return (
        <div>
            <div className="container-fluid bg-black">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white fs-4"><span className='text-danger ps-3 py-2 badge bg-light'>DailyNews</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-4  mb-lg-0">
                                <li className="nav-item ms-4 ">
                                    <div className="nav-link text-white " onClick={() => setCategory("business")}>Business</div>
                                </li>
                                <li className="nav-item ms-4">
                                    <div className="nav-link text-white " onClick={() => setCategory("entertainment")}>Entertainment</div>
                                </li>
                                <li className="nav-item ms-4">
                                    <div className="nav-link text-white "   onClick={() => setCategory("health")}>Health</div>
                                </li>
                                <li className="nav-item ms-4">
                                    <div className="nav-link text-white "   onClick={() => setCategory("sports")}>Sports</div>
                                </li>
                                <li className="nav-item ms-4">
                                    <div className="nav-link text-white "   onClick={() => setCategory("technology")}>Technology</div>
                                </li>
                                <li className="nav-item ms-4">
                                    <div className="nav-link text-white "  onClick={() => setCategory("science")}>Science</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar