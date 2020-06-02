const data = require ('./to-data')
const get = require ('./get')

module.exports =
  async (task_id) => {
    let task_record = await get (task_id)

    await (
      data ('tasks')
      .where ({ id : task_id })
      .delete ()
    )

    return task_record
  }
