import React, { useState } from 'react';
import '../styles.css'; // Import existing styles

const ProfilePage = () => {
    // State to store user input
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        password: '',
        project: '',
        language: '',
        likes: 0,
        profilePicture: ''
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value
        });
    };

    // Handle file upload for profile picture
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfile({
                ...profile,
                profilePicture: URL.createObjectURL(file)
            });
        }
    };

    // Handle form submission (for now just preventing default and logging)
    const handleSubmit = (e) => {
        e.preventDefault();
        // Log or process the profile data
        console.log('Profile Data:', profile);
    };

    return (
        <div className="container page">
            <h1>My Profile</h1>
            <p>View and edit your profile information here.</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={profile.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required
                />

                <label htmlFor="project">Project:</label>
                <input
                    type="text"
                    id="project"
                    name="project"
                    value={profile.project}
                    onChange={handleInputChange}
                    placeholder="Enter your project name"
                    required
                />

                <label htmlFor="language">Programming Language:</label>
                <input
                    type="text"
                    id="language"
                    name="language"
                    value={profile.language}
                    onChange={handleInputChange}
                    placeholder="Enter the language you're using"
                    required
                />

                <label htmlFor="likes">Likes:</label>
                <input
                    type="number"
                    id="likes"
                    name="likes"
                    value={profile.likes}
                    readOnly
                />

                <label htmlFor="profilePicture">Profile Picture:</label>
                <input
                    type="file"
                    id="profilePicture"
                    name="profilePicture"
                    accept="image/*"
                    onChange={handleFileChange}
                />

                <button type="submit">Save Profile</button>
            </form>

            {/* Profile Output */}
            <div className="profile-output">
                <h3>Profile Preview</h3>
                <p><strong>Name:</strong> {profile.name}</p>
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>Project:</strong> {profile.project}</p>
                <p><strong>Language:</strong> {profile.language}</p>
                <p><strong>Likes:</strong> {profile.likes}</p>
                {profile.profilePicture && (
                    <img
                        src={profile.profilePicture}
                        alt="Profile"
                        width="100"
                    />
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
