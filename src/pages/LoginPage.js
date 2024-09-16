import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://software-database.vercel.app/members?email=${email}&password=${password}`);
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
