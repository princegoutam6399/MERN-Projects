import React, { useContext } from 'react'

const Navbar = () => {


    return (
        <div>
            <div className="container-fluid navbar-cont">
                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <a class="navbar-brand" href="#">ImageAura</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">License</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Upload</a>
                                </li>
                                <li class="nav-item">
                                    <button className='btn btn-outline-dark rounded-pill ps-4 pe-4 '>Join</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="search-container">
                    <div className="container form-cont">
                        <h2 className='text-center'>The best free stock photos, royalty free <br /> images & videos shared by creators.</h2>
                        <form class="d-flex pt-2" role="search" >
                            <input class="form-control me-2" type="search" placeholder="Search for free photos" aria-label="Search" style={{height:"50px",fontSize:"18px"}} />
                                <button class="btn btn-outline-dark" type="submit" style={{height:"48px",width:"100px",fontSize:"18px"}} >Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar