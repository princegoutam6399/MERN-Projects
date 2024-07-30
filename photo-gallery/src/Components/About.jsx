import React from 'react'
import Navbar from './Navbar'

const About = () => {
    return (
        <div>
            <Navbar/>
            <div className="">
                <div className="container-fluid pt-5">
                    <div className="row justify-content-center pt-5">
                        <div className="col-lg-6">
                            <div className="about-text text-center">
                                <h1>About</h1>
                                <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas
                                    consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione
                                    sint. Sit quaerat ipsum dolorem.</p>
                                    <a><button className="btn pe-4 ps-4 text-center text-white mt-4 w-auto bg-success text-decoration-none">AVAILABLE
                                    FOR HIRE</button></a>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="about-info mt-5 pt-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <img src="https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/profile-img.jpg"
                                    alt="" className="w-100"></img>
                            </div>
                            <div className="col-lg-5 content">
                                <h3 className="text-success">Professional Photographer from New York</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list-unstyled">
                                            <li><i className="fa-solid fa-chevron-right"></i>
                                                <strong>Birthday:</strong>
                                                <span>1 May 1995</span>
                                            </li>
                                            <li><i className="fa-solid fa-chevron-right"></i>
                                                <strong>Website:</strong>
                                                <span>www.example.com</span>
                                            </li>
                                            <li><i className="fa-solid fa-chevron-right"></i>
                                                <strong>Phone:</strong>
                                                <span>+123 456 7890</span>
                                            </li>
                                            <li><i className="fa-solid fa-chevron-right"></i>
                                                <strong>City:</strong>
                                                <span>New York, USA</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list-unstyled">
                                            <li><i className="fa-solid fa-chevron-right"></i>
                                                <strong>Age:</strong>
                                                <span>30</span>
                                            </li>
                                            <li><i className="fa-solid fa-chevron-right"></i>
                                                <strong>Degree:</strong>
                                                <span>Master</span>
                                            </li>
                                            <li><i className="fa-solid fa-chevron-right"></i>
                                                <strong>PhEmailone:</strong>
                                                <span>email@example.com</span>
                                            </li>
                                            <li><i className="fa-solid fa-chevron-right"></i>
                                                <strong>Freelance:</strong>
                                                <span>Available</span>
                                            </li>
                                        </ul >
                                    </div >
                                </div >
                                <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. </p>
                                <p>Recusandae est praesentium consequatur eos voluptatem. Vitae dolores aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui et. Doloribus molestiae officiis. </p>
                            </div >
                        </div >
                    </div >
                </div >
            </div>
        </div>
    )
}

export default About