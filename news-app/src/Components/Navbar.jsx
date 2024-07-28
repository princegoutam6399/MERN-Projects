import React from 'react'

const Navbar = ({setCategory}) => {
    return (
        <div>
            <div className="container-fluid bg-black">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white fs-4" href="/"><span className='text-danger ps-3 py-2 badge bg-light'>DailyNews</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-4  mb-lg-0">
                                <li className="nav-item ms-4 ">
                                    <a className="nav-link text-white" onClick={()=>setCategory("crime")} href="/">Crime</a>
                                </li>
                                <li className="nav-item ms-4">
                                    <a className="nav-link text-white" href="/" onClick={()=>setCategory("entertainment")}>Entertainment</a>
                                </li>
                                <li className="nav-item ms-4">
                                    <a className="nav-link text-white" href="/" onClick={()=>setCategory("health")}>Health</a>
                                </li>
                                <li className="nav-item ms-4">
                                    <a className="nav-link text-white" href="/" onClick={()=>setCategory("sports")}>Sports</a>
                                </li>
                                <li className="nav-item ms-4">
                                    <a className="nav-link text-white" href="/" onClick={()=>setCategory("technology")}>Technology</a>
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