const data = require ('./to-data')

module.exports =
  async () => {
    let projects_tasks_records = await (
      data ('projects_tasks')
    )

    return projects_tasks_records
  }
