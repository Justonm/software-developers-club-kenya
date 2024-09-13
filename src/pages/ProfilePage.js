import React, { useState, useEffect } from 'react';
import '../styles.css'; // Import existing styles

const ProfilePage = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        // Retrieve user profile from localStorage
        const userProfile = localStorage.getItem('userProfile');
        if (userProfile) {
            setProfile(JSON.parse(userProfile));
        } else {
            // Redirect to login if no user profile is found
            window.location.href = '/';
        }
    }, []);

    return (
        <div className="container page">
            <h1>My Profile</h1>
            {profile ? (
                <div>
                    <p><strong>Name:</strong> {profile.name}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>Project:</strong> {profile.project}</p>
                    <p><strong>Programming Language:</strong> {profile.language}</p>
                    <p><strong>Likes:</strong> {profile.likes}</p>
                    <img src={profile.image} alt="Profile" width="100" />
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};

export default ProfilePage;
