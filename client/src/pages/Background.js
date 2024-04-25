import React from 'react';
import dxfvisual from '../images/Screenshot 2024-04-18 at 10.58.45 AM.png';
import dxfvisualtwo from '../images/Screenshot 2024-04-18 at 10.59.11 AM.png';
import button from '../css/button.module.css'
import font from '../css/fonts.module.css'
import flex from '../css/flex.module.css'

const Background = () => {

  const handleBackgroundDoc = () => {
    window.location.href = "https://emiadvisorsdc-my.sharepoint.com/:b:/g/personal/haag_kris_emiadvisorsdc_onmicrosoft_com/EZTxo577cMFHrLU7iyZ41oEBxwJdYgVtvS91NX706pzwVQ?e=UNtAO8"; // Redirects to the MPI site
  };



  return (
    <div className='main-container'>
      <main>

      <h2 className={font.h2}>DxF Sandbox: Background</h2>



        <div className={flex.row}>
          <button className={button.primary} >
            <a target="_blank" rel="noopener noreferrer" href="https://emiadvisorsdc-my.sharepoint.com/:b:/g/personal/haag_kris_emiadvisorsdc_onmicrosoft_com/EZTxo577cMFHrLU7iyZ41oEBxwJdYgVtvS91NX706pzwVQ?e=UNtAO8">            DxF Sandbox: Charter
            </a>
          </button>
        </div>



        <div className='section'>
          <div className={flex.row}>
            <img src={dxfvisual} alt="Connecting for Better Health" />
          </div>
          <div className={flex.row}>
          <img src={dxfvisualtwo} alt="Connecting for Better Health" />
          </div>
          
          

        </div>
      </main>
    </div>
  );
};

export default Background;



