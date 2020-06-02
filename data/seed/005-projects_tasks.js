
exports.seed = (knex) => (
  // delete ALL existing entries
  knex ('projects_tasks')
  .delete ()
  .then (() => (
    // insert seed entries
    knex ('projects_tasks').insert ([
      {
        project_id : 1,
        task_id : 1,
      },
      {
        project_id : 1,
        task_id : 2,
      },
    ])
  ))
)
