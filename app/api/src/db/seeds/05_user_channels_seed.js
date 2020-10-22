exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user_channels')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('user_channels').insert([
        {
          id: 1,
          userId: 1,
          channelId: 1,
        },
        {
          id: 2,
          userId: 1,
          channelId: 2,
        },
      ])
    })
}
