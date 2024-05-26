import React from 'react';
import logoImage from './images/C4BHLogo.png';
import { getEnvURL } from '../envUtils';

const Logo = () => (
  <div className="logo">
    <img src={logoImage} alt="Connecting for Better Health" />
  </div>
);

const DxfRegistration = () => {
 

  // Handler for the Sign Up button click, identical setup as sign in but could lead to a different path if needed
  const handleSignUp = () => {
    const clientId = '6ajbqdj9bvutetf9vrremr1clc';
    const redirectUri = getEnvURL('DXF_REGISTRATION_REDIRECT');
    const signInUri = `${getEnvURL('DXF_REGISTRATION_SIGN_UP')}?client_id=${clientId}&response_type=code&scope=email+openid+phone&redirect_uri=${redirectUri}`;
    window.location.assign(signUpUri);
  };

  return (
    <div className="main-container main-container-fix">
      <header className="header">
        <Logo />
      </header>
      <main>
        <div className='reg-modal-container'>
        <div className='Reg-landing-container'>
            <div className="Reg-welcome-container">
              <div className='reg-header'>Please Complete the Following Form:</div>
                <div className ="iframe-container">
        
                    <iframe
                    width="630px" height="470px" src= "https://forms.office.com/Pages/ResponsePage.aspx?id=_Ki53oRf3USREaEcAYThzRlUYUdoe2RPkZ7Mortb0WVUM01INVBIRjhBRUExTjdFS0tZUURGWkxPOS4u&embed=true"  allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen></iframe>

                </div>
            
            
            <button onClick={handleSignUp} className="landing-button">Continue to sign up</button>
            </div>
        </div>
        </div>


      </main>
    </div>
  );
};

export default DxfRegistration;