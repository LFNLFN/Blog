// const Auth = require('../middleware/auth.js')

let {
    add, findAll, findOne, update, del
} = require('../controller/article.js')

const router = require('koa-router')()

router.prefix('/article')
router.post('/add', add)
router.post('/findAll', findAll)
// router.post('/findAll', new Auth(3),findAll)
router.post('/findOne', findOne)
router.post('/del', del)
router.post('/update', update)

module.exports = router