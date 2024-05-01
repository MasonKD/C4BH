import React from 'react';
import dxfvisual from '../images/Screenshot 2024-04-18 at 10.58.45 AM.png';
import dxfvisualtwo from '../images/Screenshot 2024-04-18 at 10.59.11 AM.png';
import { Button } from "@aws-amplify/ui-react";
import font from '../css/fonts.module.css'
import flex from '../css/flex.module.css'

const Background = () => {

  const handleBackgroundDoc = () => {
    window.location.href = "https://emiadvisorsdc-my.sharepoint.com/:b:/g/personal/haag_kris_emiadvisorsdc_onmicrosoft_com/EZTxo577cMFHrLU7iyZ41oEBxwJdYgVtvS91NX706pzwVQ?e=UNtAO8"; // Redirects to the MPI site
  };



  return (
    <div className='main-container'>
      <main>

      



        <div className={`${flex.row} ${flex.justifySpaceBetween}`}>
        <h2 className={`${font.h2} ${flex.rowChild48}`}>Sandbox Background</h2>
          <div>
          <Button variation="primary" >
            <a  rel="noopener noreferrer" href="https://emiadvisorsdc-my.sharepoint.com/:b:/g/personal/haag_kris_emiadvisorsdc_onmicrosoft_com/EZTxo577cMFHrLU7iyZ41oEBxwJdYgVtvS91NX706pzwVQ?e=UNtAO8">            DxF Sandbox Charter
            </a>
          </Button>
          </div>

        </div>



        <div className='section'>
        <h3 className={font.h3}>Functional Architecture</h3>
          <div className={flex.row}>
            <img style={{marginBottom:72}} src={dxfvisual} alt="Connecting for Better Health" />
          </div>
          <h3 className={font.h3}>Technical Architecture</h3>
          <div className={flex.row}>
          <img src={dxfvisualtwo} alt="Connecting for Better Health" />
          </div>
          
          

        </div>
      </main>
    </div>
  );
};

export default Background;



