const express = require('express');
const router = express.Router();
const categories = require('../controllers/categoriesController')

router.route('/')
  .post(categories.create)
  .get(categories.index)

router.route('/:id/subjects')
  .post(categories.createSubject)
  .get(categories.getSubjects)

module.exports = router
