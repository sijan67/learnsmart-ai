require('dotenv').config() 
const {MongoClient, ServerApiVersion} = require('mongodb');

const uri = process.env.MONGODB_URI;



const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);


const clientMongo = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        depreciationErrors: true,
    }   
});

async function run() {
    try {
        await clientMongo.connect();
        await clientMongo.db("admin").command({ping: 1});
        console.log("successfully connected to the database");
    } finally {
        await clientMongo.close();
    }
}

run().catch(console.dir);
