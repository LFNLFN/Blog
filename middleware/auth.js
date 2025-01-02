const jwt = require('jsonwebtoken')
const { secretKey } = require('../config/config.js')

class Auth {
    constructor(level) {
        this.level = level
    }
    get middleware() {
        return async (ctx, next) => {
            const token = ctx.request.header.authorization.substr(7)

            let errMsg = 'Invalid Token'

            if (!token || token.name === 'null') {
                ctx.body = {
                    errCode: 10005,
                    msg: errMsg,
                    request: `${ctx.method} ${ctx.path}`
                }
                return
            }

            try {
                var decoded = jwt.verify(token.name, secretKey)
            } catch (error) {
                if (error.name === 'tokenExpiredError') {
                    errMsg = 'Expired Token'
                }
                ctx.body = {
                    errCode: 10005,
                    msg: errMsg,
                    request: `${ctx.method} ${ctx.path}`
                }
                return
            }

            if (decoded.scope < this.level) {
                ctx.body = {
                    errCode: 10005,
                    msg: 'Permission is denied',
                    request: `${ctx.method} ${ctx.path}`
                }
                return
            }

            await next()
        }
    }
    static verifyToken(token) {
        try {
            jwt.verify(token, secretKey)
            return true
        } catch (error) {
            return false
        }
    }
}

module.exports = Auth