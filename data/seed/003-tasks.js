
exports.seed = (knex) => (
  // delete ALL existing entries
  knex ('table_name')
  .delete ()
  .then (() => (
    // insert seed entries
    knex ('table_name').insert ([
      {
        id: 1,
        description: `this is a task's description`,
        notes: `this is a task's notes`,
        completed: false,
      },
      {
        id: 2,
        description: `this is another task's description`,
        notes: `this is another task's notes`,
        completed: false,
      },
    ])
  ))
)
