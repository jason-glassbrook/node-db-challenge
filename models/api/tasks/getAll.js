const data = require ('./to-data')
const boolify = require ('../boolify')

module.exports =
  async () => {
    let task_records = await (
      data
      .select ([
        't.id',
        't.description',
        't.notes',
        't.completed',
        'p.name as project_name',
        'p.description as project_description',
      ])
      .from ('projects_tasks as p_t')
      .join ('projects as p', 'p.id', '=', 'p_t.project_id')
      .join ('tasks as t', 't.id', '=', 'p_t.task_id')
    )

    task_records = task_records.map (
      (record) => boolify (record, 'completed')
    )

    return task_records
  }
