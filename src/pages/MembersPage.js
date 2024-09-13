import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../index.css'; // Adjusted import for index.css

const MembersPage = () => {
    const location = useLocation();
    const userName = location.state?.userName;
    const [members, setMembers] = useState([]);

    useEffect(() => {
        // Fetch all members from the JSON server
        fetch('http://localhost:5000/members')
            .then((response) => response.json())
            .then((data) => setMembers(data))
            .catch((error) => console.error('Error fetching members:', error));
    }, []);

    return (
        <div className="container page">
            <h1>Members Page</h1>
            {userName ? (
                <p>Welcome back, {userName}!</p>
            ) : (
                <p>Please log in to see member content.</p>
            )}
            
            <div className="members-grid">
                {members.length > 0 ? (
                    members.map((member) => (
                        <div key={member.id} className="member-card">
                            <img src={member.image} alt={member.name} className="member-image" />
                            <div className="member-details">
                                <h2>{member.name}</h2>
                                <p>Email: {member.email}</p>
                                <p>Project: {member.project}</p>
                                <p>Language: {member.language}</p>
                                <p>Likes: {member.likes}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading members...</p>
                )}
            </div>
        </div>
    );
};

export default MembersPage;
