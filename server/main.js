import express from 'express';
import cors from 'cors';
import querySmile from './api-Smile.js';
import getMirthLogs from './api-Mirth.js';
import queryEncounterCDR from './api-EncounterCDR.js';
import queryPractitionerCDR from './api-PractitionerCDR.js';
import queryDynamoDB from './api-DynamoDB.js';
import { getEnvURL } from './envUtils';


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: getEnvURL('ORIGIN')

  }));

app.get('/mirth-logs', getMirthLogs);
app.get('/smile-query', querySmile);
app.get('/encounter-query', queryEncounterCDR);
app.get('/practitioner-query', queryPractitionerCDR);
app.get('/dxf-query', queryDynamoDB);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
