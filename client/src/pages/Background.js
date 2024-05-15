import React from 'react';
import dxfvisual from '../images/Screenshot 2024-04-18 at 10.58.45 AM.png';
import dxfvisualtwo from '../images/Screenshot 2024-04-18 at 10.59.11 AM.png';
import { Button } from "@aws-amplify/ui-react";
import pdf from "../images/DxF Sandbox Project Charter 11.23.23 (1).pdf";
import font from '../css/fonts.module.css'
import flex from '../css/flex.module.css'

const Background = () => {

  const handleBackgroundDoc = () => {
    window.location.href = "https://emiadvisorsdc-my.sharepoint.com/:b:/g/personal/haag_kris_emiadvisorsdc_onmicrosoft_com/EZTxo577cMFHrLU7iyZ41oEBxwJdYgVtvS91NX706pzwVQ?e=UNtAO8"; 
  };



  return (
    <div className='main-container main-container-fix'>
      <main>

      
      <h2 className={`${font.h2}`}>Sandbox Background</h2>
          
          <iframe 
              src={pdf} 
              width="100%" 
              height="800px"
              style={{ border: 'none', marginBottom:72 }}
              title="DxF Sandbox Project Charter"
            />



        



        <div>
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



