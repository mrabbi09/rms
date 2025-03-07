import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">About RMS</h2>
        <p className="about-description">
          Rapid Med-Tech System (RMS) is an advanced healthcare platform designed to revolutionize the healthcare experience. RMS integrates smart, AI-powered solutions to provide seamless services such as hospital management, real-time ambulance booking, prescription uploads, and blood donation systems.
        </p>
        <p className="about-description">
          RMS ensures timely access to essential healthcare services, improving efficiency, response times, and overall patient care. With a robust set of features like AI-driven prescription matching, secure payment systems, and geolocation services, RMS aims to bridge the gap between healthcare providers and patients, making healthcare more accessible and reliable.
        </p>
        <p className="about-features-title">Key Features of RMS:</p>
        <ul className="about-features-list">
          <li><strong>Hospital Management System</strong>: Secure patient record management, appointment scheduling, and resource optimization.</li>
          <li><strong>Real-Time Ambulance Booking</strong>: Quick ambulance dispatch with live GPS tracking for better coordination.</li>
          <li><strong>AI-Powered Prescription Matching</strong>: Smart prescription uploads with medication suggestions and pharmacy integration.</li>
          <li><strong>Blood Donor Management</strong>: Connects patients with verified blood donors and provides real-time blood bank data.</li>
          <li><strong>AI-Driven Healthcare Insights</strong> (Future Expansion): Predictive analysis and health monitoring through wearable devices.</li>
          <li><strong>Secure Payment & Insurance Integration</strong>: Easy payment options for hospital bills and insurance claim tracking.</li>
        </ul>
        <p className="about-description">
          RMS is built with the latest technologies, including React.js, Flutter, Django, and AI-powered tools like TensorFlow and PyTorch. With seamless integration of geolocation services via Google Maps API, RMS is designed to ensure fast, efficient, and secure healthcare management for everyone.
        </p>
        <p className="about-description final-note">
          Choose RMS for a faster, smarter, and more reliable healthcare experience.
        </p>
      </div>
    </section>
  );
}

export default About;
