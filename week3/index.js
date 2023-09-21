// const express = require('express');
// const app = express()

// const hostname = 'localhoat';
// const port = 8080;

// // const server = http.createServer((req, res) => {
// //     res.statusCode = 200;
// //     res.setHeader('Content-Type', 'text/plain');
// //     res.end('Hello World');
// // });

// app.get('/hello', (request, response) => {
//     console.log(request, "request")
// });

// // server.listen(port, hostname, () => {
// //     console.log('Server running at http://${hostname}:')
// // });
// app.listen(port, () => {
//     console.log('Server running' );
// });

//  this is a https web-server
const https = require('https');
const express = require('express');
const port = 8080

app = express();

const fs = require('fs');
const httpsOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}
const server = https.createServer(httpsOptions,app);

app.get('/', (req, res) => {
  res.send('Hello World!');
}  );

server.listen(port, () => {
    console.log('HTTPS is running on port ' + port + '')
});

