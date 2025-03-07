import React from 'react';
import './AdminLogin.css';

const AdminLogin = () => {
  return (
    <section className="admin-login">
      <h1>Admin Login</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default AdminLogin;