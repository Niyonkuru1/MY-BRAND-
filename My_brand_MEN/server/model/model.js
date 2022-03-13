const mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    gender: String,
    status: String
})

const Blogdb = mongoose.model("blog", schema);

module.exports = Blogdb;