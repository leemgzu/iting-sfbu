//  this is a https web-server
const https = require('https');
const express = require('express');
const port = 8080;
const app = express()


// Root endpoint
app.get('/', (req, res) => {
    res.json( {message: 'Hello World!' });
});

// Create a Get request for /live and send if its live Eg: '/live' and send the response of 'Web Service is live'
// Create a Get Request for /startup and send if it has started

// Endpoint for checking if the web service is live
app.get('/live', (req, res) => {
    res.json({ status: 'Web Service is live' });
    });

// Endpoint for checking if the web service has started
app.get('/startup', (req, res) => {
    res.json({ status: 'Web Service has started' });
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });
   

// GET Route with custom headers

app.get('/set-header', (req, res) => {

    // Set custom response headers
   
    res.setHeader('Content-Type', 'application/json');
   
    res.setHeader('Custom-Header', 'Hello from GET route');
   
   
    // Send a JSON response
   
    res.send({ message: 'This is a GET request' });
   
   });