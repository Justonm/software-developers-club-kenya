<<<<<<< HEAD
import React from 'react';
import '../styles.css'; // Import existing styles

const ProfilePage = () => {
    return (
        <div className="container page">
            <h1>My Profile</h1>
            <p>View and edit your profile information here.</p>
        </div>
    );
};

export default ProfilePage;
=======
import React, { useState, useEffect } from 'react';
import '../styles.css'; // Import existing styles

const Profile = ({ memberId }) => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch member details when the component mounts
  useEffect(() => {
    const fetchMember = async () => {
      const response = await fetch(`http://localhost:5000/members/${memberId}`);
      const data = await response.json();
      setProfileData({
        name: data.name,
        email: data.email,
        password: '', // Leave password empty for security
      });
    };
    
    if (memberId) {
      fetchMember();
    }
  }, [memberId]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission to update profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/members/${memberId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData),
    });

    if (response.ok) {
      setMessage('Profile updated successfully!');
      setIsEditing(false);
    } else {
      setMessage('Failed to update profile. Please try again.');
    }
  };

  return (
    <div className="container page">
      <h1>My Profile</h1>
      <p>View and edit your profile information here.</p>
      {message && <p className="message">{message}</p>}
      {isEditing ? (
        <form onSubmit={handleSubmit} className="profile-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            New Password (Optional):
            <input
              type="password"
              name="password"
              value={profileData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Save Changes</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <div className="profile-details">
          <p><strong>Name:</strong> {profileData.name}</p>
          <p><strong>Email:</strong> {profileData.email}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
>>>>>>> e0a8400bbf40556771c40fdf703feb79703e8835
