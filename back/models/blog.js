const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title :{
        type : String, 
        required : true
    },
    details : {
        type: String, 
        required : true
    },
    tags : {
        type: Array,
        required: true
    }
}, {timestamps : true})

const Blog = mongoose.model('Blog', blogSchema) ;

module.exports = Blog;