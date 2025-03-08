import React, { useState } from 'react';
import styles from './AdminLogin.module.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }
    if (email === 'admin@example.com' && password === 'admin123') {
      alert('Login successful! Redirecting to dashboard...');
      window.location.href = '/dashboard';
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  const handleFacebookLogin = () => {
    alert('Redirecting to Facebook login...');
    window.location.href = 'https://www.facebook.com/login';
  };

  const handleGmailLogin = () => {
    alert('Redirecting to Gmail login...');
    window.location.href = 'https://accounts.google.com/login';
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      <div className={styles.socialLogin}>
        <button onClick={handleFacebookLogin} className={styles.facebookLogin}>
          <img
            src="https://img.icons8.com/color/48/000000/facebook.png"
            alt="Facebook"
            width="24"
          />
          Login with Facebook
        </button>
        <button onClick={handleGmailLogin} className={styles.gmailLogin}>
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Gmail"
            width="24"
          />
          Login with Gmail
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;