import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import { userRouter } from './routes/user'
import { authRouter } from './routes/auth'


const app = express()

// if credentials in cors is not set to true, the cookie sent to the web will not be saved, in other words the response cookie will be ignored
// the origin attribute defines the cross origin domains from which the server is going to accept requests
app.use(cors({
    credentials: true,
    origin: "http://127.0.0.1:5173"
}))

app.use(express.json())

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