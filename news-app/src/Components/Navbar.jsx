import React, { useState } from 'react';
import image from '../assets/logo.png';

const Navbar = ({ setCategory }) => {
    const [activeCategory, setActiveCategory] = useState(null);

    const handleItemClick = (category) => {
        setActiveCategory(category);
        setCategory(category);
    };

    return (
        <div>
            <div className="container-fluid bg-black">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white fs-4">
                            <span className='text-danger ps-3 py-2 badge bg-light'>DailyNews</span>
                        </a>
                        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-4 mb-lg-0">
                                {['business', 'entertainment', 'health', 'sports', 'technology', 'science'].map((category) => (
                                    <li key={category} className="nav-item ms-4">
                                        <div
                                            className={`nav-link text-white ${activeCategory === category ? 'active' : ''}`}
                                            onClick={() => handleItemClick(category)} >
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
