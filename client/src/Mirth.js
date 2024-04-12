import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {useTable} from 'react-table';
import './Mirth.css';
import logoImage from './images/C4BHLogo.png';


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

  // Use logs as memoized data for the table
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
    const apiEndpoint = 'https://sbx.connectingforbetterhealth.com/api/mirth-logs';
  
    fetch(apiEndpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        return response.json(); // parse the JSON response first
      })
      .then(data => {
        const innerData = JSON.parse(data.data); // parse the escaped JSON string
        const messages = innerData.message.connectorMessages.entry.map(entry => {
          const connectorMessage = entry.connectorMessage;
          if (connectorMessage && connectorMessage.raw) {
            const { messageId, status, receivedDate, raw } = connectorMessage;
            const receivedDateString = receivedDate && new Date(receivedDate.time).toUTCString();
            const logEntry = {
              id: messageId,
              content: raw.content, 
              status: status,
              receivedDate: receivedDateString,
              type: 'ADT-A01' 
            };
            return logEntry;
          } else {
            // Handle the case where the expected structure is not found
            console.error('Unexpected data structure:', entry);
            return null;
          }
        }).filter(Boolean); // This will remove any null entries from the resulting array
        
        setLogs(messages); // Set the logs state with the new data
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
          <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        </div>
        
      </header>
      <main>
        <h1>Mirth Connect Logs</h1>
        
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



