import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Mirth.css';
import logoImage from './images/C4BHLogo.png';
import mirthImage from './images/Mirth.png';


const Logo = () => (
  <div className="logo">
    <img src={logoImage} alt="Connecting for Better Health" />
  </div>
);

const Mirth = () => {
  const [logs, setLogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  const apiEndpoint = 'https://18.205.165.171:8443/api/channels/4cc843b2-84e0-4ee0-805a-65052a37d0d/messages';
  const queryParams = '?status=RECEIVED&limit=20';
  const headers = {
    'Accept': 'application/json',
    'X-Requested-With': 'OpenAPI' // This header is usually used to identify Ajax requests. Make sure this is needed by your API.
    // If you have a bearer token, you would also include it here:
    // 'Authorization': `Bearer your_access_token`
  };

  fetch(apiEndpoint + queryParams, {
    method: 'GET', // This is the default method, but it's here for clarity.
    headers: headers
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }
    return response.json();
  })
  .then(data => setLogs(data.messages)) // Assuming the data structure is similar to that in your screenshot.
  .catch(error => console.error('Error fetching data:', error));
}, []);


  const handleSignOut = () => {
    navigate('/'); // Redirects to the landing page
  };

  return (
    <div className="main-container">
      <header className="header">
        <Logo />
        <div className="user-participant">
          User Participant: Provider A
          <button className="signout-button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </header>
      <h1>Mirth Connect Logs</h1>
      <img src={mirthImage} alt="Mirth" className="mirth-image" />
      <ul>
        {logs.map(log => (
          <li key={log.id}>Message ID: {log.id}, Content: {log.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Mirth;
