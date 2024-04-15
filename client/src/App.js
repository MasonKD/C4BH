// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppHeader from './AppHeader'
import MainPage from './MainPage';
import Callback from './Callback';
import Mirth from './Mirth';
import Networking from './Networking';
import DxfRegistration from './DxfRegAmplify';
import UseCase from './useCase';
import SmileCDR from './SmileCDR';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


import config from './amplifyconfiguration.json';
Amplify.configure(config);

export function App({ signOut, user } ) {

  // history.pushState({ name: "Home" }, "pushState home", "index.html");
  // console.log(user)
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





