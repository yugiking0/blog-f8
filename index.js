const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

// Middle Ware Logger
app.use(morgan('combined'));

// Express Server
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})