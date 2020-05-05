const db = require('../db/models')

const categories = {
  create: (req, res) => {
    db.Category.findOrCreate({ where: { name: req.body.name }, defaults: req.body })
      .then(([category]) => {
        res.status(201).send({ data: category })
      }).catch((error) => {
        res.status(422).send({ data: error.message })
      })
  },
  createSubject: (req, res) => {
    db.Category.findOne({ where: { id: req.params.id } })
      .then((category) => {
        if (category) {
          category.createSubject(req.body)
            .then((subject) => {
              res.status(201).send({data: subject})
            }).catch((error) => {
              res.status(422).send({ data: error.message })
            })
        } else {
          res.status(422).send({ data: 'unable to create subject for this category' })
        }
      }).catch((error) => {
        res.status(422).send({ data: error.message })
      })
  },
  index: (req, res) => {
    db.Category.findAll().then((data) => {
      res.status(200).send({data})
    }).catch((error) => {
      res.status(422).send({ data: error.message })
    })
  }, 
  getSubjects: (req, res) => {
    db.Category.findOne({ where: { id: req.params.id } })
      .then((category) => {
        if (category) {
          category.getSubjects().then((subjects) => {
            res.status(200).send({data: subjects})
          }).catch((error) => {
            res.status(422).send({ data: error.message })
          })
        } else {
          res.status(422).send({ data: 'unable to fetch subjects for this category' })
        }
      }).catch((error) => {
        res.status(422).send({ data: error.message })
      })
  } 
}

module.exports = categories
