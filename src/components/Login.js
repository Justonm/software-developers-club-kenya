import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login by checking db.json (could be improved with actual API)
        fetch('http://localhost:3000/members')
            .then(res => res.json())
            .then(members => {
                const member = members.find(m => m.email === email && m.password === password);
                if (member) {
                    setIsAuthenticated(true);
                    navigate('/profile');
                } else {
                    alert('Invalid credentials');
                }
            });
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
