import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {useTable} from 'react-table';
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

  
  

  const columns = React.useMemo(
    () => [
      {
        Header: 'Message ID',
        accessor: 'id',
      },
      {
        Header: 'Content',
        accessor: 'content',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Received Date',
        accessor: 'receivedDate',

      },
      {
        Header: 'Type',
        accessor: 'type'
      }
    ],
    []
  );

  // Use logs as memoized data for your table
  const data = React.useMemo(() => logs, [logs]);

  // Initialize table instance with the useTable hook
  const tableInstance = useTable({ columns, data });

  // Destructure the necessary properties and methods from tableInstance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

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
      const status = xmlDoc.getElementsByTagName("status")[0].childNodes[0].nodeValue;
      const receivedTimeElement = xmlDoc.getElementsByTagName("receivedDate")[0].getElementsByTagName("time")[0];
      const receivedDate = receivedTimeElement ? new Date(parseInt(receivedTimeElement.textContent)).toUTCString() : null;
      

      
      
      
  
      
      const logEntry = { id: messageId, content: content, status: status, receivedDate: receivedDate, type: 'ADT-A01' };
      
      setLogs([logEntry]);
      //setLogs(prevLogs => [...prevLogs, logEntry]); // Update the state
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
        {/* Render the table with react-table */}
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Mirth;



