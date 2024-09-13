import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MemberPage = () => {
    const { id } = useParams();
    const [member, setMember] = useState(null);

    useEffect(() => {
        // Fetch the specific member from the JSON server
        fetch(`http://localhost:5000/members/${id}`)
            .then((response) => response.json())
            .then((data) => setMember(data))
            .catch((error) => console.error('Error fetching member:', error));
    }, [id]);

    if (!member) {
        return <p>Loading member data...</p>;
    }

    return (
        <div>
            <h1>{member.name}'s Profile</h1>
            <p>Email: {member.email}</p>
            {/* You can add more member-specific details here */}
        </div>
    );
};

export default MemberPage;
