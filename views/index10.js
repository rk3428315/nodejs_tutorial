const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'profie10');
// console.log(publicPath,"public path");

// To tell the node js that going to use ejs template engine
app.set('view engine', 'ejs');

// To render the profie page
app.get('/profile',(req,res)=>{
    const user = {
        name :"Ravi",
        email : "ravi@gmail.com",
        city : "Ghazipur",
        skills :['js','nodejs','angular']
    }
    res.render("profile", {user});
});

// To render the profie page
app.get('/login',(req,res)=>{
    res.render("login");
})

app.listen(5000);
