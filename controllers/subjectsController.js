const db = require('../db/models')

const subjects = {
  update: (req, res) => {
    db.Subject.findByPk(req.params.id).then((subject) => {
      if (subject) {
        subject.update(req.body).then((data) => {
          res.status(200).send({ data })
        }).catch((error) => {
          res.status(422).send({data: error.message })
        })
      } else {
        res.status(404).send({ data: 'unable to update missing subject' })
      }
    }).catch((error) => {
      res.status(422).send({ data: error.message })
    })
  },
  delete: (req, res) => {
    db.Subject.findByPk(req.params.id).then((subject) => {
      if (subject) {
        subject.destroy().then(() => {
          res.status(202).send({data: 'subject deleted'})
        }).catch((error) => {
          res.status(422).send({data: error.message})
        })
      } else {
        res.status(404).send({ data: 'unable to delete subject' })
      }
    }).catch((error) => {
      res.status(422).send({data: error.message})
    })
  }
}

module.exports = subjects
