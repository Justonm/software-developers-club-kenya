import React, { useEffect, useState } from 'react';

function MemberDirectory() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/members')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, []);

    return (
        <div>
            <h1>Member Directory</h1>
            <ul>
                {members.map(member => (
                    <li key={member.id}>{member.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default MemberDirectory;
