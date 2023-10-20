import https from 'https';
import fs from 'fs';
import express from 'express';
// import dotenv from 'dotenv';

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


server.listen(port, ()=> {
    logger.info(`Server is listening on port ${port}!`);
}) 
    