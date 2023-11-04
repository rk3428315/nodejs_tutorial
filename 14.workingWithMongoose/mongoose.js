// Import mongoose module
const mongoose = require('mongoose');

async function main(){
    // Connect with mongodb
    await mongoose.connect("mongodb://127.0.0.1:27017/ravi");
    // Create a schema for to set of limited fields in collection
    const studentSchema = new mongoose.Schema({
        name:String,
        age :Number

    });

    // To enter the data
    const studentModel = new mongoose.model('students',studentSchema);
    let data = new studentModel({name:"Ravi",age:22});
    let result =await data.save();
    console.log(result,"Result");
}
main();