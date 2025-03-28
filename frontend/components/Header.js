import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Task Manager</h1>
      <nav>
        <Link to="/">Login</Link> | <Link to="/register">Register</Link> |{' '}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}

export default Header;
