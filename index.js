const cors = require("cors");
const body_Parser = require("body-parser");

const mongoose = require("mongoose");
mongoose.set('strictQuery',false)
mongoose.connect("mongodb+srv://sasidev:sasidev@cluster0.ai08zmj.mongodb.net/schooldb")

var db = mongoose.connection;
db.on("open",()=>console.log("database connection successful"))
db.on("error",()=>console.log("database connection failed"))

const express = require("express")

const app = express();
const studentRoute = require("./controller/studentRoute")
app.use(body_Parser.json())
app.use(body_Parser.urlencoded({extended:true}));
app.use(cors()); 
app.use("/studentRoute",studentRoute);
app.listen(4000,()=>console.log("Server started at 4000"));

 