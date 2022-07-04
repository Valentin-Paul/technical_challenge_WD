const express = require('express')
const mongoose = require('mongoose');
const Phones = require("../models/Phones.Model")
const phonesFile = require('../data/phones.json')

mongoose
  .connect('mongodb://localhost:27017/technical-challenge')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err))

// Phones.insertMany(phonesFile)
//     .then((response)=>{
//         console.log(`${response.length} products created`)
//     })
//     .catch((err)=>{
//         console.log('error inserting many data...', err)
//     })