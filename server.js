// required packages for express

const {name} = require('ejs');
const express = require('express');

const app = express();

//port

const port = 3000;

const budgets = require('./models/budgets.js');

app.listen(3000, ()=>{
    console.log('listening...');
});