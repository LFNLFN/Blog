let mongoose = require('mongoose')

let schema = new mongoose.Schema({
    id: Number,
    title: String,
    read: {
        type: Number,
        default: 0
    },
    star: {
        type: Number,
        default: 0
    },
    comment: {
        type: Number,
        default: 0
    },
    author: String
})

let Article = mongoose.model('article', schema)
module.exports = Article