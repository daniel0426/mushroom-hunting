const express = require('express');
const mongoose = require('mongoose');

//model
const Blog = require("./models/blog");

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
const PORT = 3000;

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology:true})
.then((result)=> app.listen(PORT))
.catch((err)=> console.log(err)) 


app.use(express.urlencoded({extended:true}));
app.use(express.json());

//get all blogs - Alexis
// * using "find method"
app.get('/blogs', (req, res, next)=> {
    try{

    }catch(err){
        next(err)
    }
})

//get specific blog 
app.get('/blogs/:blogId', (req, res, next)=> {
    try{

    }catch(err){
        next(err);
    }
})

//post new blog - Riley
// * make a new instance of Blog and using save()
app.post('/blogs', async (req, res)=> {
    const blog = new Blog({
        title : req.body.title,
        details : req.body.details,
        tags : req.body.tags
    });

    const savedBlog = await blog.save();
    res.json(savedBlog);
})


//delete the blog - Annabel
//* using findByIdAndDelete method
app.delete('/blogs/:blogId/', (req, res, next)=> {
    try{

    }catch(err){
        next(err)
    }
})

//update - daniel
//* using findByIdAndUpdate method
app.patch('/blogs/:blogId/', (req, res, next)=> {
    try {

    } catch (err) {
        next(err)
    }
})