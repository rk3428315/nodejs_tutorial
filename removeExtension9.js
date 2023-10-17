const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'9.removeExtensionFromRoute');
// console.log(publicPath,"public path");

// By Deafult show show page
app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
});

app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`)
});

app.get('/help',(req,res)=>{
    res.sendFile(`${publicPath}/help.html`)
});

// Deafult show page if route will be wrong
app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
});

app.listen(5000);
