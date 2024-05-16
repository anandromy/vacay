import jwt, { JwtPayload } from "jsonwebtoken"
import "dotenv/config"
import { NextFunction, Request, Response } from "express"


declare global {
    namespace Express {
        interface Request {
            userId: string
        }
    }
}


export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies["auth_token"]
    if(!token){
        return res.status(401).json({ message: "Unauthorized" })
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string)
        req.userId = (decoded as JwtPayload).userId as string
        next();
    }catch(error){
        return res.status(401).json({ message: "Unauthorized" })
    }
}