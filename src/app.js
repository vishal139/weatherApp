const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

const port = process.env.PORT || 8000;


const staticPath = path.join(__dirname,"../public");
const viewPath = path.join(__dirname,"../templates/views");
partialPath = path.join(__dirname,"../templates/partials");

app.use(express.static(staticPath));// by default it will search for index page it will only rende index.html page (name is important)
app.set("view engine","hbs");
app.set("views",viewPath);
hbs.registerPartials(partialPath);


app.get("/",(req,res)=>{
    res.render('index');
})
app.get("/weather",(req,res)=>{
    res.render('weather');
})
app.get("*",(req,res)=>{
    res.render('404error');
})

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})