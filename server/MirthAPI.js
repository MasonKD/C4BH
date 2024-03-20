const fetch = require('node-fetch'); // Make sure you've installed node-fetch

// Hardcoded API access information (Not Recommended)
const MIRTH_API_ENDPOINT = 'https://52.7.12.154:8443/api/channels/4770b74-869b-4607-8877-00f2589e294f/messages';
const MIRTH_USER = 'admin';
const MIRTH_PASS = 'C4BH126!';
const encodedCredentials = Buffer.from(`${MIRTH_USER}:${MIRTH_PASS}`).toString('base64');

app.get('/api/mirth/logs', (req, res) => {
  const queryParams = req.query;

  // Construct the query string from queryParams object
  const queryString = new URLSearchParams(queryParams).toString();

  const mirthApiUrl = `${MIRTH_API_ENDPOINT}?${queryString}`;
  const headers = {
    'Accept': 'application/json',
    'Authorization': `Basic ${encodedCredentials}`,
  };

  fetch(mirthApiUrl, { method: 'GET', headers: headers })
    .then(mirthResponse => {
      if (!mirthResponse.ok) {
        throw new Error(`HTTP status ${mirthResponse.status}`);
      }
      return mirthResponse.json();
    })
    .then(mirthData => {
      res.json(mirthData);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      res.status(500).send('Error fetching data from Mirth Connect');
    });
});

const port = 3001; // Hardcoded port number for the server
app.listen(port, () => console.log(`Server running on port ${port}`));

