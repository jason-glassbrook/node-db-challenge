const data = require ('./to-data')
const boolify = require ('../boolify')

module.exports =
  async (task_id) => {
    let [ task_record ] = await (
      data ('tasks')
      .where ({ id : task_id })
    )

    task_record = boolify (task_record, 'completed')

    return task_record
  }
