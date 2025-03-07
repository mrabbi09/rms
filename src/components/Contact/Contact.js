import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p>Have questions? Contact us and our team will get back to you as soon as possible.</p>
        <a href="mailto:info@projecty.com" className="btn">Contact Us</a>
      </div>
    </section>
  );
}

export default Contact;
