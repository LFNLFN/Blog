const { generateToken } = require('../core/utilToken')

const { User } = require('../model')

const Auth = require('../middleware/auth')

let tokenValue = ''

const userToken = async (ctx) => {
    let { username = '', pwd = '' } = ctx.request.body

    await User.findOne({ username, pwd })
        .then((rel) => {
            if (rel) {
                tokenValue = generateToken(rel.id, rel.auth)
                ctx.body = { tokenValue }
            } else {
                ctx.body = {
                    errCode: 10001,
                    msg: 'Message of user is not true.',
                    request: `${ctx.method} ${ctx.path}`
                }
            }
        })
        .catch((err) => {
            ctx.body = {
                errCode: 400,
                msg: 'Abnormal in retrieve user.'
            }
        })
}

const isToken = async (ctx) => {
    const token = ctx.request.header.authorization.substr(7)
    const isValid = Auth.verifyToken(token);
    ctx.body = { isValid }
}

module.exports = {
    userToken,
    isToken,
}