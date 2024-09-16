import React, { useState, useEffect } from 'react';
import "./Profile.css";
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

    const [showPassword, setShowPassword] = useState(false);

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if(file) {
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
    // Fetch user data based on logged-in user
    useEffect(() => {
        const fetchUserData = async () => {
            const userId = localStorage.getItem('loggedInUserId'); // Assuming logged-in user ID is stored in localStorage
            if (userId) {
                try {
                    const response = await fetch(`https://software-database.vercel.app/members/${userId}`); // Fetch specific user by ID
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const user = await response.json();
                    if (user) {
                        setUserData(user);
                        setUpdatedData(user); // Populate form with current user data
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

    // Function to handle saving the updated data
    const handleSave = async () => {
        const userId = localStorage.getItem('loggedInUserId');
        try {
            const response = await fetch(`https://software-database.vercel.app/members/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });
            if (response.ok) {
                const updatedUser = await response.json();
                setUserData(updatedUser);
                setIsEditing(false);
                localStorage.setItem('loggedInUser', JSON.stringify(updatedUser)); // Update localStorage if necessary
                console.log('Profile updated successfully');
            } else {
                throw new Error('Failed to update profile');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container page">


            <div className="profile">

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', }}>
                    <img 
                        src={updatedData.image} 
                        alt={userData.name} 
                        className="profile-img" 
                        style={{ width: '150px', height: '150px', borderRadius: '50%', alignItems: 'center' }}
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
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={updatedData.password}
                            disabled={!isEditing}
                            onChange={handleInputChange}
                            style={{ flex: '1' }}
    
                        />
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
