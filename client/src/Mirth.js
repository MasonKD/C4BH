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
    
    const apiEndpoint = 'https://52.7.12.154:8443/api/channels/477b07b4-869b-4607-8a77-00fa589ea94f/messages';
    const queryParams = '?status=RECEIVED&limit=20';
    
    
    const username = 'admin';
    const password = 'C4BH126!';
    const encodedCredentials = btoa(`${username}:${password}`);
  
    const headers = {
      'Accept': 'application/json',
      'Authorization': `Basic ${encodedCredentials}`,
      'X-Requested-With': 'OpenAPI'
    };
  
    fetch(apiEndpoint + queryParams, {
      method: 'GET',
      headers: headers,
      mode: 'cors' 
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

