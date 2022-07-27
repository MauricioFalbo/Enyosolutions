import dotenv from 'dotenv'
import type { Knex } from 'knex'
dotenv.config({ path: '../../../.env' })

const config: { [key: string]: Knex.Config } = {
  development: {
    debug: true,
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST_TEST,
      port: Number(process.env.DB_PORT_TEST),
      user: process.env.DB_USER_TEST,
      password: process.env.DB_PASS_TEST,
      database: process.env.DB_DATABASE_TEST,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
}

export default config
