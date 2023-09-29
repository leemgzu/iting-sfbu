const express  = require("express");
const app = express.Router();

app.get('/get-ip', (req, res) => {
    const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.send({userIp});
  });
  
module.exports = app;

