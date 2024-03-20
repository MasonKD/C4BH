import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Networking.css';
import logoImage from './images/C4BHLogo.png';
import leafPin from 'leaflet/dist/images/marker-icon.png';
import data from './data.json';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Select from 'react-select'; // Import react-select

const Logo = () => (
  <div className="logo">
    <img src={logoImage} alt="Connecting for Better Health" />
  </div>
);

const Networking = () => {
    const navigate = useNavigate();
    const handleSignOut = () => navigate('/');
  
    // Use state to manage selected cities
    const [selectedCities, setSelectedCities] = useState([]);

    // Generate options for the dropdown
    const cityOptions = useMemo(() => {
        const uniqueCities = [...new Set(data.map(item => item.City))];
        return uniqueCities.map(city => ({ value: city, label: city })).sort((a, b) => a.label.localeCompare(b.label));
    }, [data]);

    // Handle changes in the selection
    const handleCityChange = selectedOptions => {
        setSelectedCities(selectedOptions || []);
    };

    const renderMarkers = () => {
        return data.filter(item => selectedCities.length === 0 || selectedCities.some(city => city.value === item.City))
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
                return null;
            }).filter(marker => marker !== null);
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
            <div className="content-container"> {/* Additional div for layout */}
                {/* Dropdown for city selection */}
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
                {/* MapContainer */}
                <MapContainer center={[39.572289, -98.036979]} zoom={4} scrollWheelZoom={false} className="leaflet-container">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {renderMarkers()}
                </MapContainer>
            </div>
        </div>
    );
};

export default Networking;

