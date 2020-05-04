const express = require('express');
const router = express.Router();
const categories = require('../controllers/categoriesController')

router.post('/', categories.create)

module.exports = router
