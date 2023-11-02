const connectDB = require('./mongoConnetion');

// Delete data into the collection and also from database
async function deleteData() {    
    const data = await connectDB;
    console.log(data, "DATA");
    try {
        // const db = await db('ravi'); 
        // const collection = collection('student');

        // To delete single data into collection
        const result = await data.deleteOne({ name: 'Astha' });
        console.log(result, "Data deleted in collection.");

    } catch (err) {
        console.log("Error during the data deleting....", err);
    }
}
deleteData();