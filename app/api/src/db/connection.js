import knex from 'knex'
import connection from '../../knexfile'

const environment = process.env.NODE_ENV || 'development'

export default knex(connection[environment])
