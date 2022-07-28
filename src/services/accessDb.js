require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
})

const connectDb = async () => {
  try {
    await pool.connect()
  } catch (err) {
    console.log(err)
  }
}

module.exports = { pool, connectDb }