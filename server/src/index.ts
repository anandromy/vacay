import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import { userRouter } from './routes/user'
import { authRouter } from './routes/auth'


const app = express()

app.use(cors())
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