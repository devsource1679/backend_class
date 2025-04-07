const express = require('express')
const { signUp, signin } = require('../controllers/authController')
const authRouter = express.Router()

authRouter.route('/sign-up').post(signUp)
authRouter.route("/sign-in").post(signin)

module.exports = authRouter