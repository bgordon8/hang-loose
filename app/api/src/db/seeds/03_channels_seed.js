exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('channels')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('channels').insert([
        {
          id: 1,
          name: 'general',
          workspaceId: 1,
          created_at: new Date('10/21/2020').toISOString(),
          updated_at: new Date('10/21/2020').toISOString(),
        },
        {
          id: 2,
          name: 'random',
          workspaceId: 1,
          created_at: new Date('10/21/2020').toISOString(),
          updated_at: new Date('10/21/2020').toISOString(),
        },
        {
          id: 3,
          name: 'planned',
          workspaceId: 2,
          created_at: new Date('10/21/2020').toISOString(),
          updated_at: new Date('10/21/2020').toISOString(),
        },
      ])
    })
    .then(() => {
      return knex.raw("SELECT setval('channels_id_seq', (SELECT MAX(id) FROM channels))")
    })
}
