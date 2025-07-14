import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignupClick = async () => {
    setErrorMessage('');
    setSuccessMessage('');

    // Validate username: Must end with @gmail.com 
    if (!username.endsWith('@gmail.com')) {
        setErrorMessage('Your username must end in @gmail.com.');
        return;
    }

    // Validate password: Must be 10 characters long and only contain letters and numbers
    const passwordRegex = /^[a-zA-Z0-9]{10,}$/;
    if (!passwordRegex.test(password)) {
        setErrorMessage('Your password must be 10 characters long and contain only letters and numbers.');
        return;
    }

    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Account created successfully! Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="blank-page">
      <Header />
      <h1>Sign Up</h1>
      <p>Your username should end in @gmail.com and your password must be 10 characters long and only contain letters and numbers.</p>

      <div>
        <input
          type="text"
          placeholder="Enter @gmail.com username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignupClick}>Sign Up</button>

        {errorMessage && <p>{errorMessage}</p>}
        {successMessage && <p>{successMessage}</p>}

        <p>
          Already have an account? <a href="/login">Log in here</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;