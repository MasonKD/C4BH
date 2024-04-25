import express from 'express';
import cors from 'cors';
import querySmile from './api-Smile.js';
import getMirthLogs from './api-Mirth.js';


const app = express();
const PORT = process.env.PORT || 3001;

//dev is "http://localhost:3000", Prod is "https://sbx.connectingforbetterhealth.com" for origin
app.use(cors({
    origin: 'http://localhost:3000'
  }));

app.get('/mirth-logs', getMirthLogs);
app.get('/smile-query', querySmile);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
