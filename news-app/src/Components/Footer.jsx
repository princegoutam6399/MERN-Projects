import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="container-fluid bg-black">
                <div className="container ">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <div className="col-md-4 d-flex align-items-center">
                            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
                            </a>
                            <span className="mb-3 mb-md-0 text-white">© 2022 Company, Inc</span>
                        </div>

                        <ul className="nav col-md-4 fs-3 justify-content-end list-unstyled d-flex">
                            <li className="ms-3"><a className="text-white" href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            <li className="ms-3"><a className="text-white" href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li className="ms-3"><a className="text-white" href="#"><i class="fa-brands fa-youtube"></i></a></li>
                        </ul>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Footer