import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/css/variables.css';
import '../src/css/global-styles.css';
import App from './App';
import reportWebVitals from './data/reportWebVitals';

import {ThemeProvider} from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import "@aws-amplify/ui-react/styles.css";
import studioTheme from './ui-components/studioTheme';

Amplify.configure(amplifyconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
  <ThemeProvider theme={studioTheme}>

      <App />

  </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
