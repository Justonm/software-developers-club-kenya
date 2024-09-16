import React, { useState } from 'react';
<<<<<<< HEAD

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        // Create a new member entry in db.json
        fetch('https://software-database.vercel.app/members', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        }).then(() => alert('Signup successful! Please log in.'));
    };

    return (
        <form onSubmit={handleSignup}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Sign Up</button>
        </form>
    );
=======
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const newUser = { name, email, password };

    try {
      // Check if the user already exists in the database
      const existingUsersResponse = await fetch('https://software-database.vercel.app/members');
      const existingUsers = await existingUsersResponse.json();

      const userExists = existingUsers.find((user) => user.email === email);
      if (userExists) {
        setError('User with this email already exists.');
        return;
      }

      // Add the new user to the database
      await fetch('http://localhost:3000/members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      alert('Signup successful! You can now log in.');
      navigate('/login'); // Redirect to the login page after signup
    } catch (error) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSignup}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
>>>>>>> e0a8400bbf40556771c40fdf703feb79703e8835
}

export default Signup;
