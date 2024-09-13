import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Import existing styles

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
};

export default Navbar;
