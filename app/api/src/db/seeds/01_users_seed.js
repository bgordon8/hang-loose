exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'Leonardo',
          email: 'leo@email.com',
          password: 'password123',
          created_at: new Date('07/15/1984').toISOString(),
          updated_at: new Date('07/15/1984').toISOString(),
        },
        {
          id: 2,
          username: 'Donatello',
          email: 'don@email.com',
          password: 'password123',
          created_at: new Date('07/15/1984').toISOString(),
          updated_at: new Date('07/15/1984').toISOString(),
        },
        {
          id: 3,
          username: 'Michelangelo',
          email: 'mikey@email.com',
          password: 'password123',
          created_at: new Date('07/15/1984').toISOString(),
          updated_at: new Date('07/15/1984').toISOString(),
        },
        {
          id: 4,
          username: 'Raphael',
          email: 'ralph@email.com',
          password: 'password123',
          created_at: new Date('07/15/1984').toISOString(),
          updated_at: new Date('07/15/1984').toISOString(),
        },
      ])
    })
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
    })
}
