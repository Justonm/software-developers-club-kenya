import React, { useState, useEffect } from 'react';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [updatedData, setUpdatedData] = useState({
        name: '',
        email: '',
        password: '',
        project: '',
        language: '',
        likes: '',
        image: ''
    });

    // State to manage password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Handle user profile image change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUpdatedData(prevData => ({
                    ...prevData,
                    image: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            const userId = localStorage.getItem('loggedInUserId');
            if (userId) {
                try {
                    const response = await fetch('https://software-database.vercel.app/members');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    const user = data.find(member => member.id === parseInt(userId)); // Ensure ID is an integer
                    if (user) {
                        setUserData(user);
                        setUpdatedData(user);
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        fetchUserData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSave = () => {
        console.log('Updated User Data:', updatedData);
        setUserData(updatedData);
        setIsEditing(false);
    };

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container page">
            <h1>My Profile</h1>
            <p>View and edit your profile information here.</p>

            <div className="profile">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <img 
                        src={updatedData.image} 
                        alt={userData.name} 
                        className="profile-img" 
                        style={{ width: '150px', height: '150px', borderRadius: '50%', marginRight: '20px' }}
                    />
                    {isEditing && (
                        <div>
                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleImageChange} 
                                style={{ marginTop: '10px' }}
                            />
                        </div>
                    )}
                </div>

                <div className="profile-details">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={updatedData.name}
                            disabled={!isEditing}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={updatedData.email}
                            disabled={!isEditing}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label>
                        Password:
                        {/* Flexbox wrapper to align input and button side by side */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type={showPassword ? "text" : "password"}  // Toggle between text and password
                                name="password"
                                value={updatedData.password}
                                disabled={!isEditing}
                                onChange={handleInputChange}
                                style={{ flex: '1' }}  // Make input fill remaining space
                            />
                            {/* Add a button to toggle password visibility */}
                            <button 
                                type="button" 
                                onClick={() => setShowPassword(!showPassword)} 
                                style={{
                                    marginLeft: '10px',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: '#007bff',
                                }}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </label>

                    <label>
                        Project:
                        <input
                            type="text"
                            name="project"
                            value={updatedData.project}
                            disabled={!isEditing}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label>
                        Language:
                        <input
                            type="text"
                            name="language"
                            value={updatedData.language}
                            disabled={!isEditing}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label>
                        Likes:
                        <input
                            type="number"
                            name="likes"
                            value={updatedData.likes}
                            disabled={!isEditing}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
            </div>

            {!isEditing ? (
                <button onClick={() => setIsEditing(true)}>Edit Profile</button>
            ) : (
                <button onClick={handleSave}>Save Changes</button>
            )}
        </div>
    );
};

export default Profile;
