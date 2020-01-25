const data = require ('./to-data')

module.exports =
  async (task_id) => {
    const [ task_record ] = await (
      data ('tasks')
      .where ({ id : task_id })
      )

    return task_record
  }
