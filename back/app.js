const express = require('express');
const morgan = requires('morgan');
const mongoose = require('mongoose');


//express app
const app = express();

const dbURI = 'mongodb+srv://dreamTeam:yoobee@mushroom-hunting.ym12l.mongodb.net/mushroom-hunting?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology:true})
.then((result)=> app.listen(4000))
.catch((err)=> console.log(err))