import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
<<<<<<< HEAD
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
=======
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/members')
      .then(res => res.json())
      .then(members => {
        const member = members.find(
          (m) => m.email === email && m.password === password
        );
        if (member) {
          setIsAuthenticated(true);
          navigate('/profile'); // Redirect to profile page after successful login
        } else {
          setError('Invalid credentials. Please try again.');
        }
      });
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
>>>>>>> e0a8400bbf40556771c40fdf703feb79703e8835
}

export default Login;
