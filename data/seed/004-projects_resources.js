
exports.seed = (knex) => (
  // delete ALL existing entries
  knex ('projects_resources')
  .delete ()
  .then (() => (
    // insert seed entries
    knex ('projects_resources').insert ([
      {
        project_id : 1,
        resource_id : 1,
      },
      {
        project_id : 1,
        resource_id : 2,
      },
    ])
  ))
)
