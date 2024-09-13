<<<<<<< HEAD
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
=======
import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/members?email=${email}&password=${password}`);
            const data = await response.json();

            if (data.length > 0) {
                alert(`Welcome, ${data[0].name}!`);
                onLogin(data[0].name); // Pass the user's name to the parent component
            } else {
                setErrorMessage('Invalid email or password.');
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again.');
        }
>>>>>>> e0a8400bbf40556771c40fdf703feb79703e8835
    };

    return (
        <div className="container page">
            <h1>Login</h1>
<<<<<<< HEAD
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
=======
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
>>>>>>> e0a8400bbf40556771c40fdf703feb79703e8835
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
<<<<<<< HEAD
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
=======
                    <label>Password:</label>
                    <input
                        type="password"
>>>>>>> e0a8400bbf40556771c40fdf703feb79703e8835
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
<<<<<<< HEAD
=======
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
>>>>>>> e0a8400bbf40556771c40fdf703feb79703e8835
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
