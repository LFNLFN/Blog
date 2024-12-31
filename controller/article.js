let Article = require('../model/article')

const add = async (ctx) => {
    let article = ctx.request.body
    await Article.create(article)
        .then(rel => {
            if (rel) {
                ctx.body = {
                    code: 200,
                    msg: 'Article is published successfully.'
                }
            } else {
                ctx.body = {
                    code: 300,
                    msg: 'Failed to publish article.'
                }
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                msg: 'Abnormal in publishing.'
            }
        })
}

const update = async (ctx) => {
    let article = ctx.request.body
    await Article.updateOne({ id: article.id },
        {
            title: article.title,
            read: article.read,
            star: article.star,
            comment: article.comment,
        })
        .then(rel => {
            if (rel.modifiedCount > 0) {
                ctx.body = {
                    code: 200,
                    msg: 'Article is updated successfully.'
                }
            } else {
                ctx.body = {
                    code: 300,
                    msg: 'Failed to update article.'
                }
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                msg: 'Abnormal in updating.'
            }
        })
}

const del = async (ctx) => {
    let { id } = ctx.request.body
    await Article.findOneAndDelete({ id })
        .then(rel => {
            if (rel) {
                ctx.body = {
                    code: 200,
                    msg: 'Article is deleted successfully.'
                }
            } else {
                ctx.body = {
                    code: 300,
                    msg: 'Failed to delete article.'
                }
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                msg: 'Abnormal in deleting.'
            }
        })
}

const findAll = async (ctx) => {
    let { page, author } = ctx.request.body

    if (!page || isNaN(Number(page))) {
        page = 1
    } else {
        page = Number(page)
    }

    let pageSize = 10
    let count = 0

    await Article.find({ author }).count()
        .then(rel => {
            count = rel
        })

    let totalPage = 0
    if (totalPage > 0 && page > totalPage) {
        page = totalPage
    } else if (page < 1) {
        page = 1
    }
    let start = (page - 1) * pageSize
    await Article.find({ author }).skip(start).limit(pageSize)
        .then(rel => {
            if (rel && rel.length > 0) {
                ctx.body = {
                    code: 200,
                    msg: 'Article is retrieved successfully.'
                }
            } else {
                ctx.body = {
                    code: 300,
                    msg: 'Failed to retrieve article.'
                }
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                msg: 'Abnormal in retrieve.'
            }
        })
}

const findOne = async (ctx) => {
    let { id } = ctx.query
    await Article.findOne({ id })
        .then(rel => {
            if (rel) {
                ctx.body = {
                    code: 200,
                    msg: 'Article is retrieved successfully.',
                    result: rel
                }
            } else {
                ctx.body = {
                    code: 300,
                    msg: 'Failed to retrieve article.'
                }
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                msg: 'Abnormal in retrieve.'
            }
        })
}


module.exports = {
    add, findAll, findOne, update, del
}