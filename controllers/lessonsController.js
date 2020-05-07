const db = require('../db/models')
const {getRecord} = require('../tools/database')

const lessons = {
  update: (req, res) => {
    db.Lesson.findByPk(req.params.id).then((lesson) => {
      if (lesson) {
        lesson.update(req.body).then((data) => {
          res.status(200).send({ data })
        }).catch((error) => {
          res.status(422).send({ data: error.message })
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
          res.status(202).send({ data: 'lesson deleted' })
        }).catch((error) => {
          res.status(422).send({ data: error.message })
        })
      } else {
        res.status(404).send({ data: 'unable to delete lesson' })
      }
    }).catch((error) => {
      res.status(422).send({ data: error.message })
    })
  },
  create: async (req, res) => {
    const {subject_id, ...lesson} = req.body
    const subject = subject_id ? await getRecord(subject_id, db.Subject) : null

    if (subject) {
      db.Lesson.create({...lesson, student_id: req.decoded.id}).then((data) => {
        data.addSubject(subject).then(() => {
          res.status(201).send({data})
        }).catch((error) => {
          res.status(422).send({ data: error.message })
        })
      }).catch((error) => {
        res.status(422).send({ data: error.message })
      })
    } else {
      res.status(422).send({data: 'unable to be lesson without a subject'})
    } 
  }, 
  index: (req, res) => {
    db.Lesson.findAll().then((data) => {
      res.status(200).send({data})
    }).catch((error) => {
      res.status(422).send({ data: error.message })
    })
  }
}

module.exports = lessons

