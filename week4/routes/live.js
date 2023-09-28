const express  = require("express");
const app = express.Router();

app.get('/live', (req, res) => {
    res.send('Its alive');
  }  );

module.exports = app;