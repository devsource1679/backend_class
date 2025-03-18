const userModel = require('../models/user') 

const signUp = async (req, res)=>{
    try {
        const user = await userModel.create(req.body)
        if(!user){
            res.status(400).json({
                status: 'error',
                message: 'User not created'
            })
            return
        }
        res.status(201).json({
            status: 'success',
            message: 'User created successfully.',
            user
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports ={
    signUp
}