import express from 'express'
import dotenv from  'dotenv'
import databaseConnection from './config/database.js' 
import cookieParser from 'cookie-parser'
import userRoute from './routes/userRoute.js'
import tweetRoute from './routes/tweetRoute.js'

import cors from 'cors'

dotenv.config({ 
    path:'.env'
})
databaseConnection();
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser()) 
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
} 
app.use(cors(corsOptions))
//app.use(cors())

//api 
app.use('/api/v1/user', userRoute)
app.use('/api/v1/tweet', tweetRoute)

app.get('/home',(req, res)=>{
    res.status(200).json({
        message:"a message from backend",
        success:true
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening at port no ${process.env.PORT}`);
}) 