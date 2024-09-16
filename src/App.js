import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MembersPage from './pages/MembersPage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import MembersOnlyPage from './pages/MembersOnlyPage';
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
    localStorage.removeItem('loggedInUserId');
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
    </Router>
  );
};

export default App;
