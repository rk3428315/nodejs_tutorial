const connectDB = require('./mongoConnetion');

// To find the data from database
async function getData() {
    // To connect to the the database
    const data =await connectDB;

    try {
      // To retrive the data from the collection
      const result = await data.find({}).toArray();
      console.log(result, "Data fetch from student collection..");
  
      // To get single data into the collection
      const singledata = await data.findOne({ name: 'Ravi' });
      console.log(singledata, "Data fetch single data from student collection..");
    } catch (err) {
      console.log("Error during the data retriving....", err);
    }
  }
  
  getData();