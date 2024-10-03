import express from 'express'
import dotenv from  'dotenv'
dotenv.config({
    path:'.env'
})
import databaseConnection from './config/database.js'
databaseConnection();
const app = express()
const PORT = 8080;

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening at port no ${process.env.PORT}`);
}) 