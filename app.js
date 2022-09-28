import dotenv from 'dotenv'
import express from 'express'
import connectDB from './DB/connection.js'
import * as indexRouter from './modules/index.router.js'
dotenv.config()
const app = express()
app.use(express.json())

const baseUrl = '/api/v1'
app.use(`${baseUrl}/auth`,indexRouter.authRouter)
app.use(`${baseUrl}/user`,indexRouter.userRouter)
app.use(`${baseUrl}/blog`,indexRouter.blogRouter)

connectDB()
app.listen(5000,()=>{
    console.log('server is running on port 5000');
})