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
    const apiEndpoint = 'https://sbx.connectingforbetterhealth.com/api/mirth-logs';
    fetch(apiEndpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const innerData = JSON.parse(data.data);
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
              type: 'ADT-A01',
              name: 'Estella'
            };
            return logEntry;
          } else {
            console.error('Unexpected data structure:', entry);
            return null;
          }
        }).filter(Boolean);
        setLogs(messages);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [navigate]);

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




