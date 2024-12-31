const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/blogDb')
        .then(() => {
            console.log('Connect successfully')
        })
        .catch(err => {
            console.log('Connect successfully: ', err)
        })
}