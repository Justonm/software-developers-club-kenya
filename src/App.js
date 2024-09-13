import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MembersPage from './pages/MembersPage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import MembersOnlyPage from './pages/MembersOnlyPage';
import LoginPage from './pages/LoginPage'; // Ensure this import is correct
import './styles.css'; // Import existing styles

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/members-only" element={<MembersOnlyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/member" element={<MembersPage />} /> {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
