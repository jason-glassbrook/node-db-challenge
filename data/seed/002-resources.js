
exports.seed = (knex) => (
  // delete ALL existing entries
  knex ('resources')
  .delete ()
  .then (() => (
    // insert seed entries
    knex ('resources').insert ([
      {
        id: 1,
        name: `this is a resource's name`,
        description: `this is a resource's description`,
      },
      {
        id: 2,
        name: `this is another resource's name`,
        description: `this is another resource's description`,
      },
    ])
  ))
)
