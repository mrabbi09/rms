import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span className="highlight">RMS (Rapid Med-Tech System)</span>
        </h1>
        <p className="hero-description animate-text">
          A <span className="highlight">cutting-edge</span> healthcare platform providing seamless 
          <span className="highlight"> hospital management</span>, 
          <span className="highlight"> ambulance booking</span>, 
          <span className="highlight"> AI-powered prescription matching</span>, and an efficient 
          <span className="highlight"> blood donor system</span>.
        </p>
      </div>
      <div className="features-grid">
        <div className="feature-card">
          <img src="/assets/hospital.png" alt="Hospital Management" className="feature-img" />
          <h3>Hospital Management</h3>
          <p>Efficiently manage hospital operations and patient records.</p>
        </div>
        <div className="feature-card">
          <img src="/assets/ambulance.png" alt="Ambulance Booking" className="feature-img" />
          <h3>Ambulance Booking</h3>
          <p>Book ambulances in real-time with live tracking.</p>
        </div>
        <div className="feature-card">
          <img src="/assets/pescription.png" alt="AI Prescription" className="feature-img" />
          <h3>AI Prescription Matching</h3>
          <p>Upload prescriptions and get automated medicine recommendations.</p>
        </div>
        <div className="feature-card">
          <img src="/assets/blood.png" alt="Blood Donor System" className="feature-img" />
          <h3>Blood Donor System</h3>
          <p>Find and connect with blood donors quickly in emergencies.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
