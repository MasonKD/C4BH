import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTable } from 'react-table';
import './Mirth.css';


const Mirth = () => {
  const [logs, setLogs] = useState([]);
  const [visibleRow, setVisibleRow] = useState(null); 
  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        Header: 'Message ID',
        accessor: 'id',
      },
      {
        Header: 'Received Date',
        accessor: 'receivedDate',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Status',
        accessor: 'status',
      }
      //{
        //Header: 'Content',
        //accessor: 'content',
        
      //}
    ],
    []
  );

  const data = useMemo(() => logs, [logs]);
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
//dev URL: http://127.0.0.1:3001/mirth-logs, prod: https://sbx.connectingforbetterhealth.com/api/mirth-logs
useEffect(() => {
  const apiEndpoint = 'http://127.0.0.1:3001/mirth-logs';
  fetch(apiEndpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(text => {
      const jsonData = JSON.parse(text);
      const parsedData = JSON.parse(jsonData.data);
      const messages = parsedData.list.message.map(msg => {
        const { messageId, receivedDate, connectorMessages } = msg;
        const receivedDateString = receivedDate && new Date(receivedDate.time).toUTCString();
        const connectorMessage = connectorMessages.entry.connectorMessage;
        const status = connectorMessage.status;
        const content = connectorMessage.raw.content;
        const name = extractNameFromHL7(content);

        return {
          id: messageId,
          receivedDate: receivedDateString,
          status: status,
          content: content,
          type: 'ADT-A01', 
          name: name
        };
      });
      setLogs(messages);
    })
    .catch(error => {
      console.error('Error fetching or parsing data:', error);
    });
}, [navigate]);

const extractNameFromHL7 = (content) => {
  // HL7 PID segment starts with "PID|", followed by fields separated by "|". 
  // Name information is in the format "Last^First^Middle^Suffix".
  // Using non-greedy match .*? to skip to the correct segment.
  const pidSegmentRegex = /PID\|.*?\|.*?\|.*?\|([^|^~\r\n]+)\^([^|^~\r\n]+)(?:\^([^|^~\r\n]+))?/;
  const match = content.match(pidSegmentRegex);
  if (match && match[1] && match[2]) {
    const lastName = match[1].trim();
    const firstName = match[2].trim();
    const middleName = match[3] ? match[3].trim() : '';
    return `${firstName} ${middleName} ${lastName}`.trim(); 
  }
  return 'Unknown';
};



  const toggleRowVisibility = (rowIndex) => {
    setVisibleRow(visibleRow === rowIndex ? null : rowIndex);
  };


  return (
    <div className='main-container'>
      <main>
        <h1>Mirth Connect Logs</h1>
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
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <React.Fragment key={index}>
                  <tr {...row.getRowProps()} onClick={() => toggleRowVisibility(index)}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.column.id === 'content' ? 'Click to view' : cell.render('Cell')}</td>;
                    })}
                  </tr>
                  {visibleRow === index && (
                    <tr>
                      <td colSpan={row.cells.length}>
                        {row.original.content}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Mirth;