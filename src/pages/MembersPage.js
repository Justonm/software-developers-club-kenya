import React, { useState, useEffect } from 'react';

const MembersPage = ({ loggedIn }) => {
    const [members, setMembers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        if (loggedIn) {
            fetch('http://localhost:5000/members')
                .then(response => response.json())
                .then(data => setMembers(data))
                .catch(err => setError('Failed to load members.'));
        }
    }, [loggedIn]);

    return (
        <div className="container page">
            <h1>Members</h1>
            {!loggedIn ? (
                <p>Please log in to see member content.</p>
            ) : (
                <div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <ul>
                        {members.map(member => (
                            <li key={member.id}>{member.name} ({member.email})</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MembersPage;
