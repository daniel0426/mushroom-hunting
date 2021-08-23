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
app.post('/blogs', async (req, res, next)=> {
    try {
    res.send('Post Recived')
    console.log(req.body)
    const blog = new Blog({
        title: req.body.title,
        details: req.body.details,
        imgURL: req.body.url,
        author: req.body.author,
        tags: req.body.title
    })

    const savedBlog = await blog.save()
    res.status(200).send(`blog saved = `, savedBlog)

    }catch(err){
        next(err);
        
        
    }
})


//delete the blog - Annabel
//* using findByIdAndDelete method
app.delete('/blogs/:blogId/', (req, res, next)=> {
    try{
        Blog.findByIdAndDelete(req.params.blogId, function (err){
           if (err) next(err);
           else res.status(200)
        })

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