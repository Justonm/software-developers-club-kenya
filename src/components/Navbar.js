import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import '../styles.css'; // Import existing styles

const Navbar = () => {
=======

<<<<<<< HEAD
const Navbar = ({ loggedIn, onLogout, currentUser }) => {
>>>>>>> e0a8400bbf40556771c40fdf703feb79703e8835
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
<<<<<<< HEAD
            <Link to="/members">Members</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/members-only">Members Only</Link>
            <Link to="/login">Login</Link> {/* Add link to LoginPage */}
        </nav>
    );
=======
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
>>>>>>> e0a8400bbf40556771c40fdf703feb79703e8835
};

export default Navbar;
