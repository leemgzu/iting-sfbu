import https from 'https';
import fs from 'fs';
import express from 'express';
// import dotenv from 'dotenv';
import {getLoggerInstance }from './route/logger.js';
import {getPokemon} from './controller/getPokemon.js';

const app = express();
const port = 8080;

const httpsOptions = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}
// dotenv.config();

const server = https.createServer(httpsOptions,app);  
const logger = getLoggerInstance();

app.use(express.json());

app.use('/', getPokemon); 

// getLocation.get('/get-pokemon', async (req, res) => {
//     const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
//     try{
//         if (userIp){
//             const location = await getUserZipCode(userIp);
//             res.send({"userLocation": location});
//         }
//     }
//     catch(err){
//         console.log(err);
//         res.send({"error": err})
//     }
//     res.send({userIp});
//   });


server.listen(port, ()=> {
    logger.info(`Server is listening on port ${port}!`);
}) 
    