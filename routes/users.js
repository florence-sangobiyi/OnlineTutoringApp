const express = require('express');
const router = express.Router();
const users = require('../controllers/usersController')

/* GET users listing. */
router.post('/sign-up', users.create)

router.post('/sign-in', users.signIn)

module.exports = router;
