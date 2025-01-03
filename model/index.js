const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    pwd: String,
    sex: {
        type: String,
        default: '男'
    },
    phone: String,
    email: String,
    auth: {
        type: String,
        default: 2
    }
})

const User = mongoose.model('users', userSchema)

module.exports = { User }