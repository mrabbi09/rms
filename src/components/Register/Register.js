import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Sign Up</h2>
        <p className="subheading">Create an account to get started</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password" required />
          </div>
          <button type="submit" className="register-btn">Create Account</button>
        </form>
        <div className="social-register">
          <button className="social-btn facebook-btn">
            <i className="fab fa-facebook-f"></i> Sign Up with Facebook
          </button>
          <button className="social-btn google-btn">
            <i className="fab fa-google"></i> Sign Up with Google
          </button>
        </div>
        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
