import React from 'react'

export default function Navbar() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg bg-light border">
          <div className="container">
            <a className="navbar-brand m-0" href="#"><img src='https://themewagon.github.io/malefashion/img/logo.png'></img></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item me-4">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#">Shop</a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#">Pages</a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#">Blog</a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#">Contact</a>
                </li>
                
              </ul>
            <div class="icon ms-auto">
              <i class="me-3 fa-solid fa-magnifying-glass"></i>
              <i class="me-3 fa-regular fa-heart"></i>
              <i class="me-1 fa-solid fa-bag-shopping"></i>
              <i class="me-3 fa-solid fa-dollar-sign"> 0.00</i>
            </div>
            </div>
          </div>
        </nav>

      </header>
    </div>
  )
}
