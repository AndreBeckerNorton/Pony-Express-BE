// console.log ("Hello World")

const express = require('express');
const { customAlphabet } = require('nanoid');
const alphabet = '0123456789abcdef';
const nanoid = customAlphabet(alphabet, 24);
const app = express();
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
 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
