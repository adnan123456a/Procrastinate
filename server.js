const express = require("express");
const app = express();
const path = require("path")
const ejs = require("ejs")

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"./html"));

app.listen(3000,"0.0.0.0",()=>{
    console.log("Listening : localhost:3000")
})
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/Login",(req,res)=>{
    res.render("login")
})
app.get("/Registration",(req,res)=>{
    res.render("registration")
})
