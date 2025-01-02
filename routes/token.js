const router = require('koa-router')()

const Token = require('../controller/token')

router.prefix('/token')

router.post('/', Token.userToken)

router.post('/verify', Token.isToken)

module.exports = router
