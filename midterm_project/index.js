import https from 'https';
import fs from 'fs';
import express from 'express';
import dotenv from 'dotenv';
import {getTrackingNumber, getTrackingInfo} from "./route/getTracking.js"


const app = express();
const port = 8080;
// create https key and cert
const httpsOptions = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}
// for api key in .env
dotenv.config();

// create server with httpsption and app

const server = https.createServer(httpsOptions,app);  
// const logger = getLoggerInstance();

app.use(express.json());

// app post to process data from postman to get ordernumber from customer
app.post('/tracking_detail', async (req, res) => {
    const orderNumber = req.body.orderNumber;
    if (orderNumber != null) {
        const trackingNumber = getTrackingNumber(orderNumber);
        if (trackingNumber != undefined) {
            const trackingInfo = await getTrackingInfo(trackingNumber)
            if ( trackingInfo !== undefined){
                res.send(trackingInfo);
            }
            else {
                res.status(400).send("Can not find tracking information from TrackMore.");
            }
        }
        else {
            res.status(400).send("Can not find tracking number!");
        }
    }
    else {
        res.status(400).send("Order number is invalid!");
    }
});


server.listen(port, ()=> {
    // logger.info(`Server is listening on port ${port}!`);
    console.log('server is listening...');
}) 
    