require('dotenv').config();
var http = require('http');
const express = require('express');
const { customAlphabet } = require('nanoid');
const alphabet = '0123456789abcdef';
const nanoid = customAlphabet(alphabet, 24);

const { mongoConnect } = require('./util/database'); 

const app = express();
var server = http.createServer(app);
const port = process.env.PORT; 
app.use(express.json())

app.get('/', (req, res) => {
    res
      .status(200)
      .send('Hello, World!')
      .end();
  });

app.get('/api/correspondence', (req, res) => {
    console.log(req.query)
  res
    .status(200)
    .json({'Message' : req.query.id})
    .end();
});

app.get('/api/new', (req, res) => {
    res
      .status(200)
      .json({'id' : nanoid()})
      .end();
  });

mongoConnect(() => {
  server.listen(port, () => { console.log('We are live on ' + port); });
}) 