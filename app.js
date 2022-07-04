const express = require('express')
const mongoose = require('mongoose')
const Phones = require('./models/Phones.Model')
const app = express();
const cors = require('cors')


app
.use(cors({
    credentials: true,
    origin: process.env.ORIGIN || "http://localhost:3001",
  }))
.listen(3000, () => console.log("Server is running"));

mongoose
  .connect('mongodb://localhost:27017/technical-challenge')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err))


app.get("/phones", (req, res, next)=>{
    Phones.find()
    .then(response=> res.json(response))
    .catch(err=>console.log('error getting phones', err))
})

app.get("/phones/:phoneId", (req,res,next)=>{
    Phones.findById(req.params.phoneId)
    .then(response=>res.json(response))
    .catch(err=>console.log('error getting phone details', err))
})

module.exports = app;





