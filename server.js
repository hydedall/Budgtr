// required packages for express and dependencies
const express = require('express');
const res = require('express/lib/response');
const budget = require('./models/budget');

//initializer
const app = express();

//app config
const port = 4000;

const bodyParser = require(`body-parser`);

app.use(express.static('./public'));
//express.json() and express.urlencoded() are for POST and PUT requests

app.use(express.urlencoded({ extended: false }));

// app.get("/", (req,res) => {
//     res.send("I am alive")
// });

//index
app.get("/budget/", (req, res) => {
    res.render("index.ejs", { allBudgets: budgets, title: "Budgets - Index Page" });
});
//new
app.get("/budget/new", (req, res) => {
    res.render("new.ejs", { title: "Budget - New Page" });
});

//create
app.post("/budget", (req, res) => {
    budgets.push(req.body)
    res.redirect("/budget")
});

//show
app.get("/budget/:indexOfBudgetsArray", (req, res) => {
    res.render("show.ejs", { budget: budgets[req.params.indexOfBudgetsArray], title: "First - Show Page" });
});

//route listener
app.listen(4000, () => {
    console.log(`Listening...: ${PORT}`)
});