const connectDB = require('./mongoConnetion');

// Add data into the collection
async function insertData() {
    // To connect to the the database
    const data = await connectDB;

    try {
        // Insert data one by one 
        const result = await data.insertOne(
            // Insert single data at a time      
            { name: "Susmita", age: 25 }

        );

        // Insert multiple data at a time
        const result1 = await data.insertMany(
            [
              { name: "Rahul", age: 21 },
              { name: "Anand", age: 22 },
              { name: "Ashish", age: 24 }
            ]
          )

        console.log(result1, "Data added in collection.");
    } catch (err) {
        console.log("Error during the data adding....", err);
    }
}

insertData();