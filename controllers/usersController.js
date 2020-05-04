const bcrypt = require('bcrypt')
const db = require('../db/models')
const {getRole} = require('../tools/database')

const users = {
  create: async (req, res) => {
    const {role, ...userData} = req.body
    const userRole = await getRole(role) || {}

    db.User.findOrCreate({where: {email: userData.email}, defaults: {...userData, role_id: userRole.id}})
    .then(([user]) => {
      res.status(201).send({data: user})
    }).catch((error) => {
      res.status(422).send({data: error})
    })
  }
}

module.exports = users
