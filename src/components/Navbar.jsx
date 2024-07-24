import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar  list-disc list-inside">
      <div className="navbar-logo p-1 ani-text bg-white rounded-lg shadow-md transform transition-transform  hover:scale-100 hover:shadow-xl">
        <h1 className="">SPRINGDALE PUBLIC SCHOOL</h1>
      </div>
      <div className={  `navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="/" onClick={handleLinkClick}>Home</a>
        <a href="/about" onClick={handleLinkClick}>About Us</a>
        <a href="/academics" onClick={handleLinkClick}>Academics</a>
        <a href="/admission" onClick={handleLinkClick}>Admissions</a>
        <a href="/faculty" onClick={handleLinkClick}>Faculty</a>
        <a href="/students" onClick={handleLinkClick}>Students</a>
        <a href="/gallery" onClick={handleLinkClick}>Gallery</a>
        <a href="/contact" onClick={handleLinkClick}>Contact Us</a>
      </div>
      <div className="hamburger" onClick={handleToggle}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
