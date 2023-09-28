const express  = require("express");
const app = express.Router();


app.get('/get-device', (req, res) => {
   console.log(req.headers)
    const whatDeviceIsThis = req.header('User-Agent'); //User Agent header 
    // if the device is Windows, send a flag: isWindows = true
    // if the device is Mac, send a flag: isMac = true
    // if the device is linux, send a flag: is Linus = true
    res.send({
      isWindows: whatDeviceIsThis.indexOf('Windows') !== -1,
      isMac: whatDeviceIsThis.indexOf('Macintosh') !== -1,
      isLinux: whatDeviceIsThis.indexOf('Linux') !== -1,
      postmanRunTime: whatDeviceIsThis.indexOf('PostmanRuntime') !== -1,
    });
  });

module.exports = app;