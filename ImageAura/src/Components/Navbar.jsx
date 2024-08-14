import React, { useState } from 'react';
import Items from './Items'; 
import Category from './Category';
import Page from './Page';

const Navbar = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    const apiKey = 'Fk9aP3wAgI080TaMXPAUzSvjqrDLQ-DZ7HTcnTOEWVk';

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const getData = async (event) => {
        event.preventDefault(); 
        if (!search) return;

        try {
            const response = await fetch(
                `https://api.unsplash.com/search/photos?page=1&query=${search}&per_page=30`,
                {
                    headers: {
                        Authorization: `Client-ID ${apiKey}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            const jsonData = await response.json();
            setData(Array.isArray(jsonData.results) ? jsonData.results : []); 

        } catch (error) {
            console.error('Error fetching data:', error);
            setData([]); 
        }
    };

    return (
        <div>
            <div className="container-fluid navbar-cont">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="#">ImageAura</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">License</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Upload</a>
                                </li>
                                <li className="nav-item">
                                    <button className='btn btn-outline-dark rounded-pill ps-4 pe-4'>Join</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="search-container">
                    <div className="container form-cont">
                        <h2 className='text-center'>The best free stock photos, royalty free <br /> images & videos shared by creators.</h2>
                        <form className="d-flex pt-2" role="search" onSubmit={getData}>
                            <input className="form-control me-2" type="search" placeholder="Search for free photos" aria-label="Search" style={{ height: "50px", fontSize: "18px" }} onChange={handleSearch} />
                            <button className="btn btn-outline-dark" type="submit" style={{ height: "48px", width: "100px", fontSize: "18px" }}>Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <Category/>
            <Items data={data} />
            <Page/>
        </div>
    );
};

export default Navbar;
