const data = require ('./to-data')

module.exports =
  async (projects_tasks_query) => {
    let projects_tasks_records = await (
      data ('projects_tasks')
      .where (projects_tasks_query)
    )

    return projects_tasks_records
  }
