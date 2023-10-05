import express from "express";
import {getUserZipCode} from "../controller/getUserZipCode.js";

export const getLocation = express.Router();

getLocation.get('/get-ip', async (req, res) => {
    const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    try{
        if (userIp){
            const location = await getUserZipCode(userIp);
            res.send({"userLocation": location});
        }
    }
    catch(err){
        console.log(err);
        res.send({"error": err})
    }
    res.send({userIp});
  });