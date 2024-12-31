const router = require('koa-router')()

const userCtl = require('../controller/user')

router.prefix('/users')

router.post('/add', userCtl.userAdd)
router.post('/update', userCtl.userUpdate)
router.post('/del', userCtl.userDel)
router.get('/find', userCtl.userFind)
router.get('/find/:id', userCtl.userFindOne)

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
