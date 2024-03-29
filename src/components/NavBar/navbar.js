import React, { useState } from "react";
import "./navbar.css";

import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (to) => {
    handleMenuToggle();
    // If you have a target element to scroll to, you can use scrollIntoView
    // Example:
    // document.getElementById(to).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <a
        href="#"
        className="mr-4 text-4xl font-extrabold text-green-300 portfolio-text"
      >
        Portfolio
      </a>

      {/* Desktop Menu */}
      <div className={`desktopMenu ${isMenuOpen ? "hidden md:flex" : ""}`}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => handleMenuClick("intro")}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="Aboutus"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => handleMenuClick("Aboutus")}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => handleMenuClick("works")}
        >
          Portfolio
        </Link>

        <Link
          activeClass="active"
          to="client"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => handleMenuClick("client")}
        >
          Clients
        </Link>
      </div>

      {/* Hamburger for mobile */}
      <button className="hamburger md:hidden" onClick={handleMenuToggle}>
        {isMenuOpen ? (
          <MdClose className="hamburger-icon" />
        ) : (
          <MdMenu className="hamburger-icon" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobileMenu md:hidden">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => handleMenuClick("intro")}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="client"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => handleMenuClick("client")}
          >
            Clients
          </Link>
          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => handleMenuClick("skill")}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => handleMenuClick("works")}
          >
            Portfolio
          </Link>
        </div>
      )}

      {/* Contact Button */}
      {/* <button className='desktopMenubtn' activeClass='active' id='contact' smooth={true} spy={true} offset={-100} duration={500} onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contactImg} alt="contact" className='desktopMenuImg' />
        Contact me
      </button> */}
    </nav>
  );
};

export default Navbar;
