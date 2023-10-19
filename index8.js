const express = require('express');
const path = require('path');

const app = express();

// To get the path in variable using path module
const publicPath = path.join(__dirname, '8.public');
// console.log(publicPath);

// To access the about html file staticly
// express.static function load the static content page and 
// use is a function of express framework
app.use(express.static(publicPath));
app.listen(5000);