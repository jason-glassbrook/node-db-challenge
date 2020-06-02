
exports.seed = (knex) => (
  // delete ALL existing entries
  knex ('projects')
  .delete ()
  .then (() => (
    // insert seed entries
    knex ('projects').insert ([
      {
        id: 1,
        name: `this is a project's name`,
        description: `this is a project's description`,
        completed: false,
      },
    ])
  ))
)
