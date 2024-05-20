// App.js
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import Callback from './data/Callback';
import Mirth from './pages/Mirth';
import Networking from './pages/Networking';
import DxfRegistration from './pages/DxfRegAmplify';
import UseCase from './pages/useCase';
import SmileCDR from './pages/SmileCDR';
import Background from './pages/Background';
import OldMainPage from './pages/OldMainPage';
import { Amplify } from 'aws-amplify';
import { formFields, components } from './components/Auth';
import { Authenticator } from '@aws-amplify/ui-react';

import { HeaderMod } from './components/HeaderMod'
import { FooterMod } from './components/FooterMod';
import { SideNavMod } from './components/SideNavMod'
import '@aws-amplify/ui-react/styles.css';


import config from './amplifyconfiguration.json';
Amplify.configure(config);

export default function App({ signOut, user } ) {

  return (
    <Router>
      <Authenticator formFields={formFields} components={components}>
      <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingTop: '78px' }}>
          <HeaderMod style={{ zIndex: 200 }} />
          <SideNavMod style={{ zIndex: 200 }} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
            <div style={{ width: '14rem', flexShrink: 0 }}></div>
            <Routes style={{ flex: 1 }}>
              <Route path="/" element={<MainPage />} />
              <Route path="/callback" element={<Callback />} />
              <Route path="/mirth" element={<Mirth />} />
              <Route path="/Networking" element={<Networking />} />
              <Route path="/DxfRegistration" element={<DxfRegistration />} />
              <Route path="/UseCase" element={<UseCase />} />
              <Route path="/SmileCDR" element={<SmileCDR />} />
              <Route path="/Background" element={<Background />} />
              <Route path="/OldMainPage" element={<OldMainPage />} />
            </Routes>
          </div>

        <FooterMod style={{zIndex:"400"}}/>
        </div>
      </Authenticator>
    </Router>
  );
}




