import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Networking.css';
import logoImage from './images/C4BHLogo.png';
import leafPin from 'leaflet/dist/images/marker-icon.png';
import data from './data.json'; 
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

const Logo = () => (
  <div className="logo">
    <img src={logoImage} alt="Connecting for Better Health" />
  </div>
);



const Networking = () => {
    const navigate = useNavigate();
    const handleSignOut = () => {
        navigate('/'); // Redirects to the landing page
      };
  const [selectedCity, setSelectedCity] = useState('all');

  
  const cities = useMemo(() => {
    const uniqueCities = ['all', ...new Set(data.map(item => item.City))];
    return uniqueCities.filter(city => city).sort(); 
  }, [data]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const renderTableRows = () => {
    return data
      .filter(item => selectedCity === 'all' || item.City === selectedCity)
      .map((item, index) => (
        <tr key={index}>
          <td>{item.Primary_Organization}</td>
          <td>{item.Participant_Name}</td>
          <td>{item.Subordinate_Organization}</td>
          <td>{item.Type}</td>
          <td>{item.Sub_Type}</td>
          <td>{item.City}</td>
          <td>{item.CountyName}</td>
          <td>{item.GeoPoint}</td>
        </tr>
      ));
       };

       const renderMarkers = () => {
        return data.map((item, index) => {
          if (item.GeoPoint) {
            const parts = item.GeoPoint.split(', ');
            console.log(parts); // Add this to log the parts for debugging
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
                      shadowSize: [41, 41]
                    })}
                  >
                      <Popup>
                        Name: {item.Primary_Organization}<br />
                        Type: {item.Type}<br />
                        Query: {item.Request_for_Information}<br />
                        Referral: {item.Information_Delivery}<br />
                        ADT: {item.Requests_for_Notification_of_ADT_Events}<br />
                      </Popup>
                    </Marker>
                );
              }
            }
          }
          return null; // Return null for invalid or missing GeoPoints
        }).filter(marker => marker !== null); // Filter out null values to avoid errors
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
      
      {/* Dropdown to select the city 
      <select onChange={handleCityChange} value={selectedCity}>
        {cities.map((city, index) => (
          <option key={index} value={city}>{city}</option>
        ))}
      </select>*/}
      
      {/* Render a table with the data 
      <table>
        <thead>
          <tr>
            <th>Primary Organization</th>
            <th>Participant Name</th>
            <th>Subordinate Organization</th>
            <th>Type</th>
            <th>Sub-Type</th>
            <th>City</th>
            <th>County Name</th>
            <th>Geo Point</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>*/}
    <MapContainer center={[39.572289, -98.036979]} zoom={4} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {renderMarkers()} {/* Here you call the function to render markers */}
        </MapContainer>


  


    </div>
  );
};

export default Networking;
