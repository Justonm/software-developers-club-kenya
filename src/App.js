<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
=======
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
>>>>>>> e0a8400bbf40556771c40fdf703feb79703e8835
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MembersPage from './pages/MembersPage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
<<<<<<< HEAD
import MembersOnlyPage from './pages/MembersOnlyPage';
import LoginPage from './pages/LoginPage'; // Ensure this import is correct
import './styles.css'; // Import existing styles

const App = () => {
  return (
    <Router>
      <Navbar />
=======
<<<<<<< HEAD
import MembersOnlyPage from './pages/MembersOnlyPage';
<<<<<<< HEAD
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import './styles.css'; // Import existing styles

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (userName) => {
    setLoggedIn(true);
    setCurrentUser(userName); // Set the current user after login
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <Router>
      <Navbar loggedIn={loggedIn} onLogout={handleLogout} currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/members" element={<MembersPage loggedIn={loggedIn} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/members-only" element={<MembersOnlyPage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
=======
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage'; // Import Signup
import './styles.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [memberId, setMemberId] = useState(null);  // Store the logged-in member's ID
=======
import LoginPage from './pages/LoginPage'; // Ensure this import is correct
import Navbar from './components/Navbar';
import './styles.css'; // Import existing styles

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
>>>>>>> home

  return (
    <Router>
      {isLoggedIn && <Navbar />} {/* Conditionally render Navbar after login */}
>>>>>>> e0a8400bbf40556771c40fdf703feb79703e8835
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/contact" element={<ContactPage />} />
<<<<<<< HEAD
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/members-only" element={<MembersOnlyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/member" element={<MembersPage />} /> {/* Add this route */}
        </Routes>
      </div>
=======
<<<<<<< HEAD
          <Route path="/profile" element={<ProfilePage memberId={memberId} />} />  {/* Pass memberId */}
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} setMemberId={setMemberId} />} /> {/* Pass setMemberId */}
          <Route path="/signup" element={<SignupPage />} /> {/* Signup Route */}
=======
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/members-only" element={<MembersOnlyPage />} />
          <Route path="/login" element={<LoginPage />} />
>>>>>>> home
        </Routes>
      </div>
>>>>>>> loginsignup
>>>>>>> e0a8400bbf40556771c40fdf703feb79703e8835
    </Router>
  );
};

export default App;
