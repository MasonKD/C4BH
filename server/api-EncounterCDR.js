import fetch from 'node-fetch';
import btoa from 'btoa';
import https from 'https';
import { getEnvURL } from './envUtils';

// const apiEndpoint = 'http://ec2-18-188-102-170.us-east-2.compute.amazonaws.com:8000/Encounter';
const apiEndpoint = getEnvURL('ENCOUNTER_CDR_API');

const queryEncounterCDR = async (req, res) => {
  const username = 'admin';
  const password = 'password';
  const encodedCredentials = btoa(`${username}:${password}`);
  try {
    const response = await fetch(apiEndpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Basic ${encodedCredentials}`
      },

      // agent: new https.Agent({ rejectUnauthorized: false })
    });

    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }

    const text = await response.text();
     console.log(text)
    res.json({ data: text }); // Send the data back to the client as JSON
  } catch (error) {
    console.error('Error fetching data from Smile CDR:', error);
    res.status(500).send('Error fetching data');
  }
}

export default queryEncounterCDR;