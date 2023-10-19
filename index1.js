// To 5.File
const fs = require('fs');
const path = require('path');

// To make complete path of folder
const dirPath = path.join(__dirname, "5.File");
console.log(dirPath);

// To create a single file in folder
// fs.writeFileSync(dirPath+ "/hello1.txt", "This is hello File.");

// To create multiple Files in folder using loop
for (let i = 0; i < 5; i++) {
    fs.writeFileSync(dirPath + "/Hello" + i + ".txt", "This is hello file " + i + "");

    // To delete the file from directory or folder
    //   fs.unlinkSync(dirPath + "/Hello" + i + ".txt");
}
//----------End-----------  -

// To show the all created file
fs.readdir(dirPath, (err, data) => {
    // But this will give in array formate
    console.log(data);

    // It will give one by one
    data.forEach((item) => {
        console.log(item);
    });

});


// 6.crudWithFS

// To create file
const dirPathCRUD = path.join(__dirname, "6.crudWithFS");

const filePath = `${dirPathCRUD}/apple.txt`;
// fs.writeFileSync(filePath,"This is apple file.");

// // To read file
// fs.readFile(filePath,'utf8',(err, data)=>{
//     console.log(data);
// });

// //To update file
// fs.appendFile(filePath, "This is the modified content in apple file.",(err)=>{
//     if(!err){
//         console.log("File is updated");
//     }
// });

// // To rename the file
// fs.rename(filePath,`${dirPathCRUD}/fruit.txt`,(err)=>{
//     if(!err){
//         console.log("File is renamed.");
//     }
// })


// // To delete the file
// fs.unlinkSync(`${dirPathCRUD}/orange.txt`);