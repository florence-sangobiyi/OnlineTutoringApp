const db = require('../db/models')

const getRole = async (roleName) => {
    const role = await db.Role.findOne({where: {name: roleName}})

    return role
}

const getRecord = async (id, model) => {
    const record =  await model.findByPk(id)

    return record && record.get({plain: true})
}

module.exports = {getRole, getRecord}
