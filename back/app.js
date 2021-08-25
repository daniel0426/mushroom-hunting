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

//get all blogs - Alexis
// * using "find method"
app.get('/blogs', async (req, res, next)=> {
    try{
        const blogs = await Blog.find().sort({createdAt : -1})
        res.status(200).json(blogs)
    }catch(err){
        next(err)

    }
});

//get specific blog
app.get('/blogs/:blogId', async (req, res, next)=> {
    try{
        const blog = await Blog.findById(req.params.blogId)
        res.status(200).json(blog)
    }catch(err){
        next(err);
    }
});

//post new blog - Riley
// * make a new instance of Blog and using save()
app.post('/blogs', async (req, res, next)=> {
    try {
    res.send('Post Recived')
    const blog = new Blog({
        title: req.body.title,
        details: req.body.details,
        imgURL: req.body.url,
        author: req.body.author,
        tags: req.body.tags
    })

    const savedBlog = await blog.save()
    res.status(200).send(savedBlog)

    }catch(err){
        next(err);
    }
});


//delete the blog - Annabel
//* using findByIdAndDelete method
app.delete('/blogs/:blogId/', async (req, res, next)=> {
    try{
        console.log('deleted')
        const deletedBlog = await Blog.findByIdAndDelete(req.params.blogId);
        res.status(200).json(deletedBlog);
    }catch(err){
        next(err)
    }
});

//update - daniel
//* using findByIdAndUpdate method
app.patch('/blogs/:blogId/', async (req, res, next)=> {
    try {
<<<<<<< HEAD
        const updateBlog = new Blog({
            title: req.body.title,
            details: req.body.details,
            imgURL: req.body.url,
            author: req.body.author,
            tags: req.body.tags
        })
        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.blogId,
            updateBlog
        );
        res.status(200).json(updatedBlog);
=======
>>>>>>> 137a9c5a58b5428c73a3989bdda894ff1a2b91eb

    } catch (err) {
        next(err)
    }
});