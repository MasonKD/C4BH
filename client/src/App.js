// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppHeader from './components/AppHeader'
import MainPage from './pages/MainPage';
import Callback from './data/Callback';
import Mirth from './pages/Mirth';
import Networking from './pages/Networking';
import DxfRegistration from './pages/DxfRegAmplify';
import UseCase from './pages/useCase';
import SmileCDR from './pages/SmileCDR';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


import config from './amplifyconfiguration.json';
Amplify.configure(config);

export function App({ signOut, user } ) {

  // history.pushState({ name: "Home" }, "pushState home", "index.html");
  console.log(user)
  return (
    <>
      <Router>
          <AppHeader Signout={signOut} User={user} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/mirth" element={<Mirth />} />
          <Route path="/Networking" element={<Networking />} />
          <Route path="/DxfRegistration" element={<DxfRegistration />} />
          <Route path="/UseCase" element={<UseCase />} />
          <Route path="/SmileCDR" element={<SmileCDR />} />
        </Routes>
      </Router>
    </>
  );
}



// function App() {
//   return (

//     <UserProvider>

//     </UserProvider>
//   );
// }

export default withAuthenticator(App);





