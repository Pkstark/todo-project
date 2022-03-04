const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const rout = require("./Route");
const cors = require("cors")
const url = "mongodb://localhost:27017/mytodo";

mongoose.connect(url).then(()=>{
    console.log("mongodb connected successfully");
})
 
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors())
app.use("/",rout);


app.listen(8080,()=> console.log("connected"));