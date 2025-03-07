import React from 'react';
import './UserRegister.css';

const UserRegister = () => {
  return (
    <section className="user-register">
      <h1>User Register</h1>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default UserRegister;