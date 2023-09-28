const express  = require("express");
const app = express.Router();

app.get('/iting/:id', (req, res) => {  
    const id = req.params.id;
  
    console.log(id)
    res.send(id)
  
  });

module.exports = app;