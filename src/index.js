const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');

// Middle Ware Logger
app.use(morgan('combined'));

// Template Engine Handlebars
app.engine('.hbs', handlebars.engine({ 
    extname: '.hbs' 
  }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resources/views'));


// Express Server
app.get('/', (req, res) => {
   res.render(`home`);
});

app.get('/news', (req, res) => {
  res.render(`news`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})