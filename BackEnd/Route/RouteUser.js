import express from 'express'
import {Auth ,inscription , SeConnecter , CreateUser} from "../Controller/UserController.js"
const router = express.Router()




router.post("/signUp" , inscription)
router.post("/login" , SeConnecter)
router.post("/createuser" , CreateUser)

router.get("/" , Auth ,( req, res) => {res.send(Helloooooo)})
export default router; 