import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="container-fluid pt-5">
                <div class="container">
                    <footer class="py-5">
                        <div class="row d-flex justify-content-between">
                            <div class="col-2">
                                <h5>About Us</h5>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Privacy </a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Cookies Policy</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Careers</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Term & Conditions</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Contact Us</a></li>
                                </ul>
                            </div>

                            <div class="col-2">
                                <h5>Latest News</h5>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Business News</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Technology News</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Health News</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Science </a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Entertainment</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Sports</a></li>
                                </ul>
                            </div>


                            <div class="col-4 offset-1">
                                <form>
                                    <h5>Subscribe to our newsletter</h5>
                                    <p>Monthly digest of whats new and exciting from us.</p>
                                    <div class="d-flex w-100 gap-2">
                                        <label for="newsletter1" class="visually-hidden">Email address</label>
                                        <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                                        <button class="btn btn-primary" type="button">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="d-flex justify-content-between py-4 my-4 border-top">
                            <p>© 2024 Company, Inc. All rights reserved.</p>
                            <ul class="list-unstyled d-flex">
                                <li class="ms-3 fs-5"><a class="link-dark" href="#"></a><i class="fa-brands fa-facebook"></i></li>
                                <li class="ms-3 fs-5"><a class="link-dark" href="#"></a><i class="fa-brands fa-twitter"></i></li>
                                <li class="ms-3 fs-5"><a class="link-dark" href="#"></a><i class="fa-brands fa-instagram"></i></li>
                            </ul>
                        </div>
                            <p>Made By <a href="/">Prince💗</a></p>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Footer