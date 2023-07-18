import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'

export default async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
