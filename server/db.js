const mongoose = require('mongoose')

module.exports = () => {
    try {
ATLAS_URI = 'mongodb+srv://test01:test@cluster0.cu1kwiy.mongodb.net/?retryWrites=true&w=majority'
        mongoose.connect(process.env.ATLAS_URI,{})
        console.log('Connection Successfull!!!')
    }
    catch (error) {
        console.log(error)
        console.log('Connection Failed')

    }



}