const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3080;


app.use(bodyParser.json());

app.post('/home/user', (req, res) => {
  const data = req.body;
  console.log( data);
  res.json({ message: 'received successfully' });
});

app.listen(port, () => {
  console.log(`${port} loaded successfully`);
});