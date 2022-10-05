import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const { DATABASE_URL: connectionString } = process.env

const db = new Pool({
  connectionString
})

export default db
