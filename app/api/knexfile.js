// Update with your config settings.
const path = require('path')
const ROOT_DIR = path.resolve(__dirname)

module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost:5432/hang_loose',
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(ROOT_DIR, '/src/db/migrations'),
    },
    seeds: {
      directory: path.join(ROOT_DIR, '/src/db/seeds'),
    },
  },

  test: {
    client: 'postgresql',
    connection: 'postgres://localhost:5432/hang_loose_test',
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(ROOT_DIR, '/src/db/migrations'),
    },
    seeds: {
      directory: path.join(ROOT_DIR, '/src/db/seeds'),
    },
  },

  production: {
    client: 'postgresql',
    connection: 'postgres://localhost:5432/hang_loose',
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(ROOT_DIR, '/src/db/migrations'),
    },
    seeds: {
      directory: path.join(ROOT_DIR, '/src/db/seeds'),
    },
  },
}
