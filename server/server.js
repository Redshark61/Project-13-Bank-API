import express from "express";
import dotEnv from 'dotenv'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import yaml from 'yamljs'
import dbConnection from './database/connection.js'
import userRouter from './routes/userRoutes.js'
import accountRouter from './routes/accountRoutes.js'

const swaggerTransactionDocs = yaml.load('./swagger-transaction.yaml')
const swaggerDocs = yaml.load('./swagger.yaml')

dotEnv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Connect to the database
dbConnection()

// Handle CORS issues
app.use(cors())

// Request payload middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Handle custom routes
app.use('/api/v1/user', userRouter)
app.use('/api/v1/account', accountRouter)

// API Documentation
if (process.env.NODE_ENV !== 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
  app.use('/api-docs-transaction', swaggerUi.serve, swaggerUi.setup(swaggerTransactionDocs))
}

app.get('/', (req, res, next) => {
  res.send('Hello from my Express server v2!')
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
