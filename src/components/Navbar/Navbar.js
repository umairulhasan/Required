import React from "react"
import "./Navbar.css"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <>
      <nav>
        <h1>EASY ELECBUY</h1>
        <ul className="navigation">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="/products" className="nav-link">
              All Products
            </a>
          </li>
          <li>
            <a href="/Contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <button className="burger-menu" id="burger-menu">
          <ion-icon className="bars" name="menu-outline"></ion-icon>
        </button>
      </nav>
    </>
  )
}

export default Navbar
