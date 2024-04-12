import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTable } from 'react-table';
import './useCase.css';
import logoImage from './images/C4BHLogo.png';

const Logo = () => (
  <div className="logo">
    <img src={logoImage} alt="Connecting for Better Health" />
  </div>
);

const SmileCDR = () => {
  
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const columns = useMemo(() => [
    {
      Header: 'Patient ID',
      accessor: 'id',
    },
    {
      Header: 'Address',
      accessor: 'address',
    },
    {
      Header: 'Phone Number',
      accessor: 'phone',
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Gender',
      accessor: 'gender',
    },
    {
      Header: 'Birth Date',
      accessor: 'birthDate',
    },
    {
      Header: 'Practitioner',
      accessor: 'practitioner',
    },
    // Add other columns as needed
  ], []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://sbx.connectingforbetterhealth.com/api/smile-query');
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        const json = await response.json();
        // Assuming the response.data is the JSON string
        const parsedData = JSON.parse(json.data);
  
        // Locate Estella's data
        const estella = parsedData.entry.find(entry =>
          entry.resource.name.some(nameRecord => 
            nameRecord.given.includes('ESTELLA') && nameRecord.family === 'RUIZ'
          )
        );
  
        if (estella) {
          // Extract the data you want to show in the table
          const formattedData = {
            id: estella.resource.id,
            address: `${estella.resource.address[0].line[0]}, ${estella.resource.address[0].city}, ${estella.resource.address[0].state}, ${estella.resource.address[0].postalCode}, ${estella.resource.address[0].country}`,
            phone: estella.resource.telecom.find(t => t.system === 'phone')?.value || estella.resource.telecom.find(t => t.system === 'other')?.value || 'N/A',
            name: `${estella.resource.name.find(n => n.use === 'official')?.family || ''}, ${estella.resource.name.find(n => n.use === 'official')?.given.join(' ') || ''}`,
            gender: estella.resource.gender,
            birthDate: estella.resource.birthDate,
            practitioner: estella.resource.contained?.map(pract => pract.name[0].given.join(' ') + ' ' + pract.name[0].family).join('; ') || 'N/A',
          };
          setData([formattedData]);
        } else {
          setError('No patient named Estella found');
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  

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
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div>
            <h1>Smile CDR Data</h1>
            <table {...getTableProps()} className="table">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
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
                      {row.cells.map((cell) => (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
  
};


export default SmileCDR;

