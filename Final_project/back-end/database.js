import { MongoClient } from 'mongodb'

const mongoUri = 'mongodb+srv://ilee6400:JbGVf5emvudktDus@cluster0.slcwbee.mongodb.net/'

export const connectToDatabase = async () => {
    try{
        const client = new MongoClient(mongoUri)
        await client.connect();
        
        // console.log(myDatabase.collection('SFBU'))
        console.log('Connected to MongoDB')
        return client.db('Itingweb');
        
    }catch(error){
        console.error('Failed to connect to MongoDB', error)
    }
}

export const myDatabase = connectToDatabase();

export async function getAllRecipes() {
    const collection = (await myDatabase).collection('recipes');
    const cursor = collection.find();
    const recipes = [];
    for await( const recipe of cursor) {
        recipes.push(recipe);
    }
    return recipes;
}

export async function addRecipe(title, ingredients) {
    const collection = (await myDatabase).collection('recipes');
    await collection.insertOne({title, ingredients});
}