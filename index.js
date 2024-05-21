const express = require("express");

const mongoose = require('mongoose');

const job_routers = require("./mvc/router/job_router") // import router

const app = express();
//mongodb://localhost:27017/job_application

mongoose.connect("mongodb+srv://mdaejazahmed6692:Aejaz123@jobapp.qpkj84e.mongodb.net/")
.then(()=>{
    console.log("project is connected with data base");
})
.catch((err)=>{
    console.log("while connected with data base  " +err)
})

app.use(express.json());

app.use(job_routers);

app.listen(10000,()=>{
    console.log("server is connected to port 10000")
})