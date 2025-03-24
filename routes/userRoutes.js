const express = require('express')
const { getAllUsers } = require('../controllers/users')
const userRouter = express.Router()

userRouter.get('/', getAllUsers)
userRouter.get('/single')

module.exports = userRouter