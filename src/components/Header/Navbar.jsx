import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";

function Navbar() {
  const toggleMenu = () => {
    const nav = document.querySelector(".topnav");
    nav.classList.toggle("responsive");
  };

  return (
    <div className="nav">
      <ul className="topnav">
        <li>
          <Link className="active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/services">Our Services</Link>
        </li>
        <li>
          <Link to="/regional-office">Regional Office</Link>
        </li>
        <li>
          <Link to="/clients">Clients</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li className="mobile_hide">
          <a
            className="display_flex"
            href="https://api.whatsapp.com/send?phone=+919341554433"
          >
            <img
              alt="WhatsApp"
              className="top_icon"
              src="https://www.centurypackersmovers.in/images/icon/whatsapp.jpeg"
            />
            <span>WhatsApp</span>
          </a>
        </li>
        <li className="mobile_hide">
          <a className="display_flex" href="tel:+917218545433">
            <img
              alt="Call"
              className="top_icon"
              src="https://www.centurypackersmovers.in/images/icon/call.jpeg"
            />
            <span>Direct Call</span>
          </a>
        </li>
        <li className="icon">
          <a href="javascript:void(0);" onClick={toggleMenu}>
            Menu
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
