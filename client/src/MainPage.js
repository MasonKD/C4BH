import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { useUser } from './Usercontext';
import './MainPage.css';
import logoImage from './images/C4BHLogo.png';

const Logo = () => (
  <div className="logo">
    <img src={logoImage} alt="Connecting for Better Health" />
  </div>
);

const MainPage = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const { user } = useUser();

  // Handler for the Sign Out button
  const handleSignOut = () => {
    navigate('/'); // Redirects to the landing page
  };

  // Handler for the Query Master Patient Index button
  const handleQueryMPI = () => {
    window.location.href = "http://logica-client.azurewebsites.net/"; // Redirects to the MPI site
  };

  // Handler for the Query Master Patient Index button
  const HandleMirthQuery = () => {
    navigate ('/Mirth'); 
  };

  // Handler for the Query Master Patient Index button
  const HandleNetworkQuery = () => {
    navigate ('/Networking'); 
  };

  const HandleUseCaseQuery = () => {
    window.location.href = "https://drive.google.com/drive/folders/1Um1DTMRnOn5cxoW-9J-_pc2yzriAq2j5?usp=drive_link";
    };

  return (
    <div className="main-container">
      <header className="header">
        <Logo />
        <div>
          <div className="user-participant">Welcome, C4BH Admin</div>
          <button className="signout-button" onClick={handleSignOut}>Sign Out</button> 
        </div>
      </header>
      <main>
      <div className="button-container">
        <div className='button-col'>
          <button className="query-button" onClick={HandleUseCaseQuery}>Use Cases</button>
        </div>
        <div className='button-col'>
          <button className="query-button" id="disabled"> <div>FTP Log</div> <span>(Coming Soon)</span></button>
          <button className="query-button"onClick={HandleMirthQuery}>Mirth Log</button>
          <button className="query-button" onClick={handleQueryMPI}>Clinical Data Repo</button>
        </div>
        <div className='button-col'>
        <button className="query-button" id="disabled"> <div>Rules Engine</div> <span>(Coming Soon)</span></button>
        </div>
        <div className='button-col'>
        <button className="query-button" onClick={HandleNetworkQuery}>Network</button>
        </div>
        


      </div>
      </main>
    </div>
  );
};

export default MainPage;


