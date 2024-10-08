import React from 'react';
import '../styles.css'; // Import existing styles
import Profile from '../components/Profile';


const ProfilePage = () => {
    return (
        <div className="container page">
            <h1>My Profile</h1>
            <p>View and edit your profile information here.</p>
            <Profile />
            {/* Add form or profile details here */}
        </div>
    );
};

export default ProfilePage;
