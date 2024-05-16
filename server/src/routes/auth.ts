import express, {Request, Response} from "express"
import { UserSchema } from "common-vacay"
import { User } from "../models/user"
import bcrypt from "bcryptjs"
export const authRouter = express.Router()

const loginData = UserSchema.partial({
    firstName: true,
    lastName: true
})

authRouter.post("/login", async (req: Request, res: Response) => {
    const parseResult = loginData.safeParse(req.body)
    if(!parseResult.success){
        console.log("Invalid login data, Error in parsing", parseResult.error.message)
        return res.status(400).json({ message: "Invalid user data" })
    }
    try{
        const userExists = await User.findOne({ email: parseResult.data.email })
        if(!userExists){
            return res.status(404).json({ message: "User doesn't exists" })
        }
        const isMatch = bcrypt.compare(parseResult.data.password, userExists.password)
        if(!isMatch){
            return res.status(400).json({ message: "Invalid credentials" })
        }
        return res.status(200).json({ message: "Successfully logged in" })
    }catch(error){
        console.log("Error in login route", error)
        return res.status(500).json({ message: "Internal error"})
    }
})