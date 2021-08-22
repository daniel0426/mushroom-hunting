const mongoose = require('mongoose');


const blogSchema = mongoose.Schema({
    imgURL : {
        type:String, 
        required: true
    },
    title :{
        type : String, 
        required : true
    },
    author :{
        type : String, 
        required : true
    },
    details : {
        type: String, 
        required : true
    },
    tags : {
        type: [],
        required: true
    }
}, {timestamps : true})

const Blog = mongoose.model('Blog', blogSchema) ;

module.exports = Blog;