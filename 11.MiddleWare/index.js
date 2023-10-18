const express = require('express');
const path = require('path');

const app = express();

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

app.use(reqFilter);

// To render the home page
app.get('/', (req, res) => {
    res.send("Welcome to Home page");
});

// To render the user page
app.get('/user', (req, res) => {
    res.send("Welcome to user page");
});

app.listen(5000);
