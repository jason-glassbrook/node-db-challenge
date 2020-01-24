const db = require ('./db')

module.exports =
  async () => {
    const projects_tasks_records = await (
      db ('projects_tasks')
    )

    return projects_tasks_records
  }
