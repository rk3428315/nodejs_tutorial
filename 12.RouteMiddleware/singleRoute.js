const express = require('express');
const path = require('path');

const app = express();

// If we want to add restriction on particular page like user
// first need to remove application route app.use(reqFilter);
// app.use(reqFilter);

// send middleware as parameter in user route 
// app.get('/user', reqFilter, (req, res) => {
//     res.send("Welcome to user page");
// });


// create middleware
const reqFilter = (req, res, next) => {

    if (!req.query.age) {
        res.send("Please provide age!");

    } else if (req.query.age < 18) {
        res.send("Age is less than 18.");

    }
    else {
        next();
    }
}


// To render the home page
app.get('/', (req, res) => {
    res.send("Welcome to Home page");
});

// How to apply restriction on single route

// To render the user page
app.get('/user', reqFilter, (req, res) => {
    res.send("Welcome to user page");
});

app.get('/about', reqFilter, (req, res) => {
    res.send("Welcome to about page");
});

// ---------end------------
app.listen(5000);
