import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/members">Members</Link>
      <Link to="/contact">Contact</Link>
      {isAuthenticated ? (
        <>
          <Link to="/profile">Profile</Link>
          <button onClick={() => setIsAuthenticated(false)}>Logout</button> {/* Logout */}
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
