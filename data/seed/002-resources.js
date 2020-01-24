
exports.seed = (knex) => (
  // delete ALL existing entries
  knex ('table_name')
  .delete ()
  .then (() => (
    // insert seed entries
    knex ('table_name').insert ([
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
