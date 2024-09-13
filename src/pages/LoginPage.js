// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import '../styles.css'; // Import existing styles

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Updated to useNavigate

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        // Fetch user data from db.json based on the email entered
        fetch(`http://localhost:3001/users?email=${email}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0) {
                    const user = data[0];
                    if (user.password === password) {
                        // Store user data in localStorage (or sessionStorage)
                        localStorage.setItem('userProfile', JSON.stringify(user));
                        // Redirect to profile page
                        navigate('/profile'); // Updated to use navigate
                    } else {
                        setError('Incorrect password');
                    }
                } else {
                    setError('User not found');
                }
            })
            .catch(() => {
                setError('Failed to fetch profile data');
            });
    };

    return (
        <div className="container page">
            <h1>Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
