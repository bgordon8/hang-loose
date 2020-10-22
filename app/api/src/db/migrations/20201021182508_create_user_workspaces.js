exports.up = function (knex) {
  return knex.schema.createTable('user_workspaces', (table) => {
    table.increments()
    table.integer('userId').notNullable().references('users.id').onDelete('CASCADE')
    table.integer('workspaceId').notNullable().references('workspaces.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user_workspaces')
}
