import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MembersPage from './pages/MembersPage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage'; // Import Signup
import './styles.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [memberId, setMemberId] = useState(null);  // Store the logged-in member's ID

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<ProfilePage memberId={memberId} />} />  {/* Pass memberId */}
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} setMemberId={setMemberId} />} /> {/* Pass setMemberId */}
          <Route path="/signup" element={<SignupPage />} /> {/* Signup Route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
