import React from 'react';
import './useCase.css';
import dxfvisual from '../images/Screenshot 2024-04-18 at 10.58.45 AM.png';
import dxfvisualtwo from '../images/Screenshot 2024-04-18 at 10.59.11 AM.png';

const Background = () => {

  const handleBackgroundDoc = () => {
    window.location.href = "https://emiadvisorsdc-my.sharepoint.com/:b:/g/personal/haag_kris_emiadvisorsdc_onmicrosoft_com/EZTxo577cMFHrLU7iyZ41oEBxwJdYgVtvS91NX706pzwVQ?e=UNtAO8"; // Redirects to the MPI site
  };

  return (
    <div className='main-container'>
      <main>

              <h2 className="shared-title">DxF Sandbox: Background</h2>

      <div className='img-holder3'>
          <a className='lg-link' href="https://emiadvisorsdc-my.sharepoint.com/:b:/g/personal/haag_kris_emiadvisorsdc_onmicrosoft_com/EZTxo577cMFHrLU7iyZ41oEBxwJdYgVtvS91NX706pzwVQ?e=UNtAO8"
             target="_blank" rel="noopener noreferrer" className="pdf-link">
            DxF Sandbox: Charter
          </a>
        </div>
        <div className='section' id="useCase-section">
          <h2 className="shared-title"></h2>
          <div className='img-holder'>
            <img src={dxfvisual} alt="Connecting for Better Health" />
          </div>
          <div className='img-holder3'>
          <img src={dxfvisualtwo} alt="Connecting for Better Health" />
          </div>
          
          

        </div>
      </main>
    </div>
  );
};

export default Background;



