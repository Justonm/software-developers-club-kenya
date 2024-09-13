import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Import existing styles

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/members">Members</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/members-only">Members Only</Link>
            <Link to="/login">Login</Link> {/* Add link to LoginPage */}
        </nav>
    );
};

export default Navbar;
