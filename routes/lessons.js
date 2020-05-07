const express = require('express')
const lessons = require('../controllers/lessonsController')
const permissions = require('../middleware/permissions')

const router = express.Router()

router.route('/:id')
  .patch(permissions.isAdmin, lessons.update)
  .delete(permissions.isAdmin, lessons.delete)

module.exports = router
