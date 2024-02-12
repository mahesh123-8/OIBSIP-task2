import React, { useState } from 'react';
import './navbar.css'
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className='navbar'>
      
      <img src={logo} alt="logo" className='logo' />
      <div className={`desktopMenu ${isMenuOpen ? 'hidden md:flex' : ''}`}>
   
<Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" >Home</Link>
<Link  activeClass='active' to='client'spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Clients</Link>
<Link  activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
<Link  activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
 
    </div>
     {/* Hamburger for mobile */}
     <button className='hamburger md:hidden'onClick={handleMenuToggle}>
        <div className={`bar ${isMenuOpen ? 'bar1-open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'bar2-open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'bar3-open' : ''}`}></div>
      </button>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobileMenu md:hidden">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} onClick={handleMenuToggle}>Home</Link>
          <Link activeClass='active' to='client' spy={true} smooth={true} offset={-100} duration={500} onClick={handleMenuToggle}>Clients</Link>
          <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} onClick={handleMenuToggle}>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} onClick={handleMenuToggle}>Portfolio</Link>
        </div>
      )}
    {/* <button  className='desktopMenubtn' activeClass='active' id='contact' smooth={true} spy={true} offset={-100} duration={500} onClick={()=>{
    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    }}>
<img src={contactImg} alt="contact"  className='desktopMenuImg'/>
 Contact me
    </button> */}
    </nav>
  )
}

export default Navbar;
