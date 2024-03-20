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
    // Replace with the actual URL of your Mirth Connect instance and the correct channel ID
    const apiEndpoint = 'https://sbx.connectingforbetterhealth.com:8443/api/channels/4770b74-869b-4607-8877-00f2589e294f/messages';
    const queryParams = '?status=RECEIVED&limit=20';
    
    // Directly use the admin username and password (this is insecure)
    const username = 'admin';
    const password = 'C4BH126!';
    const encodedCredentials = btoa(`${username}:${password}`);
  
    const headers = {
      'Accept': 'application/json',
      'Authorization': `Basic ${encodedCredentials}`,
    };
  
    fetch(apiEndpoint + queryParams, {
      method: 'GET',
      headers: headers,
      mode: 'cors' // This may not be necessary if your Mirth Connect instance is not set up to allow CORS
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      setLogs(data.messages);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [navigate]); // Added navigate to the dependency array if its state changes and the effect needs to rerun

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

