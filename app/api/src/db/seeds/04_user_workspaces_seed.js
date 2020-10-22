exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user_workspaces')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('user_workspaces').insert([
        {
          id: 1,
          userId: 1,
          workspaceId: 1,
        },
        {
          id: 2,
          userId: 2,
          workspaceId: 1,
        },
        {
          id: 3,
          userId: 1,
          workspaceId: 2,
        },
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('user_workspaces_id_seq', (SELECT MAX(id) FROM user_workspaces))"
      )
    })
}
