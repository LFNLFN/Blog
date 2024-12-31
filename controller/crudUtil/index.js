const add = (model, params, ctx) => (
    model.create(params).then(rel => {
        if (rel) {
            ctx.body = {
                code: 200,
                msg: 'Add successfully',
                data: rel
            }
        } else {
            ctx.body = {
                code: 300,
                msg: 'Add unsuccessfully',
            }
        }
    })
        .catch(err => {
            ctx.body = {
                code: 500,
                msg: 'There is abnormal',
            }
        })
)

const update = (model, where, params, ctx) => (
    model.updateOne(where.params)
        .then(rel => {
            ctx.body = {
                result: rel
            }
        })
        .catch(err => {
            ctx.body = {
                code: 400,
                msg: 'Abnormal in updation'
            }
        })
)

const del = (model, where, ctx) => (
    model.findOneAndDelete(where)
        .then(rel => {
            ctx.body = {
                result: rel
            }
        })
        .catch(err => {
            ctx.body = {
                code: 400,
                msg: 'Abnormal in deletion'
            }
        })
)

const find = (model, where, ctx) => (
    model.find(where)
        .then(rel => {
            ctx.body = {
                result: rel
            }
        })
        .catch(err => {
            ctx.body = {
                code: 400,
                msg: 'Abnormal in search'
            }
        })
)

const findOne = (model, where, ctx) => (
    model.findOne(where)
        .then(rel => {
            ctx.body = {
                result: rel
            }
        })
        .catch(err => {
            ctx.body = {
                code: 400,
                msg: 'Abnormal in search'
            }
        })
)

module.exports = {
    find, add, update, del, findOne
}