// const pug = require('pug');
const express = require('express');
const path = require('path');

// To inslize the express
const app = express();
// To get the directory
const pathdir = path.join(__dirname,"public");
// To render the file statically
app.use(express.static(pathdir));
// To   
app.set('view engine', 'pug');
app.listen(5000);
app.get('/',(req, res)=>{
    res.render("attributes");
})