import React, { useEffect, useState, useMemo } from 'react';
import { useTable } from 'react-table';

const SmileCDR = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [encounterData, setEncounterData] = useState([]);
  const [practitionerData, setPractitionerData] = useState([]);

//-------------------------------Practitioner column setup
  const practitionerColumns = useMemo(() => [
    {
      Header: 'Practitioner ID',
      accessor: 'id'
    },
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Provider Number',
      accessor: 'providerNumber'
    },
    {
      Header: 'Phone',
      accessor: 'phone'
    },
    {
      Header: 'Address',
      accessor: 'address'
    },
  ], []);
  

  
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
      Header: 'Encounter ID',
      accessor: 'encounterId',
    },
    {
      Header: 'Description',
      accessor: 'reasonCode', 
    },
    {
      Header: 'Dates',
      accessor: 'period',
    },
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
      Header: 'Type',
    accessor: 'classDisplay', 
    },
    {
      Header: 'Special Arrangement',
      accessor: 'specialArrangement', 
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
        // const response = await fetch('https://sbx.connectingforbetterhealth.com/api/smile-query');
        const url = getEnvURL('FETCH_SMILE_DATA');
        const response = await fetch(url);
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
        // const encounterResponse = await fetch('https://sbx.connectingforbetterhealth.com/api/encounter-query');
        const url = getEnvURL('FETCH_ENCOUNTER_DATA');
        const encounterResponse = await fetch(url);
        if (!encounterResponse.ok) {
          throw new Error(`HTTP status ${encounterResponse.status}`);
        }
        const result = await encounterResponse.json();
        const encounterData = JSON.parse(result.data);
        
        console.log('Encounter data:', encounterData);
        
        if (encounterData && encounterData.entry && Array.isArray(encounterData.entry)) {
          const formattedEncounterData = encounterData.entry.map(entry => {
             
            const accountResource = entry.resource.contained?.find(r => r.resourceType === 'Account');
            
            const patientReference = accountResource?.subject?.[0]?.reference.split('/')[1] || 'None found';
            
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

            const encounterId = entry.resource.id || 'No Encounter ID';
        
            return {
              patientId: patientReference,
              location: locationDisplay,
              status: status,
              period: period,
              reasonCode: reasonCodeText,
              classDisplay: classDisplayText,
              specialArrangement: specialArrangementText,
              encounterId: encounterId
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





//------------------------------------------------------fetch request to get all practitioner data from CDR

    //http://127.0.0.1:3001/practitioner-query
    //https://sbx.connectingforbetterhealth.com/api/practitioner-query
    const fetchPractitionerData = async () => {
      try {
        // const practitionerResponse = await fetch('https://sbx.connectingforbetterhealth.com/api/practitioner-query');
        const url = getEnvURL('FETCH_PRACTITIONER_DATA');
        const practitionerResponse = await fetch(url);


        if (!practitionerResponse.ok) {
          throw new Error(`HTTP status ${practitionerResponse.status}`);
        }
        const result = await practitionerResponse.json();
        const practitionerData = JSON.parse(result.data);
    
        console.log('Practitioner data:', practitionerData);
    
        if (practitionerData && practitionerData.entry && Array.isArray(practitionerData.entry)) {
          const formattedPractitionerData = practitionerData.entry.map(entry => {
            const { resource } = entry;
            const practitionerId = resource.id;
            const nameArray = resource.name || [];
            const name = nameArray.map(n => `${n.family}, ${n.given.join(' ')}`).join('; ') || 'No name provided';
            const identifierArray = resource.identifier || [];
            const providerNumber = identifierArray.find(id => id.system === "http://acme.org/clinicians")?.value || 'No provider number';
            const telecomArray = resource.telecom || [];
            const phone = telecomArray.find(tel => tel.system === 'phone' && tel.use === 'work')?.value || 'No work phone';
            const addressArray = resource.address || [];
            const address = addressArray.map(addr => `${addr.line.join(', ')}, ${addr.city}, ${addr.state}, ${addr.postalCode}`).join('; ') || 'No address provided';
          
            return {
              id: practitionerId,
              name: name,
              providerNumber: providerNumber,
              phone: phone,
              address: address
            };
          });
          setPractitionerData(formattedPractitionerData);
        } else {
          console.error('No entries found in the practitioner data:', practitionerData);
          setPractitionerData([]); // Set to empty array if no data found
        }
      } catch (error) {
        console.error('Failed to fetch practitioner data:', error);
        setPractitionerData([]); // Set to empty on error
      }
    };
    
    
    

fetchData();
fetchPractitionerData();
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

  //----------------------Practitioner data table setup

  const practitionerTableInstance = useTable({
    columns: practitionerColumns,
    data: practitionerData
  });
  
  const {
    getTableProps: getPractitionerTableProps,
    getTableBodyProps: getPractitionerTableBodyProps,
    headerGroups: practitionerHeaderGroups,
    rows: practitionerRows,
    prepareRow: preparePractitionerRow,
  } = practitionerTableInstance;
  


//----------------------------------------------HTML
return (
  <div className='main-container main-container-fix'>
    <main>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h1>Clinical Data Repository (Smile)</h1>
          {/* Patient Data Table */}
          <h2>Patient Data</h2>
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
          {/* Encounter Data Table */}
          <h2>Encounter Data</h2>
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
          {/* Practitioner Data Table */}
          <h2>Practitioner Data</h2>
          <table {...getPractitionerTableProps()} className="table">
            <thead>
              {practitionerHeaderGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getPractitionerTableBodyProps()}>
              {practitionerRows.map(row => {
                preparePractitionerRow(row);
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


