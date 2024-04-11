import express from 'express';
import fetch from 'node-fetch'; 
import btoa from 'btoa';
import https from 'https';
import { Agent } from 'https';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors({
    origin: 'https://sbx.connectingforbetterhealth.com'
  }));
  
app.get('/mirth-logs', async (req, res) => {
  const apiEndpoint = 'https://52.7.12.154:8443/api/channels/f6d4fc04-babd-41b4-a087-9bfce4affce9/messages/1';
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
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
