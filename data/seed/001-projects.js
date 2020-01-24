
exports.seed = (knex) => (
  // delete ALL existing entries
  knex ('table_name')
  .delete ()
  .then (() => (
    // insert seed entries
    knex ('table_name').insert ([
      {
        id: 1,
        name: `this is a project's name`,
        description: `this is a project's description`,
        completed: false,
      },
    ])
  ))
)
