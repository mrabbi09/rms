import React, { useState } from 'react';
import styles from './AdminRegister.module.css';

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    alert('Registration successful! Redirecting to login...');
    // Redirect to login or dashboard
    window.location.href = '/login';
  };

  const handleFacebookRegister = () => {
    alert('Redirecting to Facebook registration...');
    // Replace with actual Facebook OAuth integration
    window.location.href = 'https://www.facebook.com/signup';
  };

  const handleGmailRegister = () => {
    alert('Redirecting to Gmail registration...');
    // Replace with actual Google OAuth integration
    window.location.href = 'https://accounts.google.com/signup';
  };

  return (
    <div className={styles.registerContainer}>
      <h2>Admin Registration</h2>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>

      <div className={styles.socialRegister}>
        <p>Or register with:</p>
        <button onClick={handleFacebookRegister} className={styles.facebookRegister}>
          <img
            src="https://img.icons8.com/color/48/000000/facebook.png"
            alt="Facebook"
            width="24"
          />
          Facebook
        </button>
        <button onClick={handleGmailRegister} className={styles.gmailRegister}>
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Gmail"
            width="24"
          />
          Gmail
        </button>
      </div>
    </div>
  );
};

export default AdminRegister;