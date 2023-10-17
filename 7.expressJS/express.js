const express = require('express');
const app = express();

// To get the response of data and show on the routes
app.get('', (req, res) => {
    res.send("Hello, this is Home page.");
});

// How to render the html  content on browser and link pages,
// pass the value using query parameter from browser

app.get('/renderTag', (req, res) => {
    res.send(`
    <h1>Hello, This is h1 tag.</h1> 
    <input type='text' placeholder ='Name' value='${req.query.name}'>
    <button> Click me </button><br>
    <a href='/about' alt='error'>Go to about page</a>
    `); 
});


// To render json data we can't get json and html data at same 
app.get('/help', (req, res) => {
    res.send(
        [
            {
                name: 'Ravi',
                email: 'ravi@gmail.com'
            },
            {
                name: 'Ajeet',
                email: 'ajeet@gmail.com'
            }
        ]
        
    );
});

// To get about page
app.get('/about', (req, res) => {
    res.send(`Hello, This is about page.
    <input type='text' placeholder ='Name' value='${req.query.name}'>
    `);
});
app.listen(5000);


// To get the request from the browser                       
app.get('/route',(req,res)=>{
    // console.log("Data from browser => ",req.query)
    res.send("Hello, This is about page."+req.query.name)
});