const express = require('express')
const subjects = require('../controllers/subjectsController')
const permissions = require('../middleware/permissions')

const router = express.Router()

router.route('/:id')
  .patch(permissions.isAdmin, subjects.update)
  .delete(permissions.isAdmin, subjects.delete)

module.exports = router
