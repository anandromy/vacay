import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import { userRouter } from './routes/user'
import { authRouter } from './routes/auth'
// Parses cookies, without it req.cookies would be
import cookieParser from "cookie-parser"
import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const app = express()

// if credentials in cors is not set to true, the cookie sent to the web will not be saved, in other words the response cookie will be ignored
// the origin attribute defines the cross origin domains from which the server is going to accept requests
app.use(cors({
    credentials: true,
    origin: "http://127.0.0.1:5173"
}))

app.use(express.json())
app.use(cookieParser())


const PORT = process.env.PORT
app.use("/user", userRouter)
app.use("/auth", authRouter)


app.get("/", (req, res) => {
    res.sendStatus(200)
})
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

mongoose.connect(process.env.DB_URL as string).then(() => {
    console.log("Database connected")
})