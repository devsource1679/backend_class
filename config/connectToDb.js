const mongoose = require('mongoose')
const dotEnv = require('dotenv')
dotEnv.config()

const mongodbUri = process.env.mongodb_uri

const connectToDb = async () => {
    console.log('connecting to DB.....')
    try {
        const connected = await mongoose.connect(mongodbUri)
        if(connected){
            console.log('Mongodb is connected ✅');
            
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToDb