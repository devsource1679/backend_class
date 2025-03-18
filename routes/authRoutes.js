const express = require('express')
const { signUp } = require('../controllers/authController')
const authRouter = express.Router()

authRouter.route('/sign-up').post(signUp)

module.exports = authRouter