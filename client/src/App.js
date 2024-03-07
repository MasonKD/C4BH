// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import MainPage from './MainPage'; 
import Callback from './Callback'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mainpage" element={<MainPage />} /> 
        <Route path="/callback" element={<Callback />} /> 
      </Routes>
    </Router>
  );
}

export default App;





