import http from 'http';
import fs from 'fs';
import express from 'express';
import { addRecipe, getAllRecipes } from './database.js';

// import dotenv from 'dotenv';

const tempDB = [{ 
    'title': 'Sweet potato Pancake', 
    'ingredients': 'Pancake mix 200g, egg x 1, milk 120ml, sweet pototo X 2, heavy cream, honey' 
},     { 
    'title': 'Sweet Butter Baked Cabbage', 
    'ingredients': 'butter 50g, heavy cream 100g, cabbage 500g, salt 20g, sugar 20g, shredded cheese 100g' 
}];

const app = express();
const port = 8080;

// for api key in .env
// dotenv.config();

// create server with httpsption and app

const server = http.createServer(app);
// const logger = getLoggerInstance();

app.use(express.json());
// connectToDatabase();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/load_recipe', async (req, res) => {
    const recipes = await getAllRecipes();
    res.send(recipes);
})

app.post('/add_recipe', async (req, res) => {
    const newRecipe = req.body.newRecipe;
    const newTitle = req.body.newTitle;
    console.log(newTitle);
    // tempDB.push({ 'title': newTitle, 'ingredients': newRecipe });
    await addRecipe(newTitle, newRecipe);

    res.send(await getAllRecipes());
})

server.listen(port, () => {
    // logger.info(`Server is listening on port ${port}!`);
    console.log('server is listening...');
})
