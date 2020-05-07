const db = require('../db/models')

const lessons = {
  update: (req, res) => {
    db.Lesson.findByPk(req.params.id).then((lesson) => {
      if (lesson) {
        lesson.update(req.body).then((data) => {
          res.status(200).send({ data })
        }).catch((error) => {
          res.status(422).send({data: error.message })
        })
      } else {
        res.status(404).send({ data: 'unable to update missing lesson' })
      }
    }).catch((error) => {
      res.status(422).send({ data: error.message })
    })
  },
  delete: (req, res) => {
    db.Lesson.findByPk(req.params.id).then((lesson) => {
      if (lesson) {
        lesson.destroy().then(() => {
          res.status(202).send({data: 'lesson deleted'})
        }).catch((error) => {
          res.status(422).send({data: error.message})
        })
      } else {
        res.status(404).send({ data: 'unable to delete lesson' })
      }
    }).catch((error) => {
      res.status(422).send({data: error.message})
    })
  }
}

module.exports = lessons

