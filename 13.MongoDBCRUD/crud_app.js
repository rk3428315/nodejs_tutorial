const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri, {
    useNewUrlParser: true
});

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
    } catch (err) {
        console.log(err);
    }
};


// configured express
const express = require('express')
const app = express()
const port = 3000
app.listen(port, () => {
    console.log('Server is listening on port', port)
})

app.get('/',async function (req, res) {
    connectDB();
    const data = await insertUser();
    await res.send(data);
});

async function insertUser() {
    const database = await client.db('ravi')
    const collection = await database.collection('student')
    const result = await collection.insertOne({ name: 'Prachi', age: 24 })
    console.log(result);
};