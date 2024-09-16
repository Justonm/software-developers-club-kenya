import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
    const navigate = useNavigate(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://software-database.vercel.app/members?email=${email}&password=${password}`);
            const data = await response.json();

            if (data.length > 0) {
                const user = data[0];
                localStorage.setItem('loggedInUserId', user.id);
                alert(`Welcome, ${user.name}!`);
                onLogin(user.name); // Pass the user's name to the parent component
                navigate('/profile');
            } else {
                setErrorMessage('Invalid email or password.');
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="container page">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
