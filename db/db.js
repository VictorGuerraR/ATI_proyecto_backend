import dotenv from 'dotenv'
import Knex from 'knex'
dotenv.config()

const db = Knex({
  client: 'pg',
  connection:{
    connectionString:process.env.DB_CONECTION
  }
})

export default db;