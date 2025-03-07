import React from 'react';
import './UserLogin.css';

const UserLogin = () => {
  return (
    <section className="user-login">
      <h1>User Login</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default UserLogin;