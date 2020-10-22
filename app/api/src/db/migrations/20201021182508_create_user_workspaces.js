exports.up = function (knex) {
  return knex.schema.createTable('user_workspaces', (table) => {
    table.increments()
    table.integer('workspaceId').notNullable().references('workspaces.id').onDelete('CASCADE')
    table.integer('userId').notNullable().references('users.id').onDelete('CASCADE')
    table.timestamp(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user_workspaces')
}
