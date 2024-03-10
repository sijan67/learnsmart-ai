const express = require('express');
const app = express();


const port = process.env.PORT || 3001;
const { MongoClient, ServerApiVersion } = require('mongodb');


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
run().catch(console.dir);


app.get('/', (req, res) => {
    res.end("backend page");
})

app.listen(port, ()=> {
    console.log('Server running on port ${port} ')
}) 

