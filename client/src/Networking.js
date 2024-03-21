import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './Networking.css';
import logoImage from './images/C4BHLogo.png';
import interImage from './images/network_inter.png';
import DSAImage from './images/network_DSA.png';
import SankeyChart from './SankeyChart';
import leafPin from 'leaflet/dist/images/marker-icon.png';
import data from './data.json';
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


  const cityOptions = useMemo(() => {
    const uniqueCities = [...new Set(data.map(item => item.City))];
    return uniqueCities
      .map(city => ({ value: city, label: city }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  const typeOptions = useMemo(() => {
    const uniqueTypes = [...new Set(data.map(item => item.Type))];
    return uniqueTypes
      .map(type => ({ value: type, label: type }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, []);



  const handleCityChange = selectedOptions => {
    setSelectedCities(selectedOptions || []);
  };

  const handleTypeChange = selectedOptions => {
    setSelectedTypes(selectedOptions || []);
  };


  const uniqueParticipants = useMemo(() => {
    let participants = [];
    data.forEach(item => {
      if (!participants.some(participant => participant.Participant_Name === item.Participant_Name)) {
        participants.push({
          Participant_Name: item.Participant_Name,
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
  }, [data]);

  const renderMarkers = () => {
    return data
    .filter(item => 
      (selectedCities.length === 0 || selectedCities.some(city => city.value === item.City)) &&
      (selectedTypes.length === 0 || selectedTypes.some(type => type.value === item.Type))
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
          User Participant: Provider A
          <button className="signout-button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </header>
      <div className='main'>
        <div className='section'>
          <div className='container' id='one-one'>
            <div className="shared-title-container">
                <h2 className="shared-title">Participants</h2>
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

        <div className='section'>
          <div className='container' id='one'>
          <div className="shared-title-container">
              <h2 className="shared-title">Network View</h2>
            </div>
            <div className="content-container">
              <SankeyChart />
          </div>
        </div>
        </div>

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


      </div>

    </div>
  );
};

export default Networking;

