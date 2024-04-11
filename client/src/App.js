// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './Usercontext';
import LandingPage from './LandingPage';
import MainPage from './MainPage'; 
import Callback from './Callback';
import Mirth from './Mirth'; 
import Networking from './Networking';
import DxfRegistration from './DxfRegistration';
import UseCase from './useCase';
import SmileCDR from './SmileCDR';

 

function App() {
  return (
    
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mainpage" element={<MainPage />} /> 
          <Route path="/callback" element={<Callback />} /> 
          <Route path="/mirth" element={<Mirth />} />
          <Route path="/Networking" element={<Networking />} />
          <Route path="/DxfRegistration" element={<DxfRegistration />} />
          <Route path="/UseCase" element={<UseCase />} />
          <Route path="/SmileCDR" element={<SmileCDR />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;





