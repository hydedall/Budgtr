// required packages for express and dependencies
const express = require("express");
const app = express();
const port = 4000;

// database
const budget = require("./models/budget")

//parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//index
app.get("/budgets", (req, res) => {
    res.render("index.ejs", { 
        allBudgets: budgets, title: "Budgets - Index Page" });
});
//new
app.get("/budgets/new", (req, res) => {
    res.render("new.ejs", {
         title: "Budget - New Page" });
});

//create
app.post("/budgets", (req, res) => {
    budget.push(req.body)
    res.redirect("/budgets")
});

//show
app.get("/budget/:indexOfBudgetsArray", (req, res) => {
    res.render("show.ejs", { 
        budget: budgets[req.params.indexOfBudgetsArray], title: "First - Show Page" });
});

//route listener
app.listen(port, () => {
    console.log(`Money Money Money`)
});