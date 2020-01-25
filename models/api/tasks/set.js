const data = require ('./to-data')
const get = require ('./get')

module.exports =
  async (task_id, task_value) => {
    await (
      data ('tasks')
      .where ({ id : task_id })
      .update (task_value)
    )

    let task_record = await get (task_id)

    return task_record
  }
