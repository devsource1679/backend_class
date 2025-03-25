const userModel = require('../models/user')
// find() return all documents
// find({name: 'test'}) return all documents that matches the query

// collection.findById(pokju98f7qt6wfyvdbiu) ==> returns the document that with the specified id from the collection reference

// collection.findByIdAndDelete(0a9876fgvabuiohygek)x
// findByIdAndUpdate(0a9876fgvabuiohygek, {})

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find()
        if(!users){
            res.status(400).json({
                status: 'error',
                message: 'unable to fetch users'
            })
        }
        res.status(200).json({
            status: 'success',
            data: users
        })
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error
        })
    }
}

// GET SINGLE USER
const getSingleUser = async (req, res)=>{
    const {userId} = req.params
    try {
        const user = await userModel.findById(userId)
        if(!user){
            res.status(400).json({
                status: 'error',
                message: 'unable to fetch user'
            })
        }
        res.status(200).json({
            status: 'success',
            user
        })
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (req, res)=>{
    const {userId} = req.params
    try {
        // {name: 'babs'}
        const user = await userModel.findByIdAndUpdate(userId, req.body)
        if(!user){
            res.status(400).json({
                status: 'error',
                message: 'unable to update user'
            })
        }
        res.status(200).json({
            status: 'success',
            user
        })

    } catch (error) {
        console.log(error)
    }
}

const deleteUser = async (req, res)=>{
    const {userId} = req.params
    try {
       await userModel.findByIdAndDelete(userId)
        res.status(200).json({
            status: 'success',
            messaage: 'user hass been deleted'
        })

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
}