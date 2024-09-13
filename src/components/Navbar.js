import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const Navbar = ({ loggedIn, onLogout, currentUser }) => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {loggedIn && <Link to="/members">Members</Link>}
            <Link to="/contact">Contact</Link>
            {loggedIn ? (
                <>
                    <span>Welcome, {currentUser}!</span>
                    <Link to="/profile">Profile</Link>
                    <Link to="/members-only">Members Only</Link>
                    <button className="logout-button" onClick={onLogout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                </>
            )}
        </nav>
    );
=======
const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/members">Members</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/profile">Profile</Link>
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
>>>>>>> loginsignup
};

export default Navbar;
