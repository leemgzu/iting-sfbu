const https = require('https');
const fs = require('fs');
const express = require('express');
const startUp = require('./routes/startup');
const getDevice = require('./routes/getdevice');
const iting = require('./routes/iting');
const live = require('./routes/live');
const sfbu = require('./routes/sfbu');


const port = 8080
const httpsOptions = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}


app = express();

const server = https.createServer(httpsOptions,app);

app.use(express.json());
app.use('/', startUp);
app.use('/', getDevice);
app.use('/', iting);
app.use('/', live);
app.use('/', sfbu);


app.get('/get-ip', (req, res) => {
  const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.send({userIp});
});

server.listen(port, () => {
    console.log('HTTPS is running on port ' + port + '')
});

