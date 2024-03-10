const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://tliu024:<LearnSmartAI>@cluster.ar9e5a6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster";

const client = new MongoClient(uri, {
    serverAPi: {
        version: ServerApiVersion.v1,
        strict: true,
        depreciationErrors: true,
    }
})

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ping: 1});
        console.log("Pinged your deployment. You sucessfully connected to the db!");

    } finally {
        await client.close();
    }
}

app.get('/', (req, res) => {
    res.end("backend page");
})

app.listen(port, ()=> {
    console.log('Server running on port ${port} ')
}) 

