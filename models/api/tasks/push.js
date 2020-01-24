const db = require ('./db')
const get = require ('./get')

module.exports =
  async (task_value) => {
    const [ task_id ] = await (
      db ('tasks')
      .insert (task_value)
    )

    const task_record = await get (task_id)

    return task_record
  }
