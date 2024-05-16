import jwt from "jsonwebtoken"
import "dotenv/config"
import ms from "ms"

export const generateToken = (userId: string) => {
    const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET as string, { expiresIn: ms("2 days")})
    return token
}