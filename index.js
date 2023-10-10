// To access only writeFileSync function in fs module
// const fs = require('fs').writeFileSync;

// To access all fs module function
const fs = require('fs');

// To create file  
// fs.writeFileSync("server.js","created");
// fs.writeFileSync("calc.js","export.add = function(x,y){return x+y;}");
// fs("Html/index.html","!");

fs.readFile('./index.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Getting data : ",data);
});

console.log(__dirname,"dr",__filename);

// To access the local module in project 
const addNumber =require('./calc');
let x = 90, y= 40;
console.log("Add two numbers using local module: ", addNumber.add(x,y));
console.log("Add two numbers using local module: ", addNumber.sub(x,y));
