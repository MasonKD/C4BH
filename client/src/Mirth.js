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
    const apiEndpoint = 'https://52.7.12.154:8443/api/channels/f6d4fc04-babd-41b4-a087-9bfce4affce9/messages';
    const queryParams = '/1';
    const username = 'admin'; 
    const password = 'C4BH126!'; 
    const encodedCredentials = btoa(`${username}:${password}`);
    
    fetch(`${apiEndpoint}${queryParams}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/xml', // Set the header to accept XML
        'Authorization': `Basic ${encodedCredentials}`,
        
      },
      mode: 'cors' 
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }
      return response.text(); // Assuming the response is XML and not JSON
    })
    .then(str => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(str, "text/xml");
  
      // Extract data from the XML
      const messageId = xmlDoc.getElementsByTagName("messageId")[0].childNodes[0].nodeValue;
      const content = xmlDoc.getElementsByTagName("content")[0].childNodes[0].nodeValue;
  
      // Assuming you want to display these
      const logEntry = { id: messageId, content: content };
      
      setLogs([logEntry]); // Update the state
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [navigate]);
  

  const handleSignOut = () => {
    navigate('/');
  };

  return (
    <div className='main-container'>
      <header className="header">
        <Logo />
        <div className="user-participant">
          User: C4BH Admin
          <button className="signout-button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </header>
      <main>
        <h1>Mirth Connect Logs</h1>
        <img src={mirthImage} alt="Mirth" className="mirth-image" />
        <ul>
          {logs.map(log => (
            <li key={log.id}>Message ID: {log.id}, Content: {log.content}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Mirth;



