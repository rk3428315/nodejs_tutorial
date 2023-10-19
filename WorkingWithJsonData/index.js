const user = require('./data');
const express = require('express');
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname);
// console.log(dataPath);


const app = express();

// To get the json data from other file
fs.readFile(`${dataPath}/data.json`, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        const userData = JSON.parse(data);        
        console.log(userData);
    }
});
//---------End---------------

// To create the json data in other file
// 1.fs.writeFile("filename", data, callback);
const createData = {
    name: "New User",
    age: 30,
    language: ["PHP", "Go", ";kll"]
};

// Push the created data into data.json file using user array
user.push(createData);

fs.writeFile(`${dataPath}/data.json`, JSON.stringify(user), (err, data) => {
    if (err) {
        console.error("Not create the json data");
    }
    else {
        console.log(user, "New data crated");
    }
    
})
//--------------End-------------------

// To send json data on browser
app.get('/', (err, res) => {
    const userData = JSON.stringify(user);
    // console.log(userData);
    res.send(userData);

});

// console.log(user);

app.listen(5000);
