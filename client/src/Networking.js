import React, { useState, useMemo, useEffect, useRef } from 'react';
import { createEmbeddingContext } from 'amazon-quicksight-embedding-sdk';
import './Networking.css';
import Notebook from './SankeyChart';
import leafPin from 'leaflet/dist/images/marker-icon.png';
import Dxfdata from './Merged_DSA_SignatoryList_with_Lat_Long_Corrected.json';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Select from 'react-select';


const Networking = () => {

  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedSubTypes, setSelectedSubTypes] = useState([]);
  const dashboardRef = useRef([]);
  const [dashboardId, setDashboardId] = useState('3fe09f48-299a-4830-b204-d0635f55bef3');
  const [embeddedDashboard, setEmbeddedDashboard] = useState(null);
  const [dashboardUrl, setDashboardUrl] = useState(null);
  const [embeddingContext, setEmbeddingContext] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetch("https://h5j9ahkltl.execute-api.us-east-1.amazonaws.com/embed/QuickSiteEmbedResource"
      ).then((response) => response.json()
      ).then((response) => {
        setDashboardUrl(response.EmbedUrl)
      })
    }, 10);
    return () => clearTimeout(timeout);
  }, []);

  const createContext = async () => {
    const context = await createEmbeddingContext();
    setEmbeddingContext(context);
  }

  useEffect(() => {
    if (dashboardUrl) { createContext() }
  }, [dashboardUrl])

  useEffect(() => {
    if (embeddingContext) { embed(); }
  }, [embeddingContext])

  const embed = async () => {

    const options = {
      url: dashboardUrl,
      container: dashboardRef.current,
      height: "1000px",
      width: "1500px",
    };

    const newEmbeddedDashboard = await embeddingContext.embedDashboard(options);
    setEmbeddedDashboard(newEmbeddedDashboard);
  };

  useEffect(() => {
    if (embeddedDashboard) {
      embeddedDashboard.navigateToDashboard(dashboardId, {})
    }
  }, [dashboardId])

  const changeDashboard = async (e) => {
    const dashboardId = e.target.value
    setDashboardId(dashboardId)
  }




  const cityOptions = useMemo(() => {
    const uniqueCities = [...new Set(Dxfdata.map(item => item.City))];
    return uniqueCities
      .map(city => ({ value: city, label: city }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  const typeOptions = useMemo(() => {
    const uniqueTypes = [...new Set(Dxfdata.map(item => item.Type))];
    return uniqueTypes
      .map(type => ({ value: type, label: type }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  const subTypeOptions = useMemo(() => {
    let options;
    // Since `selectedTypes` is an array, check if it has any selected values
    if (selectedTypes.length > 0) {
      const selectedTypeValues = selectedTypes.map(t => t.value); // Get the values of the selected types
      const relevantSubtypes = Dxfdata
        .filter(data => selectedTypeValues.includes(data.Type)) // Filter data for selected types
        .map(data => data.Sub_Type);
      options = [...new Set(relevantSubtypes)]; // Get unique subtypes from the filtered data
    } else {
      options = [...new Set(Dxfdata.map(data => data.Sub_Type))]; // All subtypes if no type is selected
    }
    return options.map(subType => ({ value: subType, label: subType }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [Dxfdata, selectedTypes]);


  const totalSum = useMemo(() => {
    return Dxfdata.reduce((acc, item) => acc + 1, 0);
  }, [Dxfdata]);



  const adtCount = useMemo(() => {
    return Dxfdata.filter(item => item.Requests_for_Notifications_of_ADT_Events !== "NONE SELECTED").length;
  }, [Dxfdata]);



  const queryCount = useMemo(() => {
    return Dxfdata.filter(item => item.Request_for_Information !== "NONE SELECTED").length;
  }, [Dxfdata]);

  const referralCount = useMemo(() => {
    return Dxfdata.filter(item => item.Information_Delivery !== "NONE SELECTED").length;
  }, [Dxfdata]);

  const adtEventsCount = useMemo(() => {
    const counts = Dxfdata.reduce((acc, item) => {
      const eventName = item.Requests_for_Notifications_of_ADT_Events;
      if (eventName !== "NONE SELECTED") {
        acc[eventName] = acc[eventName] ? acc[eventName] + 1 : 1;
      }
      return acc;
    }, {});
    return Object.entries(counts).sort((a, b) => b[1] - a[1]); // Sort by count, descending
  }, [Dxfdata]);

  console.log(adtEventsCount);

  const queryEventsCount = useMemo(() => {
    const counts = Dxfdata.reduce((acc, item) => {
      const eventName = item.Request_for_Information;
      if (eventName !== "NONE SELECTED") {
        acc[eventName] = acc[eventName] ? acc[eventName] + 1 : 1;
      }
      return acc;
    }, {});
    return Object.entries(counts).sort((a, b) => b[1] - a[1]); // Sort by count, descending
  }, [Dxfdata]);

  const referralEventsCount = useMemo(() => {
    const counts = Dxfdata.reduce((acc, item) => {
      const eventName = item.Information_Delivery;
      if (eventName !== "NONE SELECTED") {
        acc[eventName] = acc[eventName] ? acc[eventName] + 1 : 1;
      }
      return acc;
    }, {});
    return Object.entries(counts).sort((a, b) => b[1] - a[1]); // Sort by count, descending
  }, [Dxfdata]);



  const combinedEventCounts = useMemo(() => {
    const initialCounts = adtEventsCount.reduce((acc, [eventName, count]) => {
      acc[eventName] = { qhio: count, query: 0, referral: 0 };
      return acc;
    }, {});

    queryEventsCount.forEach(([eventName, count]) => {
      if (initialCounts[eventName]) {
        initialCounts[eventName].query = count;
      } else {
        initialCounts[eventName] = { qhio: 0, query: count, referral: 0 };
      }
    });

    referralEventsCount.forEach(([eventName, count]) => {
      if (initialCounts[eventName]) {
        initialCounts[eventName].referral = count;
      } else {
        initialCounts[eventName] = { qhio: 0, query: 0, referral: count };
      }
    });

    // Sort by QHIO count, descending
    return Object.entries(initialCounts).sort((a, b) => b[1].qhio - a[1].qhio);
  }, [adtEventsCount, queryEventsCount, referralEventsCount]);

  console.log(combinedEventCounts);



  const EventList = ({ events }) => (
                <table id="table-connections">
                  <tbody>
                  <th>Intermediary</th>
                  <th>Req. for Notifications</th>
                  <th>Req. for Information</th>
                  <th>Information Delivery</th>
                  {events.map(([eventName, counts], index) => (
                    <tr key={index}>
                      <td >{eventName}</td>
                      <td >{counts.qhio}</td>
                      <td >{counts.query}</td>
                      <td >{counts.referral}</td>
                    </tr>
                    ))}
                  </tbody>
                </table>
  );





  const handleCityChange = selectedOptions => {
    setSelectedCities(selectedOptions || []);
  };

  const handleTypeChange = selectedOptions => {
    setSelectedTypes(selectedOptions || []); // Ensure selectedTypes is always an array
  };



  const handleSubTypeChange = selectedOptions => {
    setSelectedSubTypes(selectedOptions || []);
  };

  const dataByType = useMemo(() => {
    return Dxfdata.reduce((acc, item) => {
      if (acc[item.Type]) {
        acc[item.Type].push(item.Participant_Name_PrimaryOrganization);
      } else {
        acc[item.Type] = [item.Participant_Name_PrimaryOrganization];
      }
      return acc;
    }, {});
  }, [Dxfdata]);




  const uniqueParticipants = useMemo(() => {
    let participants = [];
    Dxfdata.forEach(item => {
      if (!participants.some(participant => participant.Participant_Name === item.Participant_Name)) {
        participants.push({
          Participant_Name: item.Participant_Name_PrimaryOrganization,
          Type: item.Type !== 'NULL' ? item.Type : "",
          ID: item.Participant_ID !== 'NULL' ? item.Participant_ID : "",
          Request_for_Information: item.Request_for_Information !== 'NULL' ? item.Request_for_Information : "",
          Information_Delivery: item.Information_Delivery !== 'NULL' ? item.Information_Delivery : "",
          Requests_for_Notification_of_ADT_Events: item.Requests_for_Notification_of_ADT_Events !== 'NULL' ? item.Requests_for_Notification_of_ADT_Events : "",
          City: item.City !== 'NULL' ? item.City : ""
        });
      }
    });
    return participants;
  }, [Dxfdata]);

  const renderMarkers = () => {
    // Ensure Dxfdata is not null or undefined
    if (!Dxfdata) {
      return null;
    }

    return Dxfdata
      .filter(item =>
        (selectedCities.length === 0 || selectedCities.some(city => city.value === item.City)) &&
        (selectedTypes.length === 0 || selectedTypes.some(type => type.value === item.Type)) &&
        (selectedSubTypes.length === 0 || selectedSubTypes.some(subType => subType.value === item.Sub_Type))
      )
      .map((item, index) => {
        const parts = item.GeoPoint.split(', ');
        if (parts.length === 2) {
          const latitude = parseFloat(parts[0]);
          const longitude = parseFloat(parts[1]);
          if (!isNaN(latitude) && !isNaN(longitude)) {
            return (
              <Marker
                key={index}
                position={[latitude, longitude]}
                icon={L.icon({
                  iconUrl: leafPin,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                  shadowSize: [41, 41],
                })}
              >
                <Popup>
                  Name: {item.Participant_Name}<br />
                  Type: {item.Type}<br />
                  Sub-Type: {item.Sub_Type}<br />
                  ID: {item.Participant_ID}<br />
                  Request for Information: {item.Request_for_Information}<br />
                  Information Delivery: {item.Information_Delivery}<br />
                  Requests for Notification of ADT Events: {item.Requests_for_Notification_of_ADT_Events}<br />
                  City: {item.City}
                </Popup>
              </Marker>
            );
          }
        }
        return null;
      })
      .filter(marker => marker !== null); // Ensures that only valid markers are rendered
  };



  return (
    <div className="main-container">
      <main>

        {/* --------------------------------------------------------------------Participant Tables */}
        <div className='section' id="section-participants">
          <div>
            <h2 className="shared-title">Participants</h2>

          </div>

          <div className='container' id='one-one'>
            <div className="table-holder">

            <div className="table-title">
                    DSA Signatories: {totalSum}
            </div>
                    <table id="table-signatories">
                      <tbody>
                      <th>Type</th>
                      <th>Count</th>

                      {Object.entries(dataByType).map(([type, organizations], index) => (
                      <tr key={index}>
                        <td >{type}</td>
                        <td >{organizations.length}</td>
                      </tr>
                      ))}
                      </tbody>
                    </table>

                </div>


                <div className='table-holder'>
                  <div className="table-title">
                      Connections
                  </div>
                  <EventList events={combinedEventCounts} />
                </div>


              </div>
          </div>






  {/* --------------------------------------------------------------------Geographic View */}

        <div className='section' id="section-geo">
        <div className="shared-title-container">
              <h2 className="shared-title">Geographic View</h2>
            </div>
            <div className='container'>

            <MapContainer center={[37.505915, -120.505943]} zoom={6} scrollWheelZoom={false} className="leaflet-container">
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {renderMarkers()}
              </MapContainer>
              <div className="city-selector">
                <div className="table-title">
                      Filters
                </div>
                <div className="selector-wrapper">
                  <div>Cities</div>
                <Select
                  isMulti
                  options={cityOptions}
                  className="city-select"
                  placeholder="Select Cities"
                  onChange={handleCityChange}
                  value={selectedCities}
                />
                </div>
                <div className="selector-wrapper">
                <div>Types</div>
                  <Select
                    isMulti
                    options={typeOptions}
                    className="type-select"
                    placeholder="Select Types"
                    onChange={handleTypeChange}
                    value={selectedTypes}
                />
                </div>
                <div className="selector-wrapper">
                <div>Sub-Types</div>
                <Select
                  isMulti
                  options={subTypeOptions}
                  className="sub-type-select"
                  placeholder="Select Sub-Types"
                  onChange={handleSubTypeChange}
                  value={selectedSubTypes}
                />
                </div>

              </div>

            </div>


        </div>


  {/* --------------------------------------------------------------------Sankey  */}
        <div className='section' id="section-sankey">
        <div className="shared-title-container">
              <h2 className="shared-title">Network View</h2>
            </div>
          <div className='container' id='one'>

            <div className="sankey-container">
            <Notebook />
          </div>
        </div>
        </div>
  {/* --------------------------------------------------------------------quicksite */}



      <div className='section' id='network-quicksight'>
      <div className="shared-title-container">
              <h2 className="shared-title">QuickSite Network View</h2>
    </div>
    <div className='container'>
    <select  id='dashboard' value={dashboardId} onChange={changeDashboard}>
          <option value="YOUR_DASHBOARD1_ID">DxF Participant Map</option>
      </select>
    </div>

        <div className='container' id="quicksight-holder" ref={dashboardRef} />


      </div>



  {/* --------------------------------------------------------------------Hidden Table */}
        <div className='section' id='hide-me'>

          <div className="shared-title-container">
            <h2 className="shared-title">Participant Table</h2>
          </div>
          <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Participant</th>
                <th>Type</th>
                <th>ID</th>
                <th>Request for Information</th>
                <th>Information Delivery</th>
                <th>Requests for Notification of ADT Events</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {uniqueParticipants.map((participant, index) => (
                <tr key={index}>
                  <td>{participant.Participant_Name}</td>
                  <td>{participant.Type}</td>
                  <td>{participant.ID}</td>
                  <td>{participant.Request_for_Information}</td>
                  <td>{participant.Information_Delivery}</td>
                  <td>{participant.Requests_for_Notification_of_ADT_Events}</td>
                  <td>{participant.City}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>



      </main>

    </div>
  );
};

export default Networking;

