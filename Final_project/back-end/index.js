import http from 'http';
import fs from 'fs';
import express from 'express';
// import dotenv from 'dotenv';

const tempDB = ['Sweet potato Pancake', 'Sweet Butter Baked Cabbage'];

const app = express();
const port = 8080;

// for api key in .env
// dotenv.config();

// create server with httpsption and app

const server = http.createServer(app);  
// const logger = getLoggerInstance();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/load_recipe', (req,res) =>{
    res.send(tempDB);
})

app.post('/add_recipe', async(req, res) =>{
    const newRecipe = req.body.newRecipe;
    console.log(newRecipe);
    tempDB.push(newRecipe);

    res.send(tempDB);
})

server.listen(port, ()=> {
    // logger.info(`Server is listening on port ${port}!`);
    console.log('server is listening...');
}) 
    