const Blog = require('../models/blog');

const getAllBlog = async (req, res, next)=> {
    try{
        const blogs = await Blog.find().sort({createdAt : -1})
        res.status(200).json(blogs)
    }catch(err){
        next(err)

    }
}

const getSpecificBlog = async (req, res, next)=> {
    try{
        const blog = await Blog.findById(req.params.blogId)
        res.status(200).json(blog)
    }catch(err){
        next(err);
    }
}

const createBlog = async (req, res, next)=> {
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
}

const deleteBlog = async (req, res, next)=> {
    try{
        console.log('deleted')
        const deletedBlog = await Blog.findByIdAndDelete(req.params.blogId);
        res.status(200).json(deletedBlog);
    }catch(err){
        next(err)
    }
}

const updateBlog = async (req, res, next)=> {
    try {
        const updateBlog ={
            title: req.body.title,
            details: req.body.details,
            imgURL: req.body.imgURL,
            author: req.body.author,
            tags: req.body.tags
        }
        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.blogId,
            updateBlog
        );
        res.status(200).json(updatedBlog);

    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAllBlog, getSpecificBlog, deleteBlog, createBlog, updateBlog
}