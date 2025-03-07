import React from 'react';
import './AdminRegister.css';

const AdminRegister = () => {
  return (
    <section className="admin-register">
      <h1>Admin Register</h1>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default AdminRegister;