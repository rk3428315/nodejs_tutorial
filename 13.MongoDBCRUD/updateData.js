const connectDB = require('./mongoConnetion');

// update data into the collection
async function updateData() {

    const data = await connectDB;
  
    try {
      // To delete single data into collection
      const result = await data.updateOne({ name: "Astha" }, { $set: { age: 9 } });
      console.log(result, "Data updated in collection.");
  
  
    } catch (err) {
      console.log("Error during the data updating....", err);
    }
  }
  
  updateData();