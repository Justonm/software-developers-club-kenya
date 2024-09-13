import React from 'react';
import '../styles.css'; // Import existing styles
import Profile from '../components/Profile';

const ProfilePage = () => {
    return (
        <div className="container page">
            <Profile />
            {/* Add form or profile details here */}
        </div>
    );
};

export default ProfilePage;
