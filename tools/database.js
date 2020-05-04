const db = require('../db/models')

const getRole = async (roleName) => {
    const role = await db.Role.findOne({where: {name: roleName}})

    return role
}

module.exports = {getRole}
