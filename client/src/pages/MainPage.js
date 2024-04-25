import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import button from '../css/button.module.css'
import font from '../css/fonts.module.css'
import flex from '../css/flex.module.css'

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

    const HandleBackgroundQuery = () => {
      navigate('/Background');
      };

  return (
    <div className="main-container">
      <main>
      <div className={flex.section}>
        <div className={`${flex.row} ${flex.justifyCenter}`}>
        <div className={`${flex.col} ${flex.col5margin}`}>
          <button className={button.jumbo} onClick={HandleBackgroundQuery}>Background</button>
        </div>
        <div className={`${flex.col} ${flex.col5margin}`}>
          <button className={button.jumbo} onClick={HandleUseCaseQuery}>Use Cases</button>
        </div>
        <div className={`${flex.col} ${flex.col5margin}`}>
          <button className={`${button.jumbo} ${button.disabled}`}> <div>FTP Log</div> <span>(Coming Soon)</span></button>
          <button className={button.jumbo} onClick={HandleMirthQuery}>
            <div>Integration Engine</div>
            <div>(Mirth)</div>
          </button>
          <button className={button.jumbo} onClick={HandleSmileCDRQuery}>
            <div>CDR</div>
            <div>(Smile)</div>
          </button>
        </div>
        <div className={`${flex.col} ${flex.col5margin}`}>
        <button className={`${button.jumbo} ${button.disabled}`}> <div>Rules Engine</div> <span>(Coming Soon)</span></button>
        </div>
        <div className={`${flex.col} ${flex.col5margin}`}>
        <button className={button.jumbo} onClick={HandleNetworkQuery}>Visualizations</button>
        </div>
        </div>




      </div>
      </main>
    </div>
  );
};

export default MainPage;


