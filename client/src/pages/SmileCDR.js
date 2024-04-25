import React, { useEffect, useState, useMemo } from 'react';
import { useTable } from 'react-table';

const SmileCDR = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const columns = useMemo(() => [
    {
      Header: 'Patient ID',
      accessor: 'id',
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Birth Date',
      accessor: 'birthDate',
    },
    {
      Header: 'Gender',
      accessor: 'gender',
    },
    {
      Header: 'Address',
      accessor: 'address',
    },
    {
      Header: 'Phone Number',
      accessor: 'phone',
    },
    //{
      //Header: 'PCP',
      //accessor: 'pcp',
    //},
    {
      Header: 'Practitioner',
      accessor: 'practitioner',
    },

  ], []);

  //http://127.0.0.1:3001/smile-query
  //https://sbx.connectingforbetterhealth.com/api/smile-query
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetch('https://sbx.connectingforbetterhealth.com/api/smile-query');
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        const json = await response.json();
        const parsedData = JSON.parse(json.data);

        const formattedData = parsedData.entry.map(entry => {
          const patientData = {
            id: entry.resource.id,
            address: entry.resource.address && entry.resource.address.length > 0
              ? `${entry.resource.address[0].line}, ${entry.resource.address[0].city}, ${entry.resource.address[0].state}, ${entry.resource.address[0].postalCode}`
              : 'No address provided',
            phone: entry.resource.telecom && entry.resource.telecom.find(t => t.system === 'phone' || t.system === 'other')
              ? entry.resource.telecom.find(t => t.system === 'phone' || t.system === 'other').value
              : 'No phone provided',
            name: entry.resource.name && entry.resource.name.length > 0
              ? `${entry.resource.name[0].family}, ${entry.resource.name[0].given.join(' ')}`
              : 'No name provided',
            gender: entry.resource.gender || 'No gender provided',
            birthDate: entry.resource.birthDate || 'No birthdate provided',
            practitioner: entry.resource.contained && entry.resource.contained.length > 0
              ? entry.resource.contained.map(pract => `${pract.name[0].family}, ${pract.name[0].given.join(' ')}`).join('; ')
              : 'No practitioner listed',
            
          };
          return patientData;
        });

        setData(formattedData);
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

  return (
    <div className='main-container'>
      <main>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div>
            <h1>Clinical Data Repository (Smile)</h1>
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

