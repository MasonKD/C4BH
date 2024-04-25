import React, { useEffect, useState, useMemo } from 'react';
import { useTable } from 'react-table';
import './useCase.css';

const SmileCDR = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [encounterData, setEncounterData] = useState([]);

  
//-------------------------------Patient column setup
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

  //-------------------------------Encounter column setup

  const encounterColumns = useMemo(() => [
    {
      Header: 'Patient ID',
      accessor: 'patientId', 
    },
    {
      Header: 'Location',
      accessor: 'location',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
    {
      Header: 'Reason Code',
      accessor: 'reasonCode', 
    },
    {
      Header: 'Class Display',
    accessor: 'classDisplay', 
    },
    {
      Header: 'Special Arrangement',
      accessor: 'specialArrangement', 
    },
    {
      Header: 'Period',
      accessor: 'period',
    },
    
  ], []);

//------------------------------------------------------fetch request to get all patient specific data from CDR

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
        console.log(parsedData);

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

        await fetchEncounterData();

      } catch (error) {
        console.error('Failed to fetch data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };


    //------------------------------------------------------fetch request to get all encounter data from CDR

    //http://127.0.0.1:3001/encounter-query
    //https://sbx.connectingforbetterhealth.com/api/encounter-query
    const fetchEncounterData = async () => {
      try {
        const encounterResponse = await fetch('https://sbx.connectingforbetterhealth.com/api/encounter-query');
        if (!encounterResponse.ok) {
          throw new Error(`HTTP status ${encounterResponse.status}`);
        }
        const result = await encounterResponse.json();
        const encounterData = JSON.parse(result.data);
        
        console.log('Encounter data:', encounterData);
        
        if (encounterData && encounterData.entry && Array.isArray(encounterData.entry)) {
          const formattedEncounterData = encounterData.entry.map(entry => {
             
            const accountResource = entry.resource.contained?.find(r => r.resourceType === 'Account');
            
            const patientReference = accountResource?.subject?.[0]?.reference || 'None found';
            
            const locationResource = entry.resource.contained.find(contained => contained.resourceType === 'Location');
            const locationDisplay = locationResource?.type?.map(type => {
              return type.coding?.map(coding => coding.display).join(', ');
            }).join(', ') || 'No Location Display';

            const status = entry.resource.status || 'No Status';

            const periodStart = entry.resource.period?.start || 'No Start Date';
            const periodEnd = entry.resource.period?.end ? ` to ${entry.resource.period.end}` : '';
            const period = `${periodStart}${periodEnd}`;

            const reasonCodeText = entry.resource.reasonCode && entry.resource.reasonCode.length > 0
            ? entry.resource.reasonCode[0].text
            : 'No Reason code';

            const classDisplayText = entry.resource.class && entry.resource.class.display
            ? entry.resource.class.display
            : 'No Class Display';

            const specialArrangementText = entry.resource.hospitalization?.specialArrangement?.[0]?.text || 'No Special Arrangement';
        
            return {
              patientId: patientReference,
              location: locationDisplay,
              status: status,
              period: period,
              reasonCode: reasonCodeText,
              classDisplay: classDisplayText,
              specialArrangement: specialArrangementText,
            };
          });
          setEncounterData(formattedEncounterData);
        } else {
          console.error('No entries found in the encounter data:', encounterData);
          setEncounterData([]);
        }
      } catch (error) {
        console.error('Failed to fetch encounter data:', error);
        setEncounterData([]);
      }
    };
    

fetchData();
  }, []);


  //-----------------------Patient data table setup
  const tableInstance = useTable({ columns, data });


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  //-----------------------Encounter  data table setup
  const encounterTableInstance = useTable({
    columns: encounterColumns,
    data: encounterData 
  });
  
  
  const {
    getTableProps: getEncounterTableProps,
    getTableBodyProps: getEncounterTableBodyProps,
    headerGroups: encounterHeaderGroups,
    rows: encounterRows,
    prepareRow: prepareEncounterRow,
  } = encounterTableInstance;


//----------------------------------------------HTML
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
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h1>Encounter Data</h1>
            <table {...getEncounterTableProps()} className="table">
              <thead>
                {encounterHeaderGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getEncounterTableBodyProps()}>
                {encounterRows.map(row => {
                  prepareEncounterRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => (
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


