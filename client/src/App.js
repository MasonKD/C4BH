// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import MainPage from './MainPage'; 
import Callback from './Callback';
import Mirth from './Mirth'; 

 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mainpage" element={<MainPage />} /> 
        <Route path="/callback" element={<Callback />} /> 
        <Route path="/mirth" element={<Mirth />} />
      </Routes>
    </Router>
  );
}

export default App;





