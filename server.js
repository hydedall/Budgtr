// required packages for express

const {name} = require('ejs');
const express = require('express');

const app = express();

//port

const port = 3000;

app.listen(3000, ()=>{
    console.log('listening...');
});