const express  = require("express");
const app = express.Router();


app.post('/sfbu', (req, res) => {
    const studentName = req.body.studentName;
    
    res.send({studentName});
  });

module.exports = app;
  