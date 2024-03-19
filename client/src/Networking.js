import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './Networking.css';
import logoImage from './images/C4BHLogo.png';
import data from './data.json'; // make sure the path to your JSON file is correct

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
    </div>
  );
};

export default Networking;
