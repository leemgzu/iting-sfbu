const express  = require("express");
const startUp = express.Router();

startUp.get('/', (req, res) => {
  res.send('It Works!');
}  );


startUp.get('/startup', (req, res) => {
  res.send('Web Service has started!');
}  );

module.exports = startUp;