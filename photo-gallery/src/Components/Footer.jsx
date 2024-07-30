import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer class="footer-part bg-dark text-white">
        <div class="container-fluid">
          <hr></hr>
          <div class="footer-text text-center p-2">
            <p>© Copyright <span>PhotoFolio</span>. All Rights Reserved</p>
            <p>Designed by <a class="text-warning text-decoration-none">Prince🩷</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer