import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './MainPage.css';


const MainPage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Handler for the Sign Out button
  const handleSignOut = () => {
    navigate('/'); // Redirects to the landing page
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
    navigate('/useCase');
    };

  const HandleSmileCDRQuery = () => {
    navigate('/SmileCDR');
    };

  return (
    <div className="main-container">
      <main>
      <div className="button-container">
        <div className='button-col'>
          <button className="query-button" onClick={HandleUseCaseQuery}>Use Cases</button>
        </div>
        <div className='button-col'>
          <button className="query-button" id="disabled"> <div>FTP Log</div> <span>(Coming Soon)</span></button>
          <button className="query-button" onClick={HandleMirthQuery}>
            <div>Integration Engine</div>
            <div>(Mirth)</div>
          </button>
          <button className="query-button" onClick={HandleSmileCDRQuery}>
            <div>CDR</div>
            <div>(Smile)</div>
          </button>
        </div>
        <div className='button-col'>
        <button className="query-button" id="disabled"> <div>Rules Engine</div> <span>(Coming Soon)</span></button>
        </div>
        <div className='button-col'>
        <button className="query-button" onClick={HandleNetworkQuery}>Visualizations</button>
        </div>



      </div>
      </main>
    </div>
  );
};

export default MainPage;


