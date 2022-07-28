const express = require('express')
const router = express.Router()

const recordController = require('../controllers/record')

router.post('pages/record',recordController.record)

module.exports = router
