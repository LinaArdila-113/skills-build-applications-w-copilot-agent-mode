import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 8000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit-tracker'

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
  })

// Health Check Endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OctoFit Tracker API is running' })
})

// Root Endpoint
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to OctoFit Tracker API' })
})

// Start Server
app.listen(PORT, () => {
  console.log(`OctoFit Tracker backend server running at http://localhost:${PORT}`)
})
