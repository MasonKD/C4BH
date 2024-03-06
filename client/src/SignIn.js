// SignIn.js
import React, { useState } from 'react';
import './Auth.css'; // Assuming you have an Auth.css file for styles

const SignIn = ({ onSignIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Call a method prop when the sign in is successful
    onSignIn(username, password);
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="auth-input"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="auth-input"
      />
      <button onClick={handleSignIn} className="auth-button">Login</button>
    </div>
  );
};

export default SignIn;
