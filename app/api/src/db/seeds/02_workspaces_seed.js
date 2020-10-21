exports.seed = function (knex) {
  return knex('workspaces')
    .del()
    .then(function () {
      return knex('workspaces').insert([
        {
          id: 1,
          name: 'good-guys',
          cname: 'good-guys',
          ownerId: 1,
          created_at: new Date('10/21/2020').toISOString(),
          updated_at: new Date('10/21/2020').toISOString(),
        },
        {
          id: 2,
          name: 'misguided-soles',
          cname: 'misguided-soles',
          ownerId: 1,
          created_at: new Date('10/21/2020').toISOString(),
          updated_at: new Date('10/21/2020').toISOString(),
        },
      ])
    })
    .then(() => {
      return knex.raw("SELECT setval('workspaces_id_seq', (SELECT MAX(id) FROM workspaces))")
    })
}
