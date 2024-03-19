import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Networking.css';
import logoImage from './images/C4BHLogo.png';
import leafPin from 'leaflet/dist/images/marker-icon.png';
import data from './data.json'; // make sure the path to your JSON file is correct
//import * as d3 from 'd3';
import L from "leaflet";
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Map, Marker, Popup, SVGOverlay} from 'react-leaflet'
import cities from './cities.json';

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

const position = [41.076602, 30.052495]
const bounds = [
  [41.076602, 30.052495],
  [41.076602, 28.052495],
]


const myIcon = new Icon({
  iconUrl: leafPin,
  iconSize: [20,32]
 })



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



  <MapContainer  center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} icon={myIcon}>

    </Marker>



  </MapContainer>


    </div>
  );
};

export default Networking;
