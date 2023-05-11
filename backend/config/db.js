// connecting to DB
const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, useUnifiedTopology: true
        })
        console.log(`db connected ${conn.connection.host}`)
    } catch(error){
        console.log('connection failed')
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB