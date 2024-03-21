import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './Networking.css';
import logoImage from './images/C4BHLogo.png';
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

  const cityOptions = useMemo(() => {
    const uniqueCities = [...new Set(data.map(item => item.City))];
    return uniqueCities
      .map(city => ({ value: city, label: city }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  const handleCityChange = selectedOptions => {
    setSelectedCities(selectedOptions || []);
  };

  const uniqueParticipants = useMemo(() => {
    let participants = [];
    data.forEach(item => {
      if (!participants.some(participant => participant.Participant_Name === item.Participant_Name)) {
        participants.push({
          Participant_Name: item.Participant_Name,
          Type: item.Type !== 'NULL' ? item.Type : '',
          ID: item.Participant_ID !== 'NULL' ? item.Participant_ID : '',
          Request_for_Information: item.Request_for_Information !== 'NULL' ? item.Request_for_Information : '',
          Information_Delivery: item.Information_Delivery !== 'NULL' ? item.Information_Delivery : '',
          Requests_for_Notification_of_ADT_Events: item.Requests_for_Notification_of_ADT_Events !== 'NULL' ? item.Requests_for_Notification_of_ADT_Events : '',
          City: item.City !== 'NULL' ? item.City : ''
        });
      }
    });
    return participants;
  }, [data]);

  const renderMarkers = () => {
    return data
      .filter(item => selectedCities.length === 0 || selectedCities.some(city => city.value === item.City))
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
      <div className="shared-title-container">
        <h2 className="shared-title">Participant Map</h2>
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
        </div>
        <MapContainer center={[39.572289, -98.036979]} zoom={4} scrollWheelZoom={false} className="leaflet-container">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {renderMarkers()}
        </MapContainer>
      </div>
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
  );
};

export default Networking;

