const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./db/connect.js')
const app = express();
const port = process.env.PORT || 3000;

connect.initDatabase();

app
.use(bodyParser.json())
.use('/', require('./routes'))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})