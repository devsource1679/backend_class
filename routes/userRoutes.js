const express = require('express')
const { getAllUsers, getSingleUser, updateUser, deleteUser } = require('../controllers/users')
const isLoggedIn = require('../middlewares/isLoggedIn')
const isAdmin = require('../middlewares/isAdmin')
const userRouter = express.Router()

userRouter.get('/', getAllUsers)
userRouter.route('/:userId')
.get(getSingleUser)
.patch(updateUser)
.delete(isLoggedIn, isAdmin, deleteUser)

module.exports = userRouter 