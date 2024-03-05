import React from 'react';
import './MainPage.css'; 
import logoImage from './images/C4BHLogo.png';

const Logo = () => (
    <div className="logo">
      <img src={logoImage} alt="Connecting for Better Health" />
    </div>
  );

const MainPage = () => {
  return (
    <div className="main-container">
      <header className="header">
        <Logo />
        <div className="user-participant">User Participant: Provider A</div>
      </header>
      <div className="button-container">
        <button className="query-button">Query Master Patient Index</button>
        <button className="query-button">Query Participant Directory</button>
        <button className="query-button">Query CDR</button>
        <button className="query-button">Query Rules</button>
      </div>
    </div>
  );
};

export default MainPage;
