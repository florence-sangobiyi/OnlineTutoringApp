const express = require('express');
const router = express.Router();
const categories = require('../controllers/categoriesController')
const permissions = require('../middleware/permissions')

router.route('/')
  .post(permissions.isAdmin, categories.create)
  .get(permissions.isAuthenticated, categories.index)

router.route('/:id/subjects')
  .post(permissions.isAdmin, categories.createSubject)
  .get( permissions.isAuthenticated, categories.getSubjects)

module.exports = router
