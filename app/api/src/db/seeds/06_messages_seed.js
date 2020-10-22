exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('messages')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {
          id: 1,
          channelId: 1,
          authorId: 1,
          content: 'this is the first message!',
          created_at: new Date('10/12/2020').toISOString(),
          updated_at: new Date('10/12/2020').toISOString(),
        },
        {
          id: 2,
          channelId: 1,
          authorId: 2,
          content: 'this is the second message!',
          created_at: new Date('10/12/2020').toISOString(),
          updated_at: new Date('10/12/2020').toISOString(),
        },
      ])
    })
    .then(() => {
      return knex.raw("SELECT setval('messages_id_seq', (SELECT MAX(id) FROM messages))")
    })
}
