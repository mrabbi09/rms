import React, { useState } from 'react';
import './Login.css'; // Add styling here

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // For handling loading state

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when the form is submitted

    if (email === '' || password === '') {
      setError('Please fill in both fields');
      setLoading(false); // Turn off loading if there are errors
    } else {
      setError('');
      console.log('Logged in');
      // Handle your login logic here, like making an API call
      setTimeout(() => { // Simulating an API call
        setLoading(false);
        alert('Login successful');
      }, 2000);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="social-login">
          <button className="social-btn google-btn">
            <i className="fab fa-google"></i> Login with Google
          </button>
          <button className="social-btn facebook-btn">
            <i className="fab fa-facebook-f"></i> Login with Facebook
          </button>
        </div>

        <div className="forgot-password">
          <a href="/forgot-password">Forgot password?</a>
        </div>
        <div className="register-link">
          <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
