const data = require ('./to-data')
const boolify = require ('../boolify')

module.exports =
  async () => {
    let task_records = await (
      data ('tasks')
    )

    task_records = task_records.map (
      (record) => boolify (record, 'completed')
    )

    return task_records
  }
