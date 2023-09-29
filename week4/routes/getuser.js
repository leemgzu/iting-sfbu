const express = require('express');
const app = express.Router();

app.post('/getuser', (req, res) =>{
    res.send(req.body);
});

module.exports = app;