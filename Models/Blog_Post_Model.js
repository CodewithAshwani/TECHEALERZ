const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Post = new schema({
    Title: {
        type: String,
        required: true,

    },
    Content: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    }
});

const Blog_post=mongoose.model('Blog_Data',Post);
module.exports=Blog_post;

