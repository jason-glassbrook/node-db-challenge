const data = require ('./to-data')

module.exports =
  async () => {
    const task_records = await (
      data ('tasks')
    )

    return task_records
  }
