import express, { Request, Response } from 'express'
import { User } from '../models/user'
import { UserSchema } from 'common-vacay'
import { generateToken } from '../middleware/generateToken'
import ms from 'ms'

export const userRouter = express.Router()

userRouter.post("/", async (req: Request, res: Response) => {

    // parsing doesn't stops the user from sending something extra along with all the neccessary data but this concern also handler below by mongoose
    const parseResult = UserSchema.safeParse(req.body)

    if(!parseResult.success){
        console.log("Error in parsing create new user data", parseResult.error.message)
        return res.status(400).json({ message: "Invalid user data" })
    }
    try{
        const userExists = await User.findOne({
            email: parseResult.data.email
        })
        if(userExists){
            return res.status(400).json({ message: "User already exists" })
        }
        
        // While creating a new user, mongoose will only pick and choose the properties defined inside user model even if there are some extras
        const newUser = new User(parseResult.data)
        await newUser.save()
        const token = generateToken(`${newUser._id}`)
        res.cookie("auth_token", token, { httpOnly: true, secure: true, maxAge: ms("2 days"), sameSite: "none" })
        return res.status(200).json({ message: "Created new user" })
    }catch(error){
        console.log("CREATE USER ROUTE: ", error)
        return res.status(500).json({ message: "Internal error" })
    }
})

