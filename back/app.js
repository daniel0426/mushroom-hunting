const express = require('express');
const mongoose = require('mongoose');


//created a server (express app)
const app = express();


// morgan : add logging
const morgan = require('morgan');
app.use(morgan("dev"));

//handle cors issue
const cors = require('cors');
app.use(cors())

//connect to DB
const dbURI = 'mongodb+srv://dreamTeam:yoobee@mushroom-hunting.ym12l.mongodb.net/mushroom-hunting?retryWrites=true&w=majority';
const PORT = 4000;

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify:true})
.then((result)=> app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
}))
.catch((err)=> console.log(err))


app.use(express.urlencoded({extended:true}));
app.use(express.json());

//model
const Blog = require("./models/blog");
const { response } = require('express');


//blogcontroller
const blogController = require('./controllers/blogController');

app.get('/blogs', blogController.getAllBlog);

app.get('/blogs/:blogId', blogController.getSpecificBlog);

app.post('/blogs', blogController.createBlog);

app.delete('/blogs/:blogId/', blogController.deleteBlog);

app.patch('/blogs/:blogId', blogController.updateBlog);