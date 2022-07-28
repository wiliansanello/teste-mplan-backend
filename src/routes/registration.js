const express = require('express')
const router = express.Router()

const registrationController = require('../controllers/registration')

router.get('/registration', registrationController.registration)

module.exports = router