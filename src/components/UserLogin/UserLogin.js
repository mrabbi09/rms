import React, { useState } from 'react';
import styles from './UserLogin.module.css';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }
    if (email === 'user@example.com' && password === 'user123') {
      alert('Login successful! Redirecting to dashboard...');
      window.location.href = '/dashboard';
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  const handleFacebookLogin = () => {
    alert('Redirecting to Facebook login...');
    // Replace with actual Facebook OAuth integration
    window.location.href = 'https://www.facebook.com/login';
  };

  const handleGmailLogin = () => {
    alert('Redirecting to Gmail login...');
    // Replace with actual Google OAuth integration
    window.location.href = 'https://accounts.google.com/login';
  };

  return (
    <div className={styles.loginContainer}>
      <h2>User Login</h2>
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
        <p>Or login with:</p>
        <button onClick={handleFacebookLogin} className={styles.facebookLogin}>
          <img
            src="https://img.icons8.com/color/48/000000/facebook.png"
            alt="Facebook"
            width="24"
          />
          Facebook
        </button>
        <button onClick={handleGmailLogin} className={styles.gmailLogin}>
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

export default UserLogin;