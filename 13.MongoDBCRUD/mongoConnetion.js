// // To import the mongoDB module there are two type

// // const MongoClient = require('mongodb').MongoClient;

// // OR
// const { MongoClient } = require('mongodb');

// // mongoDB connection path
// const dbUrl = 'mongodb://localhost:27017/';

// // Database name
// const database = 'ravi';

// const client = new MongoClient(dbUrl);

// async function getConnection() {
//     try {
//         // using connect function connect to the server
//         client.connect();
//         // console.log(result, "result------------");

//         // let db = result.db('ravi');
//         // OR
//         let db = db(database);
//         console.log(db, "db------------");

//         let collection = await collection('student');
//         let response = await db.collection.find({}).toArray();
//         console.log(response, "connectin success");
//     } catch (error) {
//         console.log(error, "Error generated.")
//     }
// }

// getConnection();




const { MongoClient } = require("mongodb");

module.exports = { connectDB };
const dbUrl = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(dbUrl);

// Connecting to the database
async function connectDB() {
  try {
    await client.db();
    console.log("Connected to MongoDB");

    // // Particular database to connect that you want to use
    const db = client.db("ravi");
    return db.collection('student');

  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}
// connectDB();

// export this file into another file
module.exports = connectDB();

// To find the data from database
async function getData() {
  // To connect to the the database
  // connectDB();

  // To connect the database
  const db = client.db("ravi");

  // To connect to the collection
  const collection = db.collection("student");

  try {
    // To retrive the data from the collection
    const data = await collection.find({}).toArray();
    console.log(data, "Data fetch from student collection..");
// res.send
    // To get single data into the collection
    const singledata = await collection.findOne({ name:'Ashish' });
    console.log(singledata, "Data fetch single data from student collection..");
  } catch (err) {
    console.log("Error during the data retriving....", err);
  }
}
// getData();



// Add data into the collection
async function insertData() {
  // connectDB();

  const db = client.db("ravi");
  const collection = db.collection("student");

  try {
    // Insert data one by one 
    const result = await collection.insertOne(
      [
        { name: "Ajeet", age: 22 }
      ]

      // Insert multiple data at a time
      // const result = await collection.insertMany(
      //     [
      //       { name: "Ajeet", age: 22 },
      //       { name: "Ravi", age: 22 },
      //       { name: "Saurabh", age: 22 }
      //     ]
    );

    console.log(result, "Data added in collection.");
  } catch (err) {
    console.log("Error during the data adding....", err);
  }
}

// insertData();

// Delet data into the collection and also from database
async function delteData() {
  // connectDB();

  const db = client.db("ravi");
  const collection = db.collection("student");

  try {
    // To delete single data into collection
    const result = await collection.deleteOne({ name: 'Ajeet' });
    console.log(result, "Data deleted in collection.");

    // To delete all data from database with collection
    // const deleteAll = await collection.drop({});
    // console.log(result, "Data all deleted from collection.");

  } catch (err) {
    console.log("Error during the data deleting....", err);
  }
}

// delteData();

// update data into the collection
async function updateData() {
  // connectDB();

  const db = client.db("ravi");
  const collection = db.collection("student");

  try {
    // To delete single data into collection
    const result = await collection.updateOne({ name: "Ravi" }, { $set: { age: 345 } });
    console.log(result, "Data updated in collection.");


  } catch (err) {
    console.log("Error during the data updating....", err);
  }
}

// updateData();