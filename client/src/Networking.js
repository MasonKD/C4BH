import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './Networking.css';
import logoImage from './images/C4BHLogo.png';
import interImage from './images/network_inter.png';
import DSAImage from './images/network_DSA.png';
import SankeyChart from './SankeyChart';
import leafPin from 'leaflet/dist/images/marker-icon.png';
import Dxfdata from './Merged_DSA_SignatoryList_with_Lat_Long_Corrected.json';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Select from 'react-select';

const Logo = () => (
  <div className="logo">
    <img src={logoImage} alt="Connecting for Better Health" />
  </div>
);

const Networking = () => {
  const navigate = useNavigate();
  const handleSignOut = () => navigate('/');
  
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedSubTypes, setSelectedSubTypes] = useState([]);

  


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
    const uniqueSubTypes = [...new Set(Dxfdata.map(item => item.Sub_Type))];
    return uniqueSubTypes
      .map(subType => ({ value: subType, label: subType }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, []);

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
    
  


  const handleCityChange = selectedOptions => {
    setSelectedCities(selectedOptions || []);
  };

  const handleTypeChange = selectedOptions => {
    setSelectedTypes(selectedOptions || []);
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
      .filter(marker => marker !== null);
  };
  

  return (
    <div className="main-container">
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
        <div className='section'>
          <div className='container' id='one-one'>
            <div className="shared-title-container">
              <h2 className="shared-title">Participants</h2>
              <div className="type-table">
                    <div className="type-row">
                    DSA Signatories ({totalSum})
                    </div>
                    {Object.entries(dataByType).map(([type, organizations]) => (
                    <div key={type} className="type-row">
                    {type} ({organizations.length})
                    </div>
                    ))}
                </div>


      <div className="intermediaries-chart">
        <h2>Intermediaries Chart</h2>
        <div className="chart-columns">
          <div className="chart-column">
            <h3>ADT</h3>
            <p>{adtCount}</p>
          </div>
          {/* Placeholder for the second column */}
          <div className="chart-column">
          <h3>Query</h3>
            <p>{queryCount}</p>
          </div>
          {/* Placeholder for the third column */}
          <div className="chart-column">
          <h3>Referral</h3>
            <p>{referralCount}</p>
          </div>

          <div className="chart-column">
            <h3>QHIOs</h3>
            <ul>
            {adtEventsCount.map(([eventName, count], index) => (
              <li key={index}>{eventName}: {count}</li>
            ))}
          </ul>
        </div>

        <div className="chart-column">
            <h3>Query</h3>
            <ul>
            {queryEventsCount.map(([eventName, count], index) => (
              <li key={index}>{eventName}: {count}</li>
            ))}
          </ul>
        </div>

        <div className="chart-column">
            <h3>Referral</h3>
            <ul>
            {referralEventsCount.map(([eventName, count], index) => (
              <li key={index}>{eventName}: {count}</li>
            ))}
          </ul>
        </div>


        </div>
      </div>


            </div>
            <div className='flex-col'>
            <div id='test'>
                  <img src={DSAImage} alt="Table of Sandbox Intermediaries" />
              </div>
              <div id='test'>
                  <img src={interImage} alt="Table of Sandbox Intermediaries" />
              </div>

            </div>

              
          </div>
          <div className='container' id='one-two'>
            <div className="shared-title-container">
              <h2 className="shared-title">Geographic View</h2>
            </div>
            <div className="content-container">
              <div className="city-selector">
                <Select
                  isMulti
                  options={cityOptions}
                  className="city-select"
                  placeholder="Select Cities"
                  onChange={handleCityChange}
                  value={selectedCities}
                />
                <Select
                  isMulti
                  options={typeOptions}
                  className="type-select"
                  placeholder="Select Types"
                  onChange={handleTypeChange}
                  value={selectedTypes}
               />
               <Select
                  isMulti
                  options={subTypeOptions}
                  className="sub-type-select"
                  placeholder="Select Sub-Types"
                  onChange={handleSubTypeChange}
                  value={selectedSubTypes}
                />
              </div>
              <MapContainer center={[37.505915, -120.505943]} zoom={6} scrollWheelZoom={false} className="leaflet-container">
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {renderMarkers()}
              </MapContainer>
            </div>
          </div>

        </div>

        {/*<div className='section'>
          <div className='container' id='one'>
          <div className="shared-title-container">
              <h2 className="shared-title">Network View</h2>
            </div>
            <div className="content-container">
              <SankeyChart />
          </div>
        </div>
        </div>
            */}

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
        {/*<iframe
            src="https://sbdp8fgnodhswm4.us.qlikcloud.com/single/?appid=2ca11e14-dfcd-4038-b38b-e71947ac3755&sheet=hPzsuY&theme=horizon&opt=ctxmenu,currsel"
            title="Sankey Chart"
            style={{ border: 'none', width: '100%', height: '100%' }}
        >
              </iframe>*/}

      </main>

    </div>
  );
};

export default Networking;

