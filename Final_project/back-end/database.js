// const { MongoClient } = require("mongodb")
import { MongoClient } from 'mongodb'

const mongoUri = 'mongodb+srv://prakashthakuri:slQnDKdusPNUDvR6@cluster0.dakltlo.mongodb.net/'

let myDatabase;
export const connectToDatabase = async () => {

    try{
        const client = new MongoClient(mongoUri)
        await client.connect()
        myDatabase = client.db('SFBU')

        // console.log(myDatabase.collection('SFBU'))
        console.log('Connected to MongoDB')
    }catch(error){
        console.error('Failed to connect to MongoDB', error)
    }

}



export function getDatabaseClient(){
    return myDatabase
}