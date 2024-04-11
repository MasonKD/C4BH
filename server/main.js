import express from 'express';
import cors from 'cors';
import querySmile from './api-Smile.js';
import getMirthLogs from './api-Mirth.js';


const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors({
    origin: 'localhost'
  }));

app.get('/mirth-logs', getMirthLogs);
app.get('/smile-query', querySmile);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
