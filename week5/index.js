// const https = require('https');
// const fs = require('fs');
// const express = require('express');
// const startUp = require('./routes/startup');
// const getLocation = require('./routes/getlocation') ;

import https from 'https';
import fs from 'fs';
import express from 'express';
import dotenv from 'dotenv';
import {startUp} from './routes/startup.js';
import { getLocation } from './routes/getlocation.js';

const port = 8080
const httpsOptions = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}
dotenv.config();

const app = express();

const server = https.createServer(httpsOptions,app);  

app.use(express.json());
app.use('/', startUp);
app.use('/', getLocation);

app.get('/get-device', (req, res) => {
  const whatDeviceIsThis = req.header('User-Agent'); //User Agent header 
  // if the device is Windows, send a flag: isWindows = true
  if (whatDeviceIsThis.indexOf('Windows') != -1) {
    res.send({isWindows: true});
    console.log('You are using Windows!');
  } else {
    console.log('this is probably a computer');
  }
  // if the device is Mac, send a flag: isMac = true
  // if the device is linux, send a flag: is Linus = true
  res.send({whatDeviceIsThis});
});



server.listen(port, () => {
    console.log('HTTPS is running on port ' + port + '')
});

