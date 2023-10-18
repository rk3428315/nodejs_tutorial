const express = require('express');
const reqFilter = require('./middleware');

const app = express();
const route = express();
route.use(reqFilter);

// To render the home page
app.get('/', (req, res) => {
    res.send("Welcome to Home page");
});

// How to apply restriction on single route

// To render the user page
route.get('/user', (req, res) => {
    res.send("Welcome to user page");
});

route.get('/about', (req, res) => {
    res.send("Welcome to about page");
});

app.use('/',route);

app.listen(5000);