const { User } = require("../model")

const crud = require('./crudUtil')

const userAdd = async (ctx) => {
    let { id, auth = "2", sex, phone, email, username, pwd } = ctx.request.body
    await crud.add(User, { id, sex, phone, email, username, pwd, sex }, ctx)
}

const userUpdate = async (ctx) => {
    let params = ctx.request.body
    await crud.update(User, { _id: params._id }, { username: params.username, pwd: params.pwd }, ctx)
}

const userDel = async (ctx) => {
    let { _id } = ctx.request.body
    await crud.del(User, { _id }, ctx)
}

const userFind = async (ctx) => {
    await crud.find(User, null, ctx)
}

const userFindOne = async (ctx) => {
    await crud.findOne(User, { _id: ctx.params._id }, ctx)
}


module.exports = {
    userAdd,
    userUpdate,
    userDel,
    userFind,
    userFindOne
}
