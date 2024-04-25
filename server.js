import express from "express"
import dotenv from "dotenv"
import { initDB } from "./Utils/initDB.js"
import userRoute from "./Routes/User.js"
dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/users', userRoute)


initDB(app)

app.use((err, req, res, next)=>{
    res.status(404).json({message: "resources not found"})
})