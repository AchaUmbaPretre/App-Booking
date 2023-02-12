import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import authRoute from './routes/auth.js'
import roomsRoute from './routes/rooms.js'
import hotelsRoute from './routes/hotels.js'
import usersRoute from './routes/users.js'

dotenv.config();
const app = express();

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('base de données est connectée')
    }
    catch(error){
        throw error
    }
}
mongoose.set('strictQuery', false)
mongoose.connection.on("disconnected", ()=>{
    console.log("MongoDb Deconnecté")
})

app.use(cors())
app.use(express.json())
app.use('/api/auth',authRoute)
app.use('/api/hotels',hotelsRoute)
app.use('/api/rooms',roomsRoute)
app.use('/api/users',usersRoute)


app.listen(process.env.PORT,()=>{
    connect()
    console.log("Backend est connecté")
})