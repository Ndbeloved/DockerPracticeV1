import express from "express"
const router = express.Router()
import { createUser } from "../Controller/userController.js"

//puts in a new user
router.post('/create', createUser)



export default router