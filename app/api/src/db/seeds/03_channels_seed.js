exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('channels')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('channels').insert([
        {
          id: 1,
          workspaceId: 1,
          name: 'general',
          created_at: new Date('10/21/202').toISOString(),
          updated_at: new Date('10/21/202').toISOString(),
        },
        {
          id: 2,
          workspaceId: 1,
          name: 'random',
          created_at: new Date('10/21/202').toISOString(),
          updated_at: new Date('10/21/202').toISOString(),
        },
        {
          id: 3,
          workspaceId: 2,
          name: 'general',
          created_at: new Date('10/21/202').toISOString(),
          updated_at: new Date('10/21/202').toISOString(),
        },
      ])
    })
}
