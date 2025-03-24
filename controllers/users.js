const userModel = require('../models/user')
// find() return all documents
// find({name: 'test'}) return all documents that matches the query

// collection.findById(pokju98f7qt6wfyvdbiu) ==> returns the document that with the specified id from the collection reference

// collection.findByIdAndDelete(0a9876fgvabuiohygek)x
// findByIdAndUpdate(0a9876fgvabuiohygek)

const getAllUsers = async (req, res)=>{
    try {
        const users = await userModel.find()
        if(!users){
            res.status(404).json({
                status: 'error',
                message: 'Unable to fetch users'
            })
            return
        }
        res.status(200).json({
            status: 'success',
            message: 'users fetched successfully',
            users
        })
    } catch (error) {
        console.log(error)
    }
}

const getSingleUser = async (req, res)=>{
    
}

module.exports = {
    getAllUsers,
    getSingleUser
}