const express = require('express');
const dbConnection = require('./mongoConnetion');
const mongodb = require('mongodb');
const app = express();

app.get('/', async (req, res) => {
    try {
        let data = await dbConnection;
        let result = await data.find({}).toArray();
        res.send(result);
    } catch (error) {
        console.log(error, "Error gernerted during the get api...");
    }
});

// Use it to able to read the “body” of an incoming JSON object
app.use(express.json());

// To post data
app.post('/add', async function (req, res) {
    try {
        let data = await dbConnection;

        // To insert single data 
        let result = await data.insertOne(req.body);
        
        // // To insert multiple data 
        // let result = await data.insertMany(req.body);
        res.send(result);
    } catch (error) {
        console.log(error, "Error gernerted during the post api...")
    }
});

//----------Pending update by parameter------------
// To update data
app.put('/update/:id', async function (req, res) {
    try {
        let data = await dbConnection;
        console.log(req.params.id);
        // To single data update
        // let result = await data.updateOne({name:req.body.name},{$set:req.body});

        // update by parameter
        let result = await data.updateOne({_id:new mongodb.ObjectId(req.params.id)},{$set:req.body});

        // To multiple data update
        // let result = await data.updateMany({ name: "Rk" },{$set:req.body});
        res.send(result);
    } catch (error) {
        console.log(error, "Error gernerted during the post api...")
    }
});

// To delete data
app.delete('/delete/:id', async (req, res)=> {
    try {
        let data = await dbConnection;
        let id = req.params.id;
        let result = await data.deleteOne({_id : new mongodb.ObjectId(id)});
        res.send(result);
    } catch (error) {
        console.log(error, "Error gernerted during the post api...")
    }
});

app.listen(5000);