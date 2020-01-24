const db = require ('./db')

module.exports =
  async () => {
    const task_records = await (
      db ('tasks')
    )

    return task_records
  }
