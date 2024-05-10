import express, { Request, Response } from 'express'
import { User } from '../models/user'
export const userRouter = express.Router()


userRouter.post("/", async (req: Request, res: Response) => {
    const { email, password, firstName, lastName } = req.body
    try{
        const userExists = await User.findOne({
            email: email
        })
        if(userExists){
            return res.status(400).json({ message: "User already exisits" })
        }
        const newUser = new User({ email, password, firstName, lastName })
        await newUser.save()
        return res.status(200).json({ message: "Created new user" })
    }catch(error){
        console.log("CREATE USER ROUTE: ", error)
        return res.status(500).json({ message: "Internal error" })
    }
})

