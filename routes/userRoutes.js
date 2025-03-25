const express = require('express')
const { getAllUsers, getSingleUser, updateUser, deleteUser } = require('../controllers/users')
const userRouter = express.Router()

userRouter.get('/', getAllUsers)
userRouter.route('/:userId').get(getSingleUser).patch(updateUser).delete(deleteUser)

module.exports = userRouter 