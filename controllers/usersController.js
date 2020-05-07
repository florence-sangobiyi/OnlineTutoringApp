const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const db = require('../db/models')
const {getRole} = require('../tools/database')

require('dotenv').config()

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
  }, 
  signIn: (req, res) => {
    db.User.findOne({where: {email: req.body.email}}).then((user) => {
      if (user) {
        bcrypt.compare(req.body.password, user.password, (error, result) => {
          if (result) {
            const token = jwt.sign({
              id: user.id,
              firstName: user.firstName, 
              email: user.email,
              role_id: user.role_id
            }, process.env.SECRET, {expiresIn: '24h'})
            res.status(200).send({data: {user, token}})
          } else {
            res.status(422).send({data: 'email or password is incorrect'})
          }
        })
      } else {
        res.status(422).send({data: 'email or password is incorrect'})
      }
    }).catch((error) => {
      res.status(422).send({data: 'email or password is incorrect'})
    })
  }
}

module.exports = users
