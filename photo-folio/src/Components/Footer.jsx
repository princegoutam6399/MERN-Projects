import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="footer-part bg-dark text-white">
        <div class="container-fluid">
          <hr></hr>
          <div class="footer-text text-center p-2">
            <p>© Copyright <span>PhotoFolio</span>. All Rights Reserved</p>
            <div className="icon ms-auto">
              <a href=""><i className="fab fa-facebook rounded-circle bg-dark border border-white p-2 fs-5 text-white ms-2"></i>
              </a>
              <a href=""><i className="fab fa-instagram rounded-circle bg-dark border border-white p-2 fs-5 text-white ms-2"></i></a>
              <a href=""><i className="fab fa-twitter rounded-circle bg-dark border border-white p-2 fs-5 text-white ms-2"></i>
              </a>
              <a href=""><i className="fab fa-linkedin rounded-circle bg-dark border border-white p-2 fs-5 text-white ms-2"></i>
              </a>
            </div>
            <div className="made mt-2">
            <p>Designed by <a class="text-warning text-decoration-none">Prince🩷</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer