const data = require ('./to-data')
const boolify = require ('../boolify')

module.exports =
  async () => {
    const task_records = await (
      data ('tasks')
    )

    return task_records.map (
      (record) => boolify (record, 'completed')
    )
  }
