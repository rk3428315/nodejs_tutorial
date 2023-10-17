console.log(process.argv);

// To get many argument it will start from 0 indexing
// console.log(process.argv[4]); 

// if we want to create file with data using command line
const fs = require('fs');

const input = process.argv;
// fs.writeFileSync(input[2], input[3]);
 
// If second argument is add then add 3 and 4 argument
if(input[2] == 'add'){
    fs.writeFileSync(input[3], input[4]);

// If second argument is remove then remove 3 argument
}else if(input[2] == 'remove'){
    fs.unlinkSync(input[3]);
}
// If argument is not exist then give the error
else{
    console.log("Argument Invalid!");
}


