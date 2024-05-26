import fetch from 'node-fetch';
import btoa from 'btoa';
import https from 'https';
import { getEnvURL } from './envUtils';

const getMirthLogs = async (req, res) => {

  const apiEndpoint = getEnvURL('MIRTH_API');
  const username = 'admin';
  const password = 'C4BH126!';
  const encodedCredentials = btoa(`${username}:${password}`);

  try {
    const response = await fetch(apiEndpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Basic ${encodedCredentials}`
      },

      agent: new https.Agent({ rejectUnauthorized: false })
    });

    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }

    const text = await response.text();


    res.json({ data: text }); // Send the data back to the client as JSON
  } catch (error) {
    console.error('Error fetching data from Mirth Connect:', error);
    res.status(500).send('Error fetching data');
  }
}

export default getMirthLogs;