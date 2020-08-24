const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const videosRoute = require('./routes/videosRoute');

// add middleware to help work with req.body
app.use(express.json());

app.use(cors());

// root url of server
app.get('/', (req, res) => {
  res.send('<h1>Hello Express</h1>');
});

// videos endpoint 
app.use('/videos', videosRoute);

// listen, start the application
app.listen(port, () => console.log(`Listening at: http://localhost:${port}.`));
