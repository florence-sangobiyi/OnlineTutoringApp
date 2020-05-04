const db = require('../db/models')

const categories = {
    create: (req, res) => {
      db.Category.findOrCreate({where: {name: req.body.name}, defaults: req.body})
      .then(([category]) => {
        res.status(201).send({data: category})
      }).catch((error) => {
        res.status(422).send({data: error.message})
      })
    }
  }
  
  module.exports = categories
  