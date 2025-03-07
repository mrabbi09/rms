import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <img src="/assets/hero-img.png" alt="Logo" className="logo" />
        </div>
        
        <div className="menu-options">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a 
                href="#home" 
                className="navbar-link" 
                onClick={(e) => { e.preventDefault(); toggleDropdown('home'); }}
              >
                Home
              </a>
              {activeDropdown === 'home' && (
                <ul className="dropdown">
                  <li><Link to="/">DashBoard</Link></li>
                  <li><Link to="/">Home Page</Link></li>
                  <li><Link to="/">Hospitals & Doctors</Link></li>
                  <li><Link to="/">Pharmacies</Link></li>
                </ul>
              )}
            </li>

            <li className="navbar-item">
              <a 
                href="#about" 
                className="navbar-link" 
                onClick={(e) => { e.preventDefault(); toggleDropdown('about'); }}
              >
                About
              </a>
              {activeDropdown === 'about' && (
                <ul className="dropdown">
                  <li><Link to="/about">ABOUT RMS</Link></li>
                  <li><Link to="/about">Hospitals</Link></li>
                  <li><Link to="/about">Ambulances</Link></li>
                  <li><Link to="/about">Medicines</Link></li>
                  <li><Link to="/about">Blood Donors</Link></li>
                </ul>
              )}
            </li>

            <li className="navbar-item">
              <a 
                href="#services" 
                className="navbar-link" 
                onClick={(e) => { e.preventDefault(); toggleDropdown('services'); }}
              >
                Services
              </a>
              {activeDropdown === 'services' && (
                <ul className="dropdown">
                  <li><Link to="/nearby-hospital">Nearby Hospitals</Link></li>
                  <li><Link to="/services">Our services</Link></li>
                  <li><Link to="/ambulance-booking">Ambulance Booking</Link></li> {/* Ambulance Booking Option */}
                  <li><Link to="/services">Upload Prescriptions</Link></li>
                </ul>
              )}
            </li>

            <li className="navbar-item">
              <a 
                href="#contact" 
                className="navbar-link" 
                onClick={(e) => { e.preventDefault(); toggleDropdown('contact'); }}
              >
                Contact
              </a>
              {activeDropdown === 'contact' && (
                <ul className="dropdown">
                  <li><Link to="/contact">Contact a Doctor</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><Link to="/contact">Contact a Donor</Link></li>
                  <li><Link to="/contact">Contact A Ambulance</Link></li>
                  
                </ul>
              )}
            </li>

            {/* Updated Login Dropdown */}
            <li className="navbar-item">
              <a 
                href="#login" 
                className="navbar-link" 
                onClick={(e) => { e.preventDefault(); toggleDropdown('login'); }}
              >
                Login
              </a>
              {activeDropdown === 'login' && (
                <ul className="dropdown">
                  <li><Link to="/login?type=user">Login As User</Link></li>
                  <li><Link to="/login?type=admin">Login As Doctor</Link></li>
                  <li><Link to="/register?type=user">Register As User</Link></li>
                  <li><Link to="/register?type=admin">Register As Admin</Link></li>
                </ul>
              )}
            </li>

            <li className="navbar-item">
              <div className="search-container">
                <input type="text" className="search-input" placeholder="Search..." />
                <button className="search-button">Search</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
