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
            {/* Home Dropdown */}
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
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link to="/">Home Page</Link></li>
                  <li><Link to="/hospitals-doctors">Hospitals & Doctors</Link></li>
                  <li><Link to="/pharmacies">Pharmacies</Link></li>
                </ul>
              )}
            </li>

            {/* About Dropdown */}
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
                  <li><Link to="/hospitals-doctors">Hospitals</Link></li>
                  <li><Link to="/ambulance-booking">Ambulances</Link></li>
                  <li><Link to="/medicines">Medicines</Link></li>
                  <li><Link to="/blood-donors">Blood Donors</Link></li>
                </ul>
              )}
            </li>

            {/* Services Dropdown */}
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
                  <li><Link to="/services">Our Services</Link></li>
                  <li><Link to="/ambulance-booking">Ambulance Booking</Link></li>
                  <li><Link to="/upload-prescriptions">Upload Prescriptions</Link></li>
                </ul>
              )}
            </li>

            {/* Contact Dropdown */}
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
                  <li><Link to="/contact-doctor">Contact a Doctor</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><Link to="/contact-donor">Contact a Donor</Link></li>
                  <li><Link to="/contact-ambulance">Contact an Ambulance</Link></li>
                </ul>
              )}
            </li>

            {/* Login Dropdown */}
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
                  <li><Link to="/user-login">Login As User</Link></li>
                  <li><Link to="/admin-login">Login As Doctor</Link></li>
                  <li><Link to="/user-register">Register As User</Link></li>
                  <li><Link to="/admin-register">Register As Admin</Link></li>
                </ul>
              )}
            </li>

            {/* Search Bar */}
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