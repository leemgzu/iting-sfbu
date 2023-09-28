const https = require('https');
const fs = require('fs');
const express = require('express');
const startUp = require('./routes/startup');

const port = 8080
const httpsOptions = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}


app = express();

const server = https.createServer(httpsOptions,app);

app.use(express.json());
app.use('/', startUp)

app.get('/get-device', (req, res) => {
  const whatDeviceIsThis = req.header('User-Agent');
  // if the device is Windows, send a flag: isWindows = true
  // if the device is Mac, send a flag: isMac = true
  // if the device is linux, send a flag: is Linus = true
  res.send({whatDeviceIsThis});
});

app.get('/get-ip', (req, res) => {
  const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.send({userIp});
});

server.listen(port, () => {
    console.log('HTTPS is running on port ' + port + '')
});

