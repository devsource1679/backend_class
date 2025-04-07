const userModel = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

const signUp = async (req, res) => {
    const { password } = req.body
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = await userModel.create({ ...req.body, password: hashedPassword })
        if (!user) {
            res.status(400).json({
                status: 'error',
                message: 'User not created'
            })
            return
        }
        res.status(201).json({
            status: 'success',
            message: 'User created successfully.'
        })
    } catch (error) {
        console.log(error)
    }
}

// SIGN IN
const signin = async (req, res) => {
    const {email, password} = req.body
    try {
        // verify email
        const user = await userModel.findOne({email})
        if (!user) {
            res.status(400).json({
                status: 'error',
                message: 'Email or password is incorrect'
            })
            return
        }
        // verify pass
        const passwordCorrect = await bcrypt.compare(password, user.password)
        if(!passwordCorrect){
            res.status(400).json({
                status: 'error',
                message: 'Email or password is incorrect'
            })
            return
        }
        // generate token
        const token = jwt.sign({email:user.email, id: user._id}, process.env.jwt_secret, {expiresIn: process.env.jwt_exp})
        res.status(200).json({
            status: "success",
            message: "Login successful",
            token
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    signUp,
    signin
}