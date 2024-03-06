import React, { useState } from 'react';
import { Auth } from 'aws-amplify'; // Ensure you import Auth from aws-amplify
import './Auth.css'; // Reuse the same CSS file for styling

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [givenName, setGivenName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [organization, setOrganization] = useState('');

  const handleSignUp = async () => {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,           // mandatory
          given_name: givenName,   // mandatory
          family_name: familyName, // mandatory
          'custom:Organization': organization // optional, only if you've configured this custom attribute in Cognito
        }
      });
      console.log(user);
      // You'll need additional logic to handle the confirmation code verification step.
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="auth-input"
      />
      <input
        type="text"
        value={givenName}
        onChange={(e) => setGivenName(e.target.value)}
        placeholder="Given name"
        className="auth-input"
      />
      <input
        type="text"
        value={familyName}
        onChange={(e) => setFamilyName(e.target.value)}
        placeholder="Family name"
        className="auth-input"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="auth-input"
      />
      <input
        type="text"
        value={organization}
        onChange={(e) => setOrganization(e.target.value)}
        placeholder="Organization (optional)"
        className="auth-input"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="auth-input"
      />
      <button onClick={handleSignUp} className="auth-button">Register</button>
    </div>
  );
};

export default SignUp;
