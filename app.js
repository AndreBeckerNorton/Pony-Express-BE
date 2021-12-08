require('dotenv').config();
var http = require('http');
const express = require('express');

const { mongoConnect } = require('./util/database'); 
const ConversationController = require('./controllers/conversation');
const LetterController = require('./controllers/letter');

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

app.post('/api/conversation', ConversationController.postCreateConversation);
app.post('/api/letter', LetterController.postCreateLetter);

app.get('/api/new', (req, res) => {
    res
      .status(200)
      .json({'id' : "thing"})
      .end();
  });

mongoConnect(() => {
  server.listen(port, () => { console.log('We are live on ' + port); });
}) 