const jwt = require('jsonwebtoken')

const { searchKey, expiresIn } = require('../config/config')

function generateToken(uid, scope) {
    const token = jwt.sign({ uid, scope }, searchKey, { expiresIn })
    return token
}

module.exports = { generateToken }