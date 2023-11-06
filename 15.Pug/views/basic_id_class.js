const pug = require('pug');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
// SERVER.JS
// To get the directory path
const dirPath = path.join(__dirname, 'public');

// To load the content of file statically
app.use(express.static(dirPath),);

// configurations for the view engine that which type of engine
app.set("view engine", "pug");

app.listen(5000);

app.get('/', function
    (req, res) {
    res.render("basic_id_class");
        
});