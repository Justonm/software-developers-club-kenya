import React, { useState, useEffect } from 'react';

const ProfilePage = ({ memberId }) => {  // Receive memberId as a prop
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMember = async () => {
      const response = await fetch(`http://localhost:3000/members/${memberId}`);
      const data = await response.json();
      setProfileData({
        name: data.name,
        email: data.email,
        password: '', // Optional: don't fetch the password for security reasons
      });
    };
    if (memberId) {
      fetchMember();
    }
  }, [memberId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/members/${memberId}`, {
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
    <div>
      <h1>Profile Page</h1>
      {message && <p>{message}</p>}
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
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
            />
          </label>
          <br />
          <label>
            Password:
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
        <div>
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
